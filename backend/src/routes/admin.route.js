import { Router } from "express";
import { getAdmin } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

// test that getAdmin from controller is working
// router.get("/", getAdmin);

// uses protected route and requires admin status, only admin can access
router.post("/media", protectRoute, requireAdmin, createMedia);

export default router;
