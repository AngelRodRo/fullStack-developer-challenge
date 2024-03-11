'use client';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/hooks/useAuth';
import { navigate } from '@/utils/actions';

export default function Home() {
  const { authenticated } = useAuth();

  if (authenticated === undefined) {
    return null;
  }

  if (authenticated) {
    navigate('/dashboard');
    return;
  }

  return <LoginForm />;
}
