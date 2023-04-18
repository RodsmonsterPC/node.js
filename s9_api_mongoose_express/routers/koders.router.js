import express from "express";
import { Koder } from "../models/koders.module.js";

const router = express.Router();

router.get("/", async (reject, response) => {
  const allKoders = await Koder.find({});

  response.json({
    sucess: true,
    data: {
      koders: allKoders,
    },
  });
});
router.post("/", (response, reject) => {});

export default router;
