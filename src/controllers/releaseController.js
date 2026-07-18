const Release = require("../models/Release");

const getAllReleases = async (req, res) => {
  try {
    const releases = await Release.find().sort({ releaseDate: -1 });

    res.status(200).json({
      success: true,
      data: releases,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error getting releases",
    });
  }
};

const getReleaseById = async (req, res) => {
  try {
    const release = await Release.findById(req.params.id);

    if (!release) {
      return res.status(404).json({
        success: false,
        message: "Release not found",
      });
    }

    res.status(200).json({
      success: true,
      data: release,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error getting release",
    });
  }
};

const createRelease = async (req, res) => {
  try {
    console.log("FILE:", req.file);

    const release = await Release.create({
      ...req.body,
      coverImage: req.file
        ? req.file.path
        : "",
    });

    res.status(201).json({
      success: true,
      data: release,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating release",
      error: error.message,
    });
  }
};

const updateRelease = async (req, res) => {
  try {
    console.log("FILE:", req.file);
    
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.coverImage = req.file.path;
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
        success: false,
        message: "Release not found",
      });
    }

    res.status(200).json({
      success: true,
      data: release,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
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
        success: false,
        message: "Release not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Release deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
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