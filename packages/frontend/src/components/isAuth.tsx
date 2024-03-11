'use client';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { navigate } from '@/utils/actions';

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { authenticated } = useAuth();

    useEffect(() => {
      if (authenticated === undefined) {
        return;
      }

      if (!authenticated) {
        navigate('/');
        return;
      }
    }, [authenticated]);

    if (!authenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}
