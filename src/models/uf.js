import mongoose from "mongoose";
const { Schema } = mongoose;

const ufSchema = new Schema({
  name: String,
  uf: String,
});

export default ufSchema;
