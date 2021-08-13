import test from "ava";
import { connect, disconnect } from "../../db/connection.js";
import { listAllUf } from "../../controllers/uf.js";

//conection db
test.before(async () => {
  await connect();
});

test.after(async () => {
  await disconnect();
});

test.serial("Listing all uf's test", async (t) => {
  const response = await listAllUf();

  t.assert(response, "The ufs should have been listed");
});
