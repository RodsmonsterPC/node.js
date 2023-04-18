import express, { request } from "express";
import { Koder } from "../models/koders.module.js";

const router = express.Router();

router.get("/", async (request, response) => {
  const allKoders = await Koder.find({});

  response.json({
    sucess: true,
    data: {
      koders: allKoders,
    },
  });
});
router.post("/", async (request, response) => {
  let newKoder = request.body;

  const koderCreated = await Koder.create(newKoder);
  response.json({
    sucess: true,
    data: {
      message: "Se ah creado el Koder",
    },
  });
  console.log(koderCreated);
});

router.patch("/:idKoder", async (request, response) => {
  let infoToUpdated = request.body;

  const koderId = request.params.idKoder;

  const updated = await Koder.findByIdAndUpdate(koderId, infoToUpdated, {
    new: true,
  });

  response.json({
    sucess: true,
    data: {
      message: "Se ah actualizado el Koder",
    },
  });
  console.log(updated);
});

router.delete("/:idKoder", async (request, response) => {
  const koderId = request.params.idKoder;

  const deleteKoder = await Koder.findByIdAndDelete(koderId);

  response.json({
    sucess: true,
    data: {
      message: "Se ah eliminado el Koder",
    },
  });
  console.log(deleteKoder);
});

export default router;
