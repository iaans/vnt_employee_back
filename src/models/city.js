import mongoose from "mongoose";
const { Schema } = mongoose;

const citySchema = new Schema({
  uf: String,
  ufName: String,
  cities: [{ type: String, required: true }],
});

export default citySchema;
