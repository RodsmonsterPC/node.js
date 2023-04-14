import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", async (request, response) => {
  const dataFile = await fs.promises.readFile("./kodemia.json", "utf8");

  const json = JSON.parse(dataFile);

  const mentors = json.mentors;

  const { age, generations } = request.query;

  let filteredMentors = mentors;

  if (age) {
    filteredMentors = filteredMentors.filter(
      (mentor) => mentor.age === parseInt(age)
    );
  }
  if (generations) {
    filteredMentors = mentors.filter((mentor) =>
      mentor.generations.includes(generations)
    );
  }

  response.json({
    success: true,
    data: {
      koders: filteredMentors,
    },
  });
});

router.post("/", async (request, response) => {
  const dataJson = await fs.promises.readFile("./kodemia.json", "utf8");
  const json = JSON.parse(dataJson);
  const newMentor = request.body;

  const mentors = json.mentors;

  mentors.push(newMentor);

  json.mentors = mentors;

  await fs.promises.writeFile(
    "./kodemia.json",
    JSON.stringify(json, null, 2),
    "utf8"
  );

  response.json({
    success: true,
    message: "Mentor creado exitosamente",
  });
});

router.patch("/:idMentor", async (request, response) => {
  const dataJson = await fs.promises.readFile("./kodemia.json", "utf8");
  const json = JSON.parse(dataJson);
  const id = request.params.idMentor;

  const mentorId = parseInt(id);
  const mentors = json.mentors;
  const newInfo = request.body;

  const mentorToUpdated = mentors.find((mentor) => mentorId === mentor.id);
  const mentorIndex = mentors.indexOf(mentorToUpdated);

  const mentorUpdated = Object.assign(mentorToUpdated, newInfo);

  mentors[mentorIndex] = mentorUpdated;

  const dataStringify = JSON.stringify(json, null, 2);

  await fs.promises.writeFile("./kodemia.json", dataStringify, "utf8");

  response.json({
    success: true,
    message: "Mentor actualizado corractamente",
  });
});

router.delete("/:idMentor", async (request, response) => {
  const dataJson = await fs.promises.readFile("./kodemia.json", "utf8");
  const json = JSON.parse(dataJson);
  const mentors = json.mentors;

  const id = request.params.idMentor;
  const mentorId = parseInt(id);

  json.mentors = mentors.filter((mentor) => mentor.id !== mentorId);

  const dataStringify = JSON.stringify(json, null, 2);

  await fs.promises.writeFile("./kodemia.json", dataStringify, "utf8");

  response.json({
    success: true,
    message: "Mentor eliminado correctamente",
  });
});

export default router;
