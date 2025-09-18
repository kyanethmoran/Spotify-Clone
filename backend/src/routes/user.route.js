import { Router } from "express";

const router = Router();

// localhost:PORT/api/users is showing correct response
router.get("/", (req, res) => {
  res.send("User route with GET Method");
});

export default router;
