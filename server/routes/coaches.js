import express from "express";

import { tryCatch } from "../utilities/error-handling.js";

import controller from "../controllers/coaches.js";

const router = express.Router();

router.get("/", tryCatch(controller.getCoaches));
router.post("/", tryCatch(controller.registerCoach));
router.get("/:coachId", tryCatch(controller.getCoachDetails));

export default router;
