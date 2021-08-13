import { City } from "../models/index.js";

export function listAllCitiesByUf(uf) {
  return City.find({ uf }).orFail(() => {
    throw new Error("No cities were found");
  });
}
