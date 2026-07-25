const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050').replace(/\/$/, '');

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const message = data?.error?.message || data?.message || 'Something went wrong. Please try again.';
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
}

function authHeaders(accessToken) {
  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
}

export const authApi = {
  login: (email, password) =>
    request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  signup: (payload) =>
    request('/api/auth/signup-direct', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  me: (accessToken) =>
    request('/api/auth/me', {
      method: 'GET',
      headers: authHeaders(accessToken),
    }),
};

export const usersApi = {
  list: (accessToken, params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        query.set(key, String(value));
      }
    });
    const qs = query.toString();
    return request(`/api/users${qs ? `?${qs}` : ''}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    });
  },

  getById: (accessToken, id) =>
    request(`/api/users/${id}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    }),

  create: (accessToken, payload) =>
    request('/api/users', {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify(payload),
    }),

  update: (accessToken, id, payload) =>
    request(`/api/users/${id}`, {
      method: 'PUT',
      headers: authHeaders(accessToken),
      body: JSON.stringify(payload),
    }),

  remove: (accessToken, id) =>
    request(`/api/users/${id}`, {
      method: 'DELETE',
      headers: authHeaders(accessToken),
    }),
};

export const curriculumApi = {
  classes: (accessToken) =>
    request('/api/curriculum/classes', {
      method: 'GET',
      headers: authHeaders(accessToken),
    }),

  listTopics: (params = {}, accessToken) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        query.set(key, String(value));
      }
    });
    const qs = query.toString();
    return request(`/api/curriculum/topics${qs ? `?${qs}` : ''}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    });
  },

  createTopic: (accessToken, payload) =>
    request('/api/curriculum/topics', {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify(payload),
    }),

  updateTopic: (accessToken, id, payload) =>
    request(`/api/curriculum/topics/${id}`, {
      method: 'PUT',
      headers: authHeaders(accessToken),
      body: JSON.stringify(payload),
    }),

  deleteTopic: (accessToken, id) =>
    request(`/api/curriculum/topics/${id}`, {
      method: 'DELETE',
      headers: authHeaders(accessToken),
    }),

  seed: (accessToken) =>
    request('/api/curriculum/seed', {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify({ replace: true }),
    }),
};

export { API_BASE };
