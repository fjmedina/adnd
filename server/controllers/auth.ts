import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { ApiError } from '../utils/ApiError.js';

// In production, use a proper database
const users = new Map();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }

  const user = users.get(email);
  if (!user) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '1h' }
  );

  res.json({ token });
};

export const register = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }

  if (users.has(email)) {
    throw new ApiError(409, 'User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.set(email, { email, password: hashedPassword, role: role || 'user' });

  res.status(201).json({ message: 'User created successfully' });
};

export const validateToken = async (req: Request, res: Response) => {
  res.json({ valid: true });
};