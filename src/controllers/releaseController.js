const Release = require("../models/Release");

const getAllReleases = async (req, res) => {
  try {
    const releases = await Release.find().sort({ releaseDate: -1 });

    res.json(releases);
  } catch (error) {
    res.status(500).json({
      message: "Error getting releases",
    });
  }
};


const getReleaseById = async (req, res) => {
  try {
    const release = await Release.findById(req.params.id);

    if (!release) {
      return res.status(404).json({
        message: "Release not found",
      });
    }

    res.json(release);
  } catch (error) {
    res.status(500).json({
      message: "Error getting release",
    });
  }
};


const createRelease = async (req, res) => {
  try {

    const release = await Release.create({
      ...req.body,
      coverImage: req.file
        ? `/uploads/covers/${req.file.filename}`
        : "",
    });

    res.status(201).json(release);

  } catch (error) {
    res.status(500).json({
      message: "Error creating release",
      error: error.message,
    });
  }
};


const updateRelease = async (req, res) => {
  try {

    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.coverImage = `/uploads/covers/${req.file.filename}`;
    }

    const release = await Release.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!release) {
      return res.status(404).json({
        message: "Release not found",
      });
    }

    res.json(release);

  } catch (error) {
    res.status(500).json({
      message: "Error updating release",
      error: error.message,
    });
  }
};


const deleteRelease = async (req, res) => {
  try {
    const release = await Release.findByIdAndDelete(req.params.id);

    if (!release) {
      return res.status(404).json({
        message: "Release not found",
      });
    }

    res.json({
      message: "Release deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting release",
    });
  }
};


module.exports = {
  getAllReleases,
  getReleaseById,
  createRelease,
  updateRelease,
  deleteRelease,
};