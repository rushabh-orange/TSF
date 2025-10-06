import { useMemo } from "react";
import { getUser, isAuthenticated as isAuth } from "@/lib/auth";

export interface AuthUser {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  avatar?: string;
}

export function useAuth() {
  const user = useMemo<AuthUser | null>(() => getUser<AuthUser>(), []);
  const isAuthenticated = isAuth();

  return {
    user: user ?? { role: "guest" },
    isAuthenticated,
  } as const;
}
