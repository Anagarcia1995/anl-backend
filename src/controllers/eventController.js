const {
  getUpcomingEventsService,
  getEventByIdService,
  createEventService,
  updateEventService,
  deleteEventService
} = require('../services/eventService');

const getUpcomingEvents = async (req, res) => {
  try {
    const events = await getUpcomingEventsService();

    res.json({
      success: true,
      data: events
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await getEventByIdService(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.json({
      success: true,
      data: event
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const createEvent = async (req, res) => {
  try {
    const newEvent = await createEventService(req.body);

    res.status(201).json({
      success: true,
      data: newEvent
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedEvent = await updateEventService(
      id,
      req.body
    );

    if (!updatedEvent) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.json({
      success: true,
      data: updatedEvent
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEvent = await deleteEventService(id);

    if (!deletedEvent) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.json({
      success: true,
      data: deletedEvent
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getUpcomingEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
};