const Event = require('../models/Event');

const getUpcomingEventsService = async () => {
  return await Event.find().sort({ date: 1 });
};

const getEventByIdService = async (id) => {
  return await Event.findById(id);
};

const createEventService = async (eventData) => {
  return await Event.create(eventData);
};

const updateEventService = async (id, updatedData) => {
  return await Event.findByIdAndUpdate(
    id,
    updatedData,
    {
      new: true
    }
  );
};

const deleteEventService = async (id) => {
  return await Event.findByIdAndDelete(id);
};

module.exports = {
  getUpcomingEventsService,
  getEventByIdService,
  createEventService,
  updateEventService,
  deleteEventService
};