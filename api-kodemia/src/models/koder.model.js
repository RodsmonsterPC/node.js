import mongoose from "mongoose";

const koderSchema = new mongoose.Schema({
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
    trim: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
  },
  gender: {
    type: String,
    enum: ["m", "h", "o"], //El enum en el schema nos permite definir que valores son validos
    required: true,
  },
  idGrauated: {
    type: Boolean,
    default: false,
  },

  email: {
    type: String, //Regex
    required: true,
    match: /.*@.*\..*/,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Koder = mongoose.model("koders", koderSchema);

export { Koder };
