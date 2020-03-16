import express from "express";

import { validateParams } from "../services/validation";
import { getMasters } from "../controllers/user";
import { masters } from "../schemas/user";

const router = express.Router();

router.get("/masters", validateParams(masters), getMasters);

export default router;
