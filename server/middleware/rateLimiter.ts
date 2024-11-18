import rateLimit from 'express-rate-limit';
import { authConfig } from '../config/auth.js';

// General rate limiter
export const generalLimiter = rateLimit({
  windowMs: authConfig.rateLimiting.windowMs,
  max: authConfig.rateLimiting.max,
  message: 'Too many requests from this IP, please try again later'
});

// Stricter rate limiter for login attempts
export const loginLimiter = rateLimit({
  windowMs: authConfig.rateLimiting.windowMs,
  max: authConfig.rateLimiting.loginMax,
  message: 'Too many login attempts from this IP, please try again later'
});