'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

import { isValidToken } from './utils';
import { AuthContext } from './auth-context';

import type { AuthState } from '../types';
import { JWT_STORAGE_KEY } from './constants';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, setState] = useState<AuthState>({ user: null, loading: true });

  const checkUserSession = useCallback(async () => {
    try {
      const accessToken = sessionStorage.getItem(JWT_STORAGE_KEY);
    

      if (accessToken && isValidToken(accessToken)) {
        const _id = sessionStorage.getItem('_id');
        const name = sessionStorage.getItem('name');
        const email = sessionStorage.getItem('email');
        const role = sessionStorage.getItem('role');
        const status = sessionStorage.getItem('status');
        const profilePhoto = sessionStorage.getItem('profilePhoto');

        setState({
          user: { _id, name, email, role, accessToken, status, profilePhoto },
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

  // ----------------------------------------------------------------------

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