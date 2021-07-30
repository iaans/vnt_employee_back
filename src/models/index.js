import mongoose from "mongoose";
import employee from "./employee.js";

export const Employee = mongoose.model("employee", employee); //define the name of collection
