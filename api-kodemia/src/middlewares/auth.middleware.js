import { get } from "mongoose";
import jwt from "../libs/jwt.js";
import { getKoderById } from "../useCases/koder.usecase.js";

const isAuth = async (request, response, next) => {
  try {
    /**
     * Estructura:
     *
     * Authorization: "Bearer a123fg4352.."
     */

    //Obtener token

    const authorization = request.headers.authorization || "";

    const token = authorization.replace("Bearer ", ""); //token sin Bearer

    //verificar el token

    const isValidToken = jwt.verify(token);

    //Si todo sale bien, llamar a next

    if (!isValidToken) throw new Error("Unauthorizaed");

    next();
  } catch (error) {
    response.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

const isAdmin = async (request, response, next) => {
  try {
    const authorization = request.headers.authorization || "";

    const token = authorization.replace("Bearer ", "");

    const tokenPayload = jwt.verify(token);

    if (!tokenPayload) throw new Error("Invalid authorization");

    const koderId = tokenPayload.id;

    const koderFound = await getKoderById(koderId);

    if (koderFound) throw Error("Invalid authorization");

    const { role = "user" } = koderFound;

    if (role === "admin") {
      next();
    } else {
      response.json({
        success: false,
        message: "Unauthorized",
      });
    }
  } catch (error) {
    response.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export { isAuth, isAdmin };
