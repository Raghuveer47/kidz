import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  clearAuthSession,
  getAccessToken,
  getRefreshToken,
  getStoredUser,
  saveAuthSession,
} from '../lib/auth';
import { API_BASE } from '../lib/api';
import { hasAdminRole } from '../lib/roles';

const AuthContext = createContext(null);

function readSession() {
  return {
    user: getStoredUser(),
    accessToken: getAccessToken(),
  };
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readSession());

  const refreshFromStorage = useCallback(() => {
    setSession(readSession());
  }, []);

  useEffect(() => {
    const onStorage = (e) => {
      if (!e.key || e.key.startsWith('kids_')) refreshFromStorage();
    };
    const onAuthChanged = () => refreshFromStorage();
    window.addEventListener('storage', onStorage);
    window.addEventListener('kids-auth-changed', onAuthChanged);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('kids-auth-changed', onAuthChanged);
    };
  }, [refreshFromStorage]);

  const login = useCallback((data) => {
    saveAuthSession(data);
    setSession({
      user: data.user || getStoredUser(),
      accessToken: data.tokens?.accessToken || getAccessToken(),
    });
  }, []);

  const logout = useCallback(async () => {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      try {
        await fetch(`${API_BASE}/api/auth/logout`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refreshToken }),
        });
      } catch {
        // local logout still proceeds
      }
    }
    clearAuthSession();
    setSession({ user: null, accessToken: null });
  }, []);

  const value = useMemo(
    () => ({
      user: session.user,
      accessToken: session.accessToken,
      isLoggedIn: Boolean(session.accessToken && session.user),
      isAdmin: hasAdminRole(session.user),
      login,
      logout,
      refreshFromStorage,
    }),
    [session, login, logout, refreshFromStorage]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
