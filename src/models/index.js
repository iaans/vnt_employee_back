import mongoose from "mongoose";
import employee from "./employee.js";
import city from "./city.js";
import uf from "./uf.js";

export const Employee = mongoose.model("employees", employee); //define the name of collection
export const City = mongoose.model("cities", city);
export const Uf = mongoose.model("ufs", uf);
