const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return response.json();
};

export const validateToken = async (token: string) => {
  const response = await fetch(`${API_URL}/auth/validate`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Invalid token');
  }

  return response.json();
};