import mongoose from "mongoose";
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  birthDate: Date,
  gender: String,
  state: String,
  city: String,
  role: String,
  salary: Number,
});

export default employeeSchema;
