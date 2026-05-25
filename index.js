require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// ── Middleware ──
app.use(cors());               // allow frontend to talk to this backend
app.use(express.json());       // parse JSON request bodies

// ── Routes ──
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/tasks', require('./routes/task.routes'));

// ── Health check ──
app.get('/', (req, res) => {
  res.json({ msg: 'Task Manager API is running ✓' });
});

// ── Start server ──
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
