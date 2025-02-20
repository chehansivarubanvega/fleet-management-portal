const ROOTS = {
    AUTH: '/signin',
}

export const paths = {
    // AUTH
  auth: {
    signIn: `${ROOTS.AUTH}`,
    signUp: `${ROOTS.AUTH}/sign-up`,
    resetPassword: `${ROOTS.AUTH}/reset-password`,
    updatePassword: `${ROOTS.AUTH}/update-password`,
    verify: `${ROOTS.AUTH}/verify`,
  },
  dashboard: '/dashboard',
  home: '/',
} ;