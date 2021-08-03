import express from "express";
import {
  createEmployee,
  deleteEmployee,
  listAllEmployees,
  updateEmployee,
} from "./controllers/employee.js";

const app = express.Router();

app.get("/", (req, res) => {
  res.send("OK"); // Send the response for this route
});

// route to list all the employees

app.get("/list-employees", async (req, res) => {
  // const employees = await listAllEmployees();
  res.send(await listAllEmployees());
});

// app.get()

app.post("/submit-employee", async (req, res) => {
  const { name, birthDate, gender, state, city, role, salary } = req.body;

  console.log(name, birthDate, gender, state, city, role, salary);

  await createEmployee({ name, birthDate, gender, state, city, role, salary });
  res.send("OK");
});

app.delete("/delete-employee/:id", async (req, res) => {
  console.log(req.params);
  res.send(await deleteEmployee(req.params.id));
});

app.put("/put-employee", async (req, res) => {
  console.log(req.body);
  res.send(await updateEmployee(req.body));
});
export default app;
