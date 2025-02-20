'use client';

import { useState, useEffect } from 'react';

import { paths } from '@/routes/paths';
import { useRouter, usePathname } from '@/routes/hooks';

import { CONFIG } from '@/global-config';



import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: React.ReactNode;
};

const signInPaths = {
  jwt: paths.auth.signIn,
};

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { authenticated, loading } = useAuthContext();

  const [isChecking, setIsChecking] = useState<boolean>(true);

  const createRedirectPath = (currentPath: string) => {
    const queryString = new URLSearchParams({ returnTo: pathname }).toString();
    return `${currentPath}?${queryString}`;
  };

  const checkPermissions = async (): Promise<void> => {
    
  console.log('authenticated', authenticated);
    if (loading) {
      return;
    }

    if (!authenticated) {
      const { method } = CONFIG.auth;

      const signInPath = signInPaths[method];
      const redirectPath = createRedirectPath(signInPath);

      router.replace(redirectPath);

      return;
    }

    setIsChecking(false);
  };

  useEffect(() => {
    checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, loading]);

  if (isChecking) {
    return <div>Loading</div>; //TODO: Add loading screen
  }


  return <>{children}</>;
}
