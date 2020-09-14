const express = require("express");

const { validateBody, validateParams } = require("../services/validation");
const { createUser, getMasters } = require("../controllers/user");
const { masters, register } = require("../schemas/user");

const router = express.Router();

/**
 * /api/user
 */

router.get("/masters", validateParams(masters), getMasters);

/**
 * @swagger
 * /api/user/register/:
 *   post:
 *     tags: [ Users, Register ]
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: The user to create.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/NewUser'
 *     responses:
 *       201:
 *         description: Created.
 *       400:
 *         description: Bad request.
 */
router.post("/register", validateBody(register), createUser);

module.exports = router;
