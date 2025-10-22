export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  lastLoginAt?: string;
}

export interface CurrentUser {
  user: AuthUser | null;
}
