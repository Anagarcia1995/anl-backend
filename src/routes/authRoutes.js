const express = require("express");
const rateLimit = require("express-rate-limit");

const { login, me } = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many login attempts. Please try again later."
  }
});

router.post("/login", loginLimiter, login);
router.get("/me", verifyToken, me);

module.exports = router;