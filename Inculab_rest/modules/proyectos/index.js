//initJSpropietario
import User from "../user/model.js";
//endJSpropietario
//initJSfotos
import { deleteFiles } from "../storageGoogle/index.js";
//endJSfotos
import express from 'express';
import { auth_required, getAll, getDocument } from '../../utils/index.js';
import { convertToOr, getQueryDate } from '../../utils/database.js';
import Proyectos from './model.js';
//imports
const routes = express.Router();

async function searchProyectos(searchParams) {
  let query = {};
  if (searchParams?.all) searchParams = {
    all: searchParams?.all,
    //initJSnombre
nombre: searchParams?.all,
//endJSnombre
//initJScarrera
carrera: searchParams?.all,
//endJScarrera
//initJStema
tema: searchParams?.all,
//endJStema
//initJSarea
area: searchParams?.all,
//endJSarea
//initJSdescripcion_proyecto
descripcion_proyecto: searchParams?.all,
//endJSdescripcion_proyecto
//initJScontacto
contacto: searchParams?.all,
//endJScontacto
//initJSfotos
fotos: searchParams?.all,
//endJSfotos
//initJSvideo
video: searchParams?.all,
//endJSvideo
//initJSpropietario
propietario: searchParams?.all,
//endJSpropietario
//fieldsSearch
    createdAt: searchParams?.all,
    updatedAt: searchParams?.all,
  }
  //initJSnombre
if (searchParams?.nombre) query.nombre = { $regex: searchParams.nombre, $options: 'i' };

//endJSnombre
//initJScarrera
if (searchParams?.carrera) query.carrera = { $regex: searchParams.carrera, $options: 'i' };

//endJScarrera
//initJStema
if (searchParams?.tema) query.tema = { $regex: searchParams.tema, $options: 'i' };

//endJStema
//initJSarea
if (searchParams?.area) query.area = { $regex: searchParams.area, $options: 'i' };

//endJSarea
//initJSdescripcion_proyecto
if (searchParams?.descripcion_proyecto) query.descripcion_proyecto = { $regex: searchParams.descripcion_proyecto, $options: 'i' };

//endJSdescripcion_proyecto
//initJScontacto
if (searchParams?.contacto) query.contacto = { $regex: searchParams.contacto, $options: 'i' };

//endJScontacto

//initJSpropietario
            if (searchParams?.propietario) {
                let list = await User.find({ name: { $regex: searchParams.propietario, $options: 'i' }}).exec();
                list = list.map(l => l._id);
                if (list.length > 0) query.propietario = { $in: list };
            }
            
//endJSpropietario
//ifSearch
  if (searchParams?.last_user) {
    let id = await User.findOne({ name: { $regex: searchParams.last_user, $options: 'i' } }).exec()._id;
    if (id) query.last_user = { $in: id };
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

//GET
routes.post('/list', async function (req, res) {
  if (!auth_required(req, res, ['read_proyectos'], false)) return;
  if (req?.body?.query?.search) req.body.query.find = {
    ...req.body.query.find,
    ...await searchProyectos(req?.body?.query?.search)
  }
  const query = await getAll(Proyectos, req, res);
  if (query) return res.status(200).json(query);
});

routes.post('/read', async function (req, res) {
  if (!auth_required(req, res, ['read_proyectos'], false)) return;
  const query = await getDocument(Proyectos, req, res);
  if (query) delete query._doc.password;
  if (query) return res.status(200).json(query);
});

routes.get('/list', async function (req, res) {
  try {
    const proyectos = await Proyectos.find();
    return res.status(200).json(proyectos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al obtener proyectos", error });
  }
});

//POST
routes.post('/create', async function (req, res) {
  // ⚠️ AUTENTICACIÓN DESACTIVADA porque no usas login todavía
  // if (!auth_required(req, res, ['create_proyectos'], false)) return;
  try {
    var { proyectos } = req.body;
    // Asignar propietario fijo para guardar correctamente
    proyectos.propietario = "680ebb692728033a59cd87ae";
    proyectos.last_user = proyectos.propietario;
    var query = await new Proyectos(proyectos).save();
    return res.status(200).json(query);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Datos Inválidos",
      error: error.message,
      details: error.errors || {}
    });
  }
});

//PUT
routes.put('/update/:id', async function (req, res) {
  if (!auth_required(req, res, ['update_proyectos'], false)) return;
  const { id } = req.params;
  try {
    var { proyectos } = req.body;
    proyectos.last_user = req.currentUser.id;
    //extrasUpdate
    const document = await Proyectos.findByIdAndUpdate(id, {
      $set: proyectos
    }, { new: true });
    if (!document) {
      return res.status(404).json({ message: "Documento no encontrado" });
    }
    return res.status(200).json(document);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

//DELETE
routes.delete('/delete/:id', async function (req, res) {
  if (!auth_required(req, res, ['delete_proyectos'], false)) return;
  const { id } = req.params;
  try {
    const proyectos = await Proyectos.findById(id);
    
//initJSfotos
await deleteFiles(proyectos?.fotos);
//endJSfotos
//initJSvideo
await deleteFiles(proyectos?.video);
//endJSvideo

//extrasDelete
    await Proyectos.deleteOne({ _id: id });
    return res.status(200).json({ message: "Proyectos Delete" })
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

export default routes;