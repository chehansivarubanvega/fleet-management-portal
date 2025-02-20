'use client';

import { useMemo, useEffect, useCallback, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { isValidToken } from '../../auth/context/utils';
import { JWT_STORAGE_KEY } from './constant';
import type { AuthState, User } from '../types/auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true
  });

  const checkUserSession = useCallback(async () => {
    try {
      const accessToken = sessionStorage.getItem(JWT_STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        const user: User = {
          _id: sessionStorage.getItem('_id'),
          name: sessionStorage.getItem('name'),
          email: sessionStorage.getItem('email'),
          role: sessionStorage.getItem('role'),
          accessToken,
          status: sessionStorage.getItem('status'),
          profilePhoto: sessionStorage.getItem('profilePhoto'),
        };

        setState({
          user,
          loading: false,
        });
      } else {
        setState({ user: null, loading: false });
      }
    } catch (error) {
      console.error(error);
      setState({ user: null, loading: false });
    }
  }, []);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';
  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user ? { ...state.user, role: state.user?.role ?? 'admin' } : null,
      checkUserSession,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
    }),
    [checkUserSession, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
