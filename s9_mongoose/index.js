import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// const DB_USER = "secreto";
// const DB_PASSWORD = "secreto";
// const DB_HOST = "secreto";
// const DB_NAME = "secreto";

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// console.log("Proces DB_USER: ", process.env.DB_USER);
// console.log("Proces DB_PASSWORD: ", process.env.DB_PASSWORD);
// console.log("Proces DB_HOST: ", process.env.DB_HOST);
// console.log("Proces DB_NAME: ", process.env.DB_NAME);

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
    required: true,
  },
  gender: {
    type: String,
    enum: ["m", "h"], //El enum en el schema nos permite definir que valores son validos
    required: true,
  },
  idGrauated: {
    type: Boolean,
    default: false,
  },
});

//Al crear un modelo de mongoose - por conveción la primera letra es mayuscula
//El modelo hace referencia a la colección
const Koder = mongoose.model("koders", koderSchema);

// https://mongoosejs.com/docs/api/model.html#Model.find()

mongoose
  .connect(URL)
  .then(async (connection) => {
    console.log("Database Conected");
    // const allKoders = await Koder.find({});
    // console.log(allKoders);
    // const newKoder = {
    //   name: "Rodolfo",
    //   lastName: "Perez",
    //   age: "23",
    //   gender: "h",
    // };

    // const koderCreated = await Koder.create(newKoder);
    // console.log(koderCreated);

    //.findByandUpdate
    // const newData = {
    //   name: "Rodolfo",

    //   age: "24",
    // };
    // const koderUpdated = await Koder.findByIdAndUpdate(
    //   "643dffe798d255cc4831fb88",
    //   newData,
    //   { new: true }
    // );
    // console.log(koderUpdated);

    // const koderDeleted = await Koder.findByIdAndDelete(
    //   "643dff68c2ce234a24ad968e"
    // );
    // console.log(koderDeleted);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
