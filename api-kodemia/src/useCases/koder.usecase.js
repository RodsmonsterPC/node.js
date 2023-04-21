import { Koder } from "../models/koder.model.js";
import bcrypt from "../libs/bcrypt.js";

// Use cases = Handlers

const createKoder = async (koderData) => {
  const { email, password } = koderData;
  const koderFound = await Koder.findOne({ email });

  if (koderFound) throw new Error("User already exists");

  //Encriptar el password

  const encryptePassword = await bcrypt.hash(password);

  // Retornamos una promesa de tipo createKoder
  return Koder.create({ ...koderData, password: encryptePassword });
};

const getKoders = (filters) => {
  return Koder.find(filters);
};

const getKoderById = (id) => {
  return Koder.findById(id);
};

const updateKoderById = (id, koderData, options = {}) => {
  return Koder.findByIdAndUpdate(id, koderData, { new: true, ...options });
};

const deleteKoderById = (id) => {
  return Koder.findByIdAndDelete(id);
};

export {
  createKoder,
  getKoders,
  getKoderById,
  updateKoderById,
  deleteKoderById,
};
