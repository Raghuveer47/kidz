const ACCESS_KEY = 'kids_access_token';
const REFRESH_KEY = 'kids_refresh_token';
const USER_KEY = 'kids_user';

function notifyAuthChanged() {
  window.dispatchEvent(new Event('kids-auth-changed'));
}

export function saveAuthSession({ user, tokens }) {
  if (tokens?.accessToken) localStorage.setItem(ACCESS_KEY, tokens.accessToken);
  if (tokens?.refreshToken) localStorage.setItem(REFRESH_KEY, tokens.refreshToken);
  if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
  notifyAuthChanged();
}

export function clearAuthSession() {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(USER_KEY);
  notifyAuthChanged();
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isLoggedIn() {
  return Boolean(getAccessToken());
}
