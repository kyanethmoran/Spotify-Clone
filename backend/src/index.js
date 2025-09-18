import express from "express";
import dotenv from "dotenv";

// need to be able to read port value
dotenv.config();

const app = express();
// get port from env
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
