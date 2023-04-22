import express from "express";
import {
  getMentors,
  getMentorById,
  updateMentorById,
  deleteMentor,
  createMentor,
} from "../useCases/mentor.usecase.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const mentorFound = await getMentors();

    response.json({
      success: true,
      data: {
        mentorFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get All mentors",
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params.id;

    const mentorFound = await getMentorById(id);

    response.json({
      success: true,
      data: {
        koder: mentorFound,
      },
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "Error at get By Id mentor",
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const newMentor = request.body;

    const mentorCreate = await createMentor(newMentor);
    response.json({
      success: true,
      data: {
        koders: mentorCreate,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: "Error at post mentors",
    });
  }
});

router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const updateInfo = request.body;

    const updateData = await updateMentorById(id, updateInfo);

    response.json({
      success: true,
      data: {
        koderUpdated: updateData,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: "Error at patch mentors",
    });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    const deleteMentor = await deleteMentor(id);

    response.json({
      success: true,
      data: {
        deleted: deleteMentor,
      },
    });
  } catch (error) {
    response.status(404).json({
      success: false,
      message: "Error at delete Mentors",
    });
  }
});

export default router;
