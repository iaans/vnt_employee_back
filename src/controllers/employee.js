import { Employee } from "../models/index.js";

export async function createEmployee({
  name,
  birthDate,
  gender,
  state,
  city,
  role,
  salary,
}) {
  await Employee.create({ name, birthDate, gender, state, city, role, salary });
}
