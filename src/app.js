const express = require('express');
const cors = require('cors');
const helmet = require("helmet");

const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');
const releaseRoutes = require("./routes/releaseRoutes");
const path = require("path");

const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  })
);

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  }
}));

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

app.use(express.json());

app.use("/auth", authRoutes);
app.use('/api/events', eventRoutes);
app.use("/api/releases", releaseRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'ANL Backend running'
  });
});

module.exports = app;