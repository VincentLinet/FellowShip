const express = require("express");

const { validateBody, validateParams } = require("../services/validation");
const { createUser, getMasters } = require("../controllers/user");
const { masters, register } = require("../schemas/user");

const router = express.Router();

/**
 * /api/user
 */

router.get("/masters", validateParams(masters), getMasters);
router.post("/register", validateBody(register), createUser);

module.exports = router;
