import { jwtDecode } from 'jwt-decode';
import bcrypt from 'bcryptjs';

interface DecodedToken {
  exp: number;
  email: string;
  role: string;
}

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const setAuthToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};

export const removeAuthToken = (): void => {
  localStorage.removeItem('authToken');
};

export const isTokenValid = (): boolean => {
  const token = getAuthToken();
  if (!token) return false;

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const getDecodedToken = (): DecodedToken | null => {
  const token = getAuthToken();
  if (!token) return null;

  try {
    return jwtDecode<DecodedToken>(token);
  } catch {
    return null;
  }
};