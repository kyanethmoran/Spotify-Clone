import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";

// need to be able to read port value
dotenv.config();

const app = express();
// get port from env
const PORT = process.env.PORT;

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
