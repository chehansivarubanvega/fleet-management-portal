export interface User {
  _id: string | null;
  name: string | null;
  email: string | null;
  role: string | null;
  accessToken: string | null;
  status: string | null;
  profilePhoto: string | null;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface AuthContextType {
  user: User | null;
  checkUserSession: () => Promise<void>;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
}
