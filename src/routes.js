import express from "express";
import { createEmployee } from "./controllers/employee.js";

const app = express.Router();

app.get("/", (req, res) => {
  res.send("OK"); // Send the response for this route
});

app.post("/submit-employee", async (req, res) => {
  const { name, birthDate, gender, state, city, role, salary } = req.body;

  console.log(name, birthDate, gender, state, city, role, salary);

  await createEmployee({ name, birthDate, gender, state, city, role, salary });
  res.send("OK");
});

export default app;
