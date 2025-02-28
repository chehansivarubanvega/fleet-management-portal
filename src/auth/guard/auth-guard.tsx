'use client';

import { useState, useEffect } from 'react';

import { paths } from '@/routes/paths';
import { useRouter, usePathname } from '@/routes/hooks';

import { CONFIG } from '@/global-config';



import { useAuthContext } from '../hooks';
import SplashScreen from '@/components/common/SplashScreen';

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
    console.log('checking permissions----------------');
    
    if (loading) {
      return;
    }

    if (!authenticated) {
        console.log('redirecting to sign in page-----------------');
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
    return <div><SplashScreen/></div>;
  }


  return <>{children}</>;
}
