import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import orderRoutes from '../server/routes/orders.js';
import messageRoutes from '../server/routes/messages.js';
import reservationRoutes from '../server/routes/reservations.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Vercel Serverless DB connection middleware
let isConnected = false;
app.use(async (req, res, next) => {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGO_URI, { bufferCommands: false });
      isConnected = true;
      console.log('Connected to MongoDB Serverless');
    } catch (e) {
      console.error('MongoDB Serverless connection error', e);
      return res.status(500).json({ error: 'Database connection failed' });
    }
  }
  next();
});

// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/reservations', reservationRoutes);

// Health check
app.get('/api', (req, res) => {
  res.json({ message: 'ÉLEVÉ API is running on Vercel Severless' });
});

export default app;
