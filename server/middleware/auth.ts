import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';

interface JwtPayload {
  email: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    throw new ApiError(401, 'No token provided');
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key'
    ) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    throw new ApiError(401, 'Invalid token');
  }
};