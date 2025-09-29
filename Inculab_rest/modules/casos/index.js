import express from 'express';
import { getAll, getDocument } from '../../utils/index.js';
import { convertToOr, getQueryDate } from '../../utils/database.js';
import { deleteFiles } from '../storageGoogle/index.js';
import User from '../user/model.js';
import Casos from './model.js';

const routes = express.Router();

async function searchCasos(searchParams) {
  let query = {};
  if (searchParams?.all) {
    searchParams = {
      all: searchParams.all,
      titulo: searchParams.all,
      descripcion: searchParams.all,
      fotos: searchParams.all,
      videos: searchParams.all,
      id_categoria: searchParams.all,
      fecha_video: searchParams.all,
      createdAt: searchParams.all,
      updatedAt: searchParams.all,
    };
  }

  if (searchParams?.titulo) query.titulo = { $regex: searchParams.titulo, $options: 'i' };
  if (searchParams?.descripcion) query.descripcion = { $regex: searchParams.descripcion, $options: 'i' };
  if (searchParams?.id_categoria && ["YouTube", "Facebook"].includes(searchParams.id_categoria)) {
    query.id_categoria = searchParams.id_categoria;
  }
  if (searchParams?.fecha_video) {
    const date = getQueryDate(searchParams.fecha_video);
    if (date) query.fecha_video = date;
  }
  if (searchParams?.last_user) {
    const user = await User.findOne({ name: { $regex: searchParams.last_user, $options: 'i' } });
    if (user) query.last_user = { $in: user._id };
  }
  if (searchParams?.createdAt) {
    const date = getQueryDate(searchParams.createdAt);
    if (date) query.createdAt = date;
  }
  if (searchParams?.updatedAt) {
    const date = getQueryDate(searchParams.updatedAt);
    if (date) query.updatedAt = date;
  }
  if (searchParams?.all) query = convertToOr(query);

  return query;
}

routes.post('/list', async (req, res) => {
  try {
    let queryFind = {};
    if (req.body?.query?.search) {
      queryFind = await searchCasos(req.body.query.search);
    }
    const query = await getAll(Casos, { body: { query: { find: queryFind } } }, res);
    if (query) return res.status(200).json(query);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error al listar casos", error });
  }
});

routes.post('/read', async (req, res) => {
  try {
    const query = await getDocument(Casos, req, res);
    if (query) return res.status(200).json(query);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error al leer caso", error });
  }
});

routes.post('/create', async (req, res) => {
  try {
    const { casos } = req.body;

    if (!casos.fotos || casos.fotos.length !== 1) {
      return res.status(400).json({ message: "Debe subir exactamente una imagen." });
    }
    if (!["YouTube", "Facebook"].includes(casos.id_categoria)) {
      return res.status(400).json({ message: "Categoría inválida (YouTube o Facebook solamente)" });
    }
    if (casos.fecha_video && isNaN(Date.parse(casos.fecha_video))) {
      return res.status(400).json({ message: "Fecha de video inválida" });
    }

    const newCaso = await new Casos(casos).save();
    return res.status(200).json(newCaso);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error al crear caso", error });
  }
});

routes.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { casos } = req.body;

    if (!["YouTube", "Facebook"].includes(casos.id_categoria)) {
      return res.status(400).json({ message: "Categoría inválida (YouTube o Facebook solamente)" });
    }
    if (casos.fecha_video && isNaN(Date.parse(casos.fecha_video))) {
      return res.status(400).json({ message: "Fecha de video inválida" });
    }

    const casoAnterior = await Casos.findById(id);
    if (!casoAnterior) {
      return res.status(404).json({ message: "Caso no encontrado" });
    }

    const imagenAnterior = casoAnterior.fotos?.[0]?.url;
    const imagenNueva = casos.fotos?.[0]?.url;

    // ✅ Si hay nueva imagen distinta, eliminar la anterior
    if (imagenAnterior && imagenNueva && imagenAnterior !== imagenNueva) {
      await import('../storageGoogle/index.js').then(mod => mod.deleteFiles([{ url: imagenAnterior }]));
    }

    const updatedCaso = await Casos.findByIdAndUpdate(id, { $set: casos }, { new: true });
    return res.status(200).json(updatedCaso);

  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error al actualizar caso", error });
  }
});

routes.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const caso = await Casos.findById(id);

    if (caso?.fotos?.length > 0) {
      await deleteFiles(caso.fotos);
    }

    await Casos.deleteOne({ _id: id });

    return res.status(200).json({ message: "Caso eliminado correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error al eliminar caso", error });
  }
});

export default routes;
