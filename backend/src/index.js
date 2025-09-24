import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

// clerk: attaches auth object if cookiers/headers has JWT
import { clerkMiddleware } from "@clerk/express";
// express file upload
import fileUpload from "express-fileupload";
import path from "path";

// import routes
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import mediaRoutes from "./routes/media.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";

// need to be able to read port value
dotenv.config();

const __dirname = path.resolve;
const app = express();
// get port from env
const PORT = process.env.PORT;

// to parse req.body
app.use(express.json());

// add auth, allows for req obj => req.auth().userId (check doc for all options/ session properties) (req.auth is depreciated use req.auth().)
app.use(clerkMiddleware());

// for express fileupload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: Path2D.join(__dirname, "temp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, //10MB max file size
    },
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
