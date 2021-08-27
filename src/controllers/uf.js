import { Uf } from "../models/index.js";

export function listAllUf() {
  return Uf.find({})
    .sort({ uf: 1 })
    .orFail(() => {
      throw new Error("No UFs were found");
    });
}
