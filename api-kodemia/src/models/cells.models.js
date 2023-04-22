import mongoose, { schema } from "mongoose";

//https://mongoosejs.com/docs/populate.html

const cellSchema = new mongoose({
  name: String,
  mentors: [{ type: String }],
});
