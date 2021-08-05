import dotenv from "dotenv";
import express from "express"; // new method using
import routes from "./routes.js";
import { connect } from "./db/connection.js";

dotenv.config();

//const express = require("express"); //Importing express library
const app = express(); //Create a express app
const port = process.env.PORT || 3000; //Define default port for the server to listen || Most used routes: 3000(front), 3333(back), 4000(api)

//const port = 3000; //Define default port for the server to listen || Most used routes: 3000(front), 3333(back), 4000(api)

// app.use(cors());
app.use(express.json());

app.use(routes);

await connect();

// Set everthing running
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
