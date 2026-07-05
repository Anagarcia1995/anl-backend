const express = require("express");

const {
  getAllReleases,
  getReleaseById,
  createRelease,
  updateRelease,
  deleteRelease,
} = require("../controllers/releaseController");

const { verifyToken } = require("../middleware/authMiddleware");
const uploadRelease = require("../middleware/uploadRelease");

const router = express.Router();

router.get("/", getAllReleases);
router.get("/:id", getReleaseById);

router.post("/", verifyToken, uploadRelease.single("coverImage"), createRelease);
router.put("/:id",verifyToken,uploadRelease.single("coverImage"),updateRelease);
router.delete("/:id", verifyToken, deleteRelease);

module.exports = router;