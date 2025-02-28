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
  dashboard:{
    root: '/',
    general: '/dashboard/general',
    ecommerce: '/dashboard/ecommerce',
    analytics: '/dashboard/analytics',
    finance: '/dashboard/finance',
    crypto: '/dashboard/crypto',
    project: '/dashboard/project',
    social: '/dashboard/social',
    calendar: '/dashboard/calendar',
    user: '/dashboard/user',
    mail: '/dashboard/mail',
    chat: '/dashboard/chat',
  },
  home: '/',
} ;