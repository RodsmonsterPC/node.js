import { Koder } from "../models/koder.model.js";
import jwt from "../libs/jwt.js";
import bcrypt from "../libs/bcrypt.js";

const login = async (email, password) => {
  const koderFound = await Koder.findOne({ email });

  if (!koderFound) throw new Error("Invalid credentials");

  const isValidPassword = await bcrypt.compare(password, koderFound.password);

  if (!isValidPassword) throw new Error("Invalid credentials");

  return jwt.sign({ id: koderFound._id });
};

export { login };
