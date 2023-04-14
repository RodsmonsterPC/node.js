import express from "express";
import kodersRouter from "./routers/koders.router.js";
import mentorsRouter from "./routers/mentors.router.js";
const server = express(); //crea nuestro servidor
const port = 8080;

//Agregar middleware - convertir lo que llega al body aún json
server.use(express.json());

server.use("/koders", kodersRouter);

server.use("/mentors", mentorsRouter);

server.listen(port, () => {
  console.log(`Servidor inicializado en el puerto ${port}`);
});
