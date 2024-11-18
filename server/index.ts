import express from 'express';
import dotenv from 'dotenv';
import { authRouter } from './routes/auth.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFound } from './middleware/notFound.js';
import { generalLimiter } from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(generalLimiter); // Apply rate limiting to all routes

// Routes
app.use('/api/auth', authRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});