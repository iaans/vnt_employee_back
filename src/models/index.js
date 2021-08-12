import mongoose from "mongoose";
import employee from "./employee.js";
import city from "./city";
import uf from "./uf";

export const Employee = mongoose.model("employee", employee); //define the name of collection
export const City = mongoose.model("city", city);
export const Uf = mongoose.model("uf", uf);
