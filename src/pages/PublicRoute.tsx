import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router";
import LoadingPage from "@/pages/LoadingPage";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) return <LoadingPage />;

  return currentUser ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

export default ProtectedRoute;
