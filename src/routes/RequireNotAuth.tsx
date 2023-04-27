import {
  Navigate,
} from "react-router-dom";

import { useAuth } from "../hooks/auth";

interface RequireAuthProps {
  children: JSX.Element;
}

export function RequireNotAuth({ children }: RequireAuthProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children
}
