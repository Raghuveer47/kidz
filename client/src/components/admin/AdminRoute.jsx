import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { hasAdminRole } from '../../lib/roles';

/**
 * Protects /admin routes — must be logged in with admin role.
 */
export default function AdminRoute({ children }) {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace state={{ from: location.pathname }} />;
  }

  if (!hasAdminRole(user)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
