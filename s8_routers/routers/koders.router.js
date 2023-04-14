import express from "express";
import fs from "fs";
// Router -> subconjunto del servidor lo agrupamos semanticamente (comparten uno a varios rasgos en comun)

const router = express.Router(); // Crea el Router

router.get("/", async (request, response) => {
  //Express - Ya no hace falta el response.end
  const dataFile = await fs.promises.readFile("./kodemia.json", "utf8");

  const json = JSON.parse(dataFile);
  const koders = json.koders;

  const { generation, location, age } = request.query;

  let filteredKoders = koders;

  if (generation) {
    filteredKoders = filteredKoders.filter(
      (koder) => koder.generation === generation
    );
  }

  if (location) {
    filteredKoders = filteredKoders.filter(
      (koder) => koder.location === location
    );
  }
  if (age) {
    filteredKoders = filteredKoders.filter((koder) => koder.age === age);
  }

  response.json({
    succes: true,
    data: {
      koders: koders,
    },
  });
});

router.post("/", async (request, response) => {
  const dataKoders = await fs.promises.readFile("../kodemia.json");
  const json = JSON.parse(dataKoders);
  const koders = json.koders;
  const newKoder = request.body;

  koders.push(newKoder);

  json.koders = koders;

  await fs.promises.writeFile(
    "../kodemia.json",
    JSON.stringify(json, null, 2),
    "utf8"
  );

  response.json({ succes: true, message: "Se creo Koder exitosamente" });
});

router.patch("/:idKoder", async (request, response) => {
  //request.params.id
  //request.params.idkoder
  const id = request.params.idKoder;

  const koderId = parseInt(id);

  const dataKoders = await fs.promises.readFile("../kodemia.json");
  const json = JSON.parse(dataKoders);
  const koders = json.koders;

  const koderSearch = koders.find((koder) => koderId === koder.id);
  const koderIndex = koders.indexOf(koderSearch);

  const koderUpdated = Object.assign(koderSearch, request.body);

  koders[koderIndex] = koderUpdated;

  const dataStringify = JSON.stringify(json, null, 2);

  fs.promises.writeFile("../kodemia.json", dataStringify, "utf8");

  response.json({
    sucess: true,
    message: "Se actualizo el koder correctamente",
  });
});

router.delete("/:idKoder", async (request, response) => {
  const id = request.params.idKoder;
  const koderId = parseInt(id);

  const dataKoders = await fs.promises.readFile("../kodemia.json");
  const json = JSON.parse(dataKoders);
  const koders = json.koders;

  json.koders = koders.filter((koder) => koderId !== koder.id);

  const dataStringify = JSON.stringify(json, null, 2);

  fs.promises.writeFile("../kodemia.json", dataStringify, "utf8");

  response.json({
    succes: true,
    message: "Se eliminado el koder correctamente",
  });
});
export default router;
