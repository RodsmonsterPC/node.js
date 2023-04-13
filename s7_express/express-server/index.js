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

  console.log(newKoder);

  koders.push(newKoder);

  json.koders = koders;

  await fs.promises.writeFile(
    "./kodemia.json",
    JSON.stringify(json, null, 2),
    "utf8"
  );

  response.json({ succes: true, message: "Se creo Koder exitosamente" });
});

server.patch("/koders/:idKoder", (request, response) => {
  //request.params.id
  //request.params.idkoder
  const id = request.params.idKoder;

  console.log("El koder ID es:", id);
  response.json({ message: "Aqui se actualizaran koders" });
});

server.delete("/koders", (request, response) => {
  response.json({ message: "Aqui se borran koders" });
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
