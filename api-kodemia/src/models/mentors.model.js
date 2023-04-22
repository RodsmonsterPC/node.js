import mongoose, { Schema } from "mongoose";

const mentorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLenght: 3,
    maxLenght: 100,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minLenght: 2,
    maxLenght: 100,
    trime: true,
  },
  modules: [
    {
      type: String,
    },
  ],
  gender: {
    type: String,
    enum: ["m", "h", "o"],
  },
});

const Mentor = mongoose.model("mentors", mentorsSchema);

export { Mentor };
