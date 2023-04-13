import express from "express";
import fs from "fs";
const server = express(); //crea nuestro servidor
const port = 8080;

//Agregar middleware - convertir lo que llega al body aún json
server.use(express.json());

//En el requesta esta el paquete HTTP de la peticion del clinete
//Aqui te recibe el get /koders
// server.get("/", (request, response) => {
//   //como servidor voy a interpretar la peticion (request)
//   //Regrear por medio de un paquete http en el response
//   response.writeHead(200, { "Content-Type": "application/json" });
//   const message = {
//     message: "Hola desde GET",
//   };

//   const messageString = JSON.stringify(message);

//   response.write(messageString);
//   response.end();
// });

//GET (koders -> Regresar un json con una lista de koders)
//               la data de koders vendra del archivo kodemia.json

server.get("/koders", async (request, response) => {
  //Express - Ya no hace falta el response.end
  const datFile = await fs.promises.readFile("./kodemia.json");

  const json = JSON.parse(datFile);
  const koders = json.koders;

  response.json({
    succes: true,
    data: {
      koders: koders,
    },
  });
});

// server.get("/koders", (request, response) => {
//   response.json({ message: "Aqui estaran los koders" });
// });

server.post("/koders", async (request, response) => {
  /**
   * Leer archivo de koders
   *
   * obtener los koders
   * obtener el nuevo desde request.body
   * agregar el nuevo koder a la lista de koders
   * escribir en el archivo kodemia.json los koders actualizados
   * responder al cliente con el status
   *
   */

  const dataKoders = await fs.promises.readFile("./kodemia.json");
  const json = JSON.parse(dataKoders);
  const koders = json.koders;
  const newKoder = request.body;

  koders.push(newKoder);

  json.koders = koders;

  await fs.promises.writeFile(
    "./kodemia.json",
    JSON.stringify(json, null, 2),
    "utf8"
  );

  response.json({ succes: true, message: "Se creo Koder exitosamente" });
});

server.patch("/koders/:idKoder", async (request, response) => {
  //request.params.id
  //request.params.idkoder
  const id = request.params.idKoder;

  const koderId = parseInt(id);

  const dataKoders = await fs.promises.readFile("./kodemia.json");
  const json = JSON.parse(dataKoders);
  const koders = json.koders;

  const koderSearch = koders.find((koder) => koderId === koder.id);
  const koderIndex = koders.indexOf(koderSearch);

  const koderUpdated = Object.assign(koderSearch, request.body);

  koders[koderIndex] = koderUpdated;

  const dataStringify = JSON.stringify(json, null, 2);

  fs.promises.writeFile("./kodemia.json", dataStringify, "utf8");

  response.json({
    sucess: true,
    message: "Se actualizo el koder correctamente",
  });
});

server.delete("/koders/:idKoder", async (request, response) => {
  const id = request.params.idKoder;
  const koderId = parseInt(id);

  const dataKoders = await fs.promises.readFile("./kodemia.json");
  const json = JSON.parse(dataKoders);
  const koders = json.koders;

  json.koders = koders.filter((koder) => koderId !== koder.id);

  const dataStringify = JSON.stringify(json, null, 2);

  fs.promises.writeFile("./kodemia.json", dataStringify);

  response.json({
    succes: true,
    message: "Se eliminado el koder correctamente",
  });
});

server.post("/", (request, response) => {
  response.write("POST /");
  response.end();
});

server.patch("/", (request, response) => {
  response.write("PATCH /");
  response.end();
});

server.delete("/", (request, response) => {
  response.write("DELETE /");
  response.end();
});

server.listen(port, () => {
  console.log(`Servidor inicializado en el puerto ${port}`);
});

/**
 * endpoint ->
 *
 * conjunto de un metodo y una ruta (path)
 *
 * cada endpint va a implementar su propia logica, y cada uno es independiente del otro
 */
