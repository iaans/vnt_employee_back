import express from "express";
import { listAllCitiesByUf } from "./controllers/city.js";
import {
  createEmployee,
  deleteEmployee,
  listAllEmployees,
  updateEmployee,
} from "./controllers/employee.js";
import { listAllUf } from "./controllers/uf.js";

const app = express.Router();
import { body, param, validationResult } from "express-validator";

app.get("/", (req, res) => {
  res.send("OK"); // Send the response for this route
});

// route to list all the employees

app.get("/list-employees", async (req, res) => {
  // const employees = await listAllEmployees();
  res.send(await listAllEmployees());
});

app.get("/list-ufs", async (req, res) => {
  res.send(await listAllUf());
});

// do
app.get(
  "/get-cities-by-state/:uf",
  param("uf").isString().trim().notEmpty().withMessage("State cannot be empty"),
  async (req, res) => {
    //validando
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(await listAllCitiesByUf(req.params.uf));
  }
);

// app.get()

app.post(
  "/submit-employee",
  //montando a regra para validação
  body("name").isString().trim().notEmpty().withMessage("Name cannot be empty"),
  body("birthDate")
    .isISO8601()
    .toDate()
    .notEmpty()
    .withMessage("Birthdate cannot be empty"),
  body("gender")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Gender cannot be empty"),
  body("state")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("State cannot be empty"),
  body("city").isString().trim().notEmpty().withMessage("City cannot be empty"),
  body("role").isString().trim().notEmpty().withMessage("Role cannot be empty"),
  body("salary")
    .isNumeric()
    .isLength({ min: 0, max: 100000 })
    .notEmpty()
    .withMessage("Salary cannot be empty"),
  async (req, res) => {
    const { name, birthDate, gender, state, city, role, salary } = req.body;
    console.log(req.body);

    //validando
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await createEmployee({
      name,
      birthDate,
      gender,
      state,
      city,
      role,
      salary,
    });
    res.send("OK");
  }
);

app.delete(
  "/delete-employee/:id",
  param("id").isString().trim().notEmpty().withMessage("Id cannot be empty"),
  async (req, res) => {
    console.log(req.params);
    //validando
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send(await deleteEmployee(req.params.id));
  }
);

app.put(
  "/put-employee",
  body("name").isString().trim().notEmpty().withMessage("Name cannot be empty"),
  body("gender")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Gender cannot be empty"),
  body("state")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("State cannot be empty"),
  body("city").isString().trim().notEmpty().withMessage("City cannot be empty"),
  body("role").isString().trim().notEmpty().withMessage("role cannot be empty"),
  body("salary")
    .isNumeric()
    .trim()
    .notEmpty()
    .withMessage("Salary cannot be empty"),
  async (req, res) => {
    console.log(req.body);

    //validando
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send(await updateEmployee(req.body));
  }
);
export default app;
