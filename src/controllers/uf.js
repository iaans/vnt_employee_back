import { Uf } from "../models/index.js";

export function listAllUf() {
  return Uf.find({}).orFail(() => {
    throw new Error("No UFs were found");
  });
}
