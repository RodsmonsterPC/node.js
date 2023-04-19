import express, { request } from "express";
import { Koder } from "../models/koders.module.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const allKoders = await Koder.find({});

    response.status(200).json({
      sucess: true,
      data: {
        koders: allKoders,
      },
    });
  } catch (error) {
    response.status(error.status || 400).json({
      sucess: false,
      message: error.message,
    });
  }
});
router.post("/", async (request, response) => {
  let newKoder = request.body;

  try {
    const koderCreated = await Koder.create(newKoder);
    response.status(201).json({
      sucess: true,
      data: {
        koderCreated: koderCreated,
      },
    });
    console.log(koderCreated);
  } catch (error) {
    response.status(error.status || 400).json({
      succes: false,
      message: error.message,
    });
  }
});

router.patch("/:idKoder", async (request, response) => {
  try {
    let infoToUpdated = request.body;

    const koderId = request.params.idKoder;
    const updated = await Koder.findByIdAndUpdate(koderId, infoToUpdated, {
      new: true,
    });
    response.json({
      sucess: true,
      data: {
        koderUpdated: updated,
      },
    });
    console.log(updated);
  } catch (error) {
    response.status(error.status || 400).json({
      succes: false,
      message: error.message,
    });
  }
});

router.delete("/:idKoder", async (request, response) => {
  try {
    const koderId = request.params.idKoder;
    const deleteKoder = await Koder.findByIdAndDelete(koderId);

    response.json({
      sucess: true,
      data: {
        koderdeleted: deleteKoder,
      },
    });
    console.log(deleteKoder);
  } catch (error) {
    response.status(error.status || 400).json({
      succes: false,
      message: error.message,
    });
  }
});

export default router;
