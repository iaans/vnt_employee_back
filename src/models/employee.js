import mongoose from "mongoose";
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  gender: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  role: { type: String, required: true },
  salary: { type: Number, required: true },
});

export default employeeSchema;
