const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      trim: true
    },

    venueName: {
      type: String,
      trim: true
    },

    ticketUrl: {
      type: String,
      trim: true
    },

    city: {
      type: String,
      required: true,
      trim: true
    },

    countryCode: {
      type: String,
      required: true,
      trim: true
    },

    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

eventSchema.path('eventName').validate(function() {
  return this.eventName || this.venueName;
}, 'Event name or venue name is required');

module.exports = mongoose.model('Event', eventSchema);