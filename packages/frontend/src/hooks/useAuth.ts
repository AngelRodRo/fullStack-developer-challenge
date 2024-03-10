"use client"
import { jwtDecode } from 'jwt-decode';
import { AUTH_TOKEN } from '@/constants';
import { useEffect, useState } from 'react';

const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const token = localStorage.getItem(AUTH_TOKEN);
  if (token) {
    try {
      return Boolean(jwtDecode(token));
    } catch (e) {
      return false;
    }
  }
  return false;
}

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState<boolean>();
  useEffect(() => {
    setAuthenticated(isAuthenticated())
  }, []);
  console.log("authenticated", authenticated);
  return { authenticated };
}
