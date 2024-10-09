"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

// Define the correct type for 'children'
interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
