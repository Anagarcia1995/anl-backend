const { verifyToken } = require("../middleware/authMiddleware");

const express = require('express');

const router = express.Router();

const {
  getUpcomingEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');

router.get('/upcoming', getUpcomingEvents);

router.get('/:id', getEventById);

router.post('/', verifyToken, createEvent);

router.put('/:id', verifyToken, updateEvent);

router.delete('/:id', verifyToken, deleteEvent);

module.exports = router;