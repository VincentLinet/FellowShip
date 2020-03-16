import express from "express";

import validate from "../services/validation";
import { getMasters } from "../controllers/user";
import { masters } from "../schemas/user";

const router = express.Router();

router.get("/masters", validate(masters), getMasters);

export default router;
