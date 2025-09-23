import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

// localhost:PORT/api/users is showing correct response
router.get("/", (req, res) => {
  req.auth().userId;
  res.send("User route with GET Method");
});

// a user shouldnt be able to like some media without being authenticated
// so the route needs to be protected
// router.get("/like", protectRoute, (req, res) => {
/* Clerk - DEPRECATION WARNING: "req.auth" is deprecated and will be removed in the next major release. Use `req.auth()` as a function instead. */
//   req.auth.userId;
//   res.send("user route for media likes get method");
// });

export default router;
