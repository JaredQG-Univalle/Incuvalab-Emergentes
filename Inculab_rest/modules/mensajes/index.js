//initJSid_sender
import User from "../user/model.js";
//endJSid_sender
import express from 'express';
import { auth_required, getAll, getDocument } from '../../utils/index.js';
import { convertToOr, getQueryDate } from '../../utils/database.js';
import Mensajes from './model.js';
//imports
const routes = express.Router();

async function searchMensajes(searchParams) {
  let query = {};
  if (searchParams?.all) searchParams = {
    all: searchParams?.all,
    //initJSid_sender
id_sender: searchParams?.all,
//endJSid_sender
//initJSid_receiver
id_receiver: searchParams?.all,
//endJSid_receiver
//initJSmessage
message: searchParams?.all,
//endJSmessage
//fieldsSearch
    createdAt: searchParams?.all,
    updatedAt: searchParams?.all,
  }
  //initJSid_sender

            if (searchParams?.id_sender) {
                let list = await User.find({ name: { $regex: searchParams.id_sender, $options: 'i' }}).exec();
                list = list.map(l => l._id);
                if (list.length > 0) query.id_sender = { $in: list };
            }
            
//endJSid_sender
//initJSid_receiver

            if (searchParams?.id_receiver) {
                let list = await User.find({ name: { $regex: searchParams.id_receiver, $options: 'i' }}).exec();
                list = list.map(l => l._id);
                if (list.length > 0) query.id_receiver = { $in: list };
            }
            
//endJSid_receiver
//initJSmessage
if (searchParams?.message) query.message = { $regex: searchParams.message, $options: 'i' };

//endJSmessage
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
  if (!auth_required(req, res, ['read_mensajes'], false)) return;
  if (req?.body?.query?.search) req.body.query.find = {
    ...req.body.query.find,
    ...await searchMensajes(req?.body?.query?.search)
  }
  const query = await getAll(Mensajes, req, res);
  if (query) return res.status(200).json(query);
});

routes.post('/read', async function (req, res) {
  if (!auth_required(req, res, ['read_mensajes'], false)) return;
  const query = await getDocument(Mensajes, req, res);
  if (query) delete query._doc.password;
  if (query) return res.status(200).json(query);
});

//POST
routes.post('/create', async function (req, res) {
  if (!auth_required(req, res, ['create_mensajes'], false)) return;
  try {
    var { mensajes } = req.body;
    //validadores
    mensajes.last_user = req.currentUser.id;
    //extrasCreate
    var query = await new Mensajes(mensajes).save();
    return res.status(200).json(query);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

//PUT
routes.put('/update/:id', async function (req, res) {
  if (!auth_required(req, res, ['update_mensajes'], false)) return;
  const { id } = req.params;
  try {
    var { mensajes } = req.body;
    mensajes.last_user = req.currentUser.id;
    //extrasUpdate
    const document = await Mensajes.findByIdAndUpdate(id, {
      $set: mensajes
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
  if (!auth_required(req, res, ['delete_mensajes'], false)) return;
  const { id } = req.params;
  try {
    const mensajes = await Mensajes.findById(id);
    


//extrasDelete
    await Mensajes.deleteOne({ _id: id });
    return res.status(200).json({ message: "Mensajes Delete" })
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Datos Inválidos", error });
  }
});

export default routes;