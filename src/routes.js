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
  param("uf", "State cannot be empty").isString().trim().notEmpty(),
  async (req, res) => {
    //validando
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }
    res.send(await listAllCitiesByUf(req.params.uf));
  }
);

// app.get()

app.post(
  "/submit-employee",
  //montando a regra para validação
  body("name", "Name cannot be empty").isString().trim().notEmpty(),
  body("birthDate", "Birthdate cannot be empty")
    .isISO8601()
    .toDate()
    .notEmpty(),
  body("gender", "Gender cannot be empty").isString().trim().notEmpty(),
  body("state", "State cannot be empty").isString().trim().notEmpty(),
  body("city", "City cannot be empty")
    .isString()
    .trim()
    .notEmpty()
    .withMessage(""),
  body("role", "Role cannot be empty").isString().trim().notEmpty(),
  body("salary", "Salary cannot be empty")
    .isNumeric()
    .withMessage("Salary must be a numeric value")
    .isLength({ min: 0, max: 100000 })
    .notEmpty(),
  async (req, res) => {
    const { name, birthDate, gender, state, city, role, salary } = req.body;
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array({ onlyFirstError: true }),
      });
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
  param("id", "Id cannot be empty").isString().trim().notEmpty(),
  async (req, res) => {
    console.log(req.params);
    //validando
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }

    res.send(await deleteEmployee(req.params.id));
  }
);

app.put(
  "/put-employee",
  body("name", "Name cannot be empty").isString().trim().notEmpty(),
  body("gender", "Gender cannot be empty").isString().trim().notEmpty(),
  body("state", "State cannot be empty").isString().trim().notEmpty(),
  body("city", "City cannot be empty").isString().trim().notEmpty(),
  body("role", "role cannot be empty").isString().trim().notEmpty(),
  body("salary", "Salary cannot be empty").isNumeric().trim().notEmpty(),
  async (req, res) => {
    console.log(req.body);

    //validando
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }

    res.send(await updateEmployee(req.body));
  }
);
export default app;
