// fast start npm init -y && npm install mongoose express dotenv && npm install nodemon -D

import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import kodersRouter from "./routers/koders.router.js";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, SERVER_PORT } = process.env;

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

//crear el server
const server = express();

//Middleweares

server.use(express.json()); //Convierte(Parsea) el request a JSON // Similar a lo que haciamos con JSON.parse()

//Routers
server.use("/koders", kodersRouter);
// server.get("/koders", (request, response) => {
//   response.json({
//     sucess: true,
//     message: "Hola desde mi Api mongoose express",
//   });
// });

mongoose
  .connect(URL)
  .then((connection) => {
    console.log("Database Connected");
    server.listen(SERVER_PORT, () => {
      console.log("Server listening on port:", SERVER_PORT);
    });
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
