const express = require('express');
const cors = require('cors');

const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use('/api/events', eventRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'ANL Backend running'
  });
});

module.exports = app;