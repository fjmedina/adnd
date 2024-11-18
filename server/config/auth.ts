import dotenv from 'dotenv';

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is required in environment variables');
}

export const authConfig = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: '1h',
  rateLimiting: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    loginMax: 5 // stricter limit for login attempts
  }
};