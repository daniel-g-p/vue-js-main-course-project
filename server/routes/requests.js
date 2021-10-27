import express from "express";

import { tryCatch } from "../utilities/error-handling.js";

import controller from "../controllers/requests.js";

const router = express.Router();

router.get("/", tryCatch(controller.getRequests));
router.post("/:coachId", tryCatch(controller.sendRequest));

export default router;
