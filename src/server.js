require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { connectToDb } = require('./config/db');
const { WebSocketServer } = require('ws');

const authRoutes = require('./routes/authRoutes');
const businessRoutes = require('./routes/businessRoutes');
const adminRoutes = require('./routes/adminRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes'); // 🔥 NEW

const app = express();
const PORT = process.env.PORT || 5003;

// Middlewares
app.use(express.json());

const corsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: false,
}));

app.use(cookieParser());

// Routes
app.get('/test', (req, res) => res.json({ message: 'Server is working' }));

app.use('/api/auth', authRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/chat', chatbotRoutes); // 🔥 NEW

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', time: new Date().toISOString() });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});



startServer();
