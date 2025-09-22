import { Router } from "express";
import { authCall } from "../controller/auth.controller.js";

const router = Router();

router.post("/callback", authCall);

export default router;
