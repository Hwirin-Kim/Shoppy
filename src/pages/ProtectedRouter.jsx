import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContext";

export default function ProtectedRouter({ children, requireAdmin }) {
  const { user } = useAuthContext();

  //사용자가 없거나, requireAdmin인데 사용자에게 admin권한이 없는 경우
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
