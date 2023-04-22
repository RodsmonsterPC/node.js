import mongoose, { Schema } from "mongoose";

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
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  // generation: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "generation",
  //   },
  // ],
  // comments: [
  //   {
  //     message: { type: String },
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: "writers",
  //     },
  //   },
  // ],
});

const Koder = mongoose.model("koders", koderSchema);

export { Koder };
