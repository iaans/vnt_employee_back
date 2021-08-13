import test from "ava";
import { connect, disconnect } from "../../db/connection.js";
import { listAllCitiesByUf } from "../../controllers/city.js";

test.before(async () => {
  await connect();
});

test.after(async () => {
  await disconnect();
});

test.serial("Listing all cities test", async (t) => {
  const response = await listAllCitiesByUf("SP");
  t.assert(response, "The cities should have been listed");
});
