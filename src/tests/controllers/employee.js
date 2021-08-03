import test from "ava";
import e from "express";
import {
  createEmployee,
  deleteEmployee,
  listAllEmployees,
  updateEmployee,
} from "../../controllers/employee.js";
import { connect, disconnect } from "../../db/connection.js";

test.before(async () => {
  await connect();
});

test.after(async () => {
  await disconnect();
});

let employeeMock = {
  name: "Ricardo",
  birthDate: "01-02-1975",
  gender: "M",
  state: "SP",
  city: "Campinas",
  role: "Jr Manager",
  salary: 7000,
};

let createdEmployee;

// create employee test
test.serial("Create employee test", async (t) => {
  createdEmployee = await createEmployee(employeeMock); // <-
  t.assert(createdEmployee, "The employee should have been created");
});

// list employee test
test.serial("Listing employee test", async (t) => {
  const response = await listAllEmployees();
  t.assert(response, "The employees should have been listed");
});

// update employee test
test.serial("Updating employee test", async (t) => {
  let employeeToUpdate = {};

  employeeToUpdate._id = String(createdEmployee._id);
  employeeToUpdate.name = "Maria";
  employeeToUpdate.city = "Antonina";
  employeeToUpdate.state = "PR";

  const response = await updateEmployee(employeeToUpdate);
  t.assert(response, "The employees should have been updated");
}); //-<

test.serial("Deleting employee teste", async (t) => {
  let employeeToDelete = {};
  const response = await deleteEmployee(String(createdEmployee._id));
  t.assert(response, "The employee should have been deleted");
});
