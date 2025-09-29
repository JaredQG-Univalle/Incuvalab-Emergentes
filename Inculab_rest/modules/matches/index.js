//initJSid_proyecto
import Proyectos from "../proyectos/model.js";
//endJSid_proyecto
//initJSid_propietario
import User from "../user/model.js";
//endJSid_propietario
import express from 'express';
import { auth_required, getAll, getDocument } from '../../utils/index.js';
import { convertToOr, getQueryDate } from '../../utils/database.js';
import Matches from './model.js';
//imports
const routes = express.Router();

async function searchMatches(searchParams) {
  let query = {};
  if (searchParams?.all) searchParams = {
    all: searchParams?.all,
    //initJSid_propietario
id_propietario: searchParams?.all,
//endJSid_propietario
//initJSid_usuario_interesado
id_usuario_interesado: searchParams?.all,
//endJSid_usuario_interesado
//initJSid_proyecto
id_proyecto: searchParams?.all,
//endJSid_proyecto
//fieldsSearch
    createdAt: searchParams?.all,
    updatedAt: searchParams?.all,
  }
  //initJSid_propietario

            if (searchParams?.id_propietario) {
                let list = await User.find({ name: { $regex: searchParams.id_propietario, $options: 'i' }}).exec();
                list = list.map(l => l._id);
                if (list.length > 0) query.id_propietario = { $in: list };
            }
            
//endJSid_propietario
//initJSid_usuario_interesado

            if (searchParams?.id_usuario_interesado) {
                let list = await User.find({ name: { $regex: searchParams.id_usuario_interesado, $options: 'i' }}).exec();
                list = list.map(l => l._id);
                if (list.length > 0) query.id_usuario_interesado = { $in: list };
            }
            
//endJSid_usuario_interesado
//initJSid_proyecto

            if (searchParams?.id_proyecto) {
                let list = await Proyectos.find({ titulo_proyecto: { $regex: searchParams.id_proyecto, $options: 'i' }}).exec();
                list = list.map(l => l._id);
                if (list.length > 0) query.id_proyecto = { $in: list };
            }
            
//endJSid_proyecto
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
  if (!auth_required(req, res, ['read_matches'], false)) return;
  if (req?.body?.query?.search) req.body.query.find = {
    ...req.body.query.find,
    ...await searchMatches(req?.body?.query?.search)
  }
  const query = await getAll(Matches, req, res);
  if (query) return res.status(200).json(query);
});

routes.post('/read', async function (req, res) {
  if (!auth_required(req, res, ['read_matches'], false)) return;
  const query = await getDocument(Matches, req, res);
  if (query) delete query._doc.password;
  if (query) return res.status(200).json(query);
});

//POST
routes.post('/create', async function (req, res) {
  if (!auth_required(req, res, ['create_matches'], false)) return;
  try {
    var { matches } = req.body;
    //validadores
    matches.last_user = req.currentUser.id;
    //extrasCreate
    var query = await new Matches(matches).save();
    return res.status(200).json(query);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

//PUT
routes.put('/update/:id', async function (req, res) {
  if (!auth_required(req, res, ['update_matches'], false)) return;
  const { id } = req.params;
  try {
    var { matches } = req.body;
    matches.last_user = req.currentUser.id;
    //extrasUpdate
    const document = await Matches.findByIdAndUpdate(id, {
      $set: matches
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
  if (!auth_required(req, res, ['delete_matches'], false)) return;
  const { id } = req.params;
  try {
    const matches = await Matches.findById(id);
    


//extrasDelete
    await Matches.deleteOne({ _id: id });
    return res.status(200).json({ message: "Matches Delete" })
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

export default routes;