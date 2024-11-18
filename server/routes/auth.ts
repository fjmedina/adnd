import { Router } from 'express';
import { login, validateToken } from '../controllers/auth.js';
import { authenticate } from '../middleware/auth.js';
import { loginLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// Apply stricter rate limiting to login route
router.post('/login', loginLimiter, login);
router.get('/validate', authenticate, validateToken);

export { router as authRouter };