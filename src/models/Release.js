const mongoose = require("mongoose");

const releaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    artist: {
      type: String,
      required: true,
      trim: true,
    },

    coverImage: {
      type: String,
      required: true,
    },

    artistImage: {
      type: String,
      default: "",
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    label: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    spotify: {
      type: String,
      default: "",
    },

    appleMusic: {
      type: String,
      default: "",
    },

    soundcloud: {
      type: String,
      default: "",
    },

    youtube: {
      type: String,
      default: "",
    },

    beatport: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Release", releaseSchema);