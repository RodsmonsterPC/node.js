import express from "express";
import {
  getKoders,
  createKoder,
  updateKoderById,
  getKoderById,
  deleteKoderById,
} from "../useCases/koder.usecase.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const { age, generation, gender, name, lastName, isGraduated } =
      request.query;

    let filters = {};

    if (age) filters = { ...filters, age };

    if (generation) filters = { ...filters, generation };

    if (gender) filters = { ...filters, gender };

    if (name) filters = { ...filters, name };

    if (lastName) filters = { ...filters, lastName };

    if (isGraduated) filters = { ...filters, isGraduated };

    const kodersFound = await getKoders(filters);

    response.json({
      success: true,
      data: {
        koders: kodersFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get All koders",
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params.id;

    const koderFound = await getKoderById(id);

    response.json({
      success: true,
      data: {
        koder: koderFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get ById koders",
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const newKoder = request.body;

    const koderCreate = await createKoder(newKoder);
    response.json({
      success: true,
      data: {
        koders: koderCreate,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: "Error at post koders",
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const updateInfo = request.body;

    const updateData = await updateKoderById(id, updateInfo);

    response.json({
      success: true,
      data: {
        koderUpdated: updateData,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: "Error at patch koders",
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const deleteKoder = await deleteKoderById(id);

    response.json({
      success: true,
      data: {
        deleted: deleteKoder,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: "Error at patch koders",
    });
  }
});

export default router;
