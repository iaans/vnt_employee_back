import { Employee } from "../models/index.js";

export function createEmployee({
  name,
  birthDate,
  gender,
  state,
  city,
  role,
  salary,
}) {
  return Employee.create({
    name,
    birthDate,
    gender,
    state,
    city,
    role,
    salary,
  }).catch(() => {
    throw new Error("Failed to create the Employee");
  });
}

export function updateEmployee(employee) {
  let updateObj = {};

  Object.keys(employee).forEach((prop) => {
    console.log(`campo ${prop} tem como valor ${employee[prop]}`);

    // employee[prop] para verificar se tem algum valor

    if (employee[prop] && prop !== "_id") {
      updateObj[prop] = employee[prop];
    }
  });

  console.log("Update Object => ", updateObj);

  // employee.name
  // employee['name']

  return Employee.findByIdAndUpdate(employee._id, updateObj).orFail(() => {
    throw new Error("Failed to update the Employee");
  });
}

export function deleteEmployee(id) {
  return Employee.findByIdAndDelete(id).orFail(() => {
    throw new Error("Failed to delete the Employee");
  });
}

//clean code
// when returning an async call, you don't need the async/await declarations
export function listAllEmployees() {
  return Employee.find({});
}

// export async function listAllEmployees() {
//   const employees = await Employee.find({});

//   return employees;
// }
