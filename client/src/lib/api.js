const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050').replace(/\/$/, '');

async function request(path, options = {}) {
  const isFormData = typeof FormData !== 'undefined' && options.body instanceof FormData;
  const headers = {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...(options.headers || {}),
  };
  // Let the browser set multipart boundary for FormData
  if (isFormData && headers['Content-Type']) delete headers['Content-Type'];

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
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

export const quizzesApi = {
  list: (accessToken, params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        query.set(key, String(value));
      }
    });
    const qs = query.toString();
    return request(`/api/quizzes${qs ? `?${qs}` : ''}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    });
  },

  getById: (accessToken, id) =>
    request(`/api/quizzes/${id}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    }),

  create: (accessToken, payload) =>
    request('/api/quizzes', {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify(payload),
    }),

  update: (accessToken, id, payload) =>
    request(`/api/quizzes/${id}`, {
      method: 'PUT',
      headers: authHeaders(accessToken),
      body: JSON.stringify(payload),
    }),

  remove: (accessToken, id) =>
    request(`/api/quizzes/${id}`, {
      method: 'DELETE',
      headers: authHeaders(accessToken),
    }),

  submitAttempt: (accessToken, id, answers) =>
    request(`/api/quizzes/${id}/attempt`, {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify({ answers }),
    }),

  listAttempts: (accessToken, id, params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        query.set(key, String(value));
      }
    });
    const qs = query.toString();
    return request(`/api/quizzes/${id}/attempts${qs ? `?${qs}` : ''}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    });
  },

  uploadExcel: (accessToken, formData) =>
    request('/api/quizzes/upload-excel', {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: formData,
    }),
};

export const uploadApi = {
  image: (accessToken, file, folder = 'kidscodingai/uploads') => {
    const form = new FormData();
    form.append('image', file);
    form.append('folder', folder);
    return request('/api/upload/image', {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: form,
    });
  },
};

export const batchesApi = {
  list: (accessToken, params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        query.set(key, String(value));
      }
    });
    const qs = query.toString();
    return request(`/api/batches${qs ? `?${qs}` : ''}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    });
  },

  create: (accessToken, payload) =>
    request('/api/batches', {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify(payload),
    }),

  update: (accessToken, id, payload) =>
    request(`/api/batches/${id}`, {
      method: 'PUT',
      headers: authHeaders(accessToken),
      body: JSON.stringify(payload),
    }),

  remove: (accessToken, id) =>
    request(`/api/batches/${id}`, {
      method: 'DELETE',
      headers: authHeaders(accessToken),
    }),

  addStudents: (accessToken, code, userIds) =>
    request(`/api/batches/${encodeURIComponent(code)}/students`, {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify({ userIds }),
    }),

  removeStudents: (accessToken, code, userIds) =>
    request(`/api/batches/${encodeURIComponent(code)}/students`, {
      method: 'DELETE',
      headers: authHeaders(accessToken),
      body: JSON.stringify({ userIds }),
    }),

  listStudents: (accessToken, params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        query.set(key, String(value));
      }
    });
    const qs = query.toString();
    return request(`/api/batches/students/paginated${qs ? `?${qs}` : ''}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    });
  },
};

export const reportsApi = {
  summary: (accessToken) =>
    request('/api/reports/summary', {
      method: 'GET',
      headers: authHeaders(accessToken),
    }),

  listAttempts: (accessToken, params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        query.set(key, String(value));
      }
    });
    const qs = query.toString();
    return request(`/api/reports/attempts${qs ? `?${qs}` : ''}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    });
  },

  getAttempt: (accessToken, id) =>
    request(`/api/reports/attempts/${id}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    }),

  removeAttempt: (accessToken, id) =>
    request(`/api/reports/attempts/${id}`, {
      method: 'DELETE',
      headers: authHeaders(accessToken),
    }),
};

export const progressApi = {
  summary: (accessToken) =>
    request('/api/progress/summary', {
      method: 'GET',
      headers: authHeaders(accessToken),
    }),

  list: (accessToken, params = {}) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && String(value).trim() !== '') {
        query.set(key, String(value));
      }
    });
    const qs = query.toString();
    return request(`/api/progress${qs ? `?${qs}` : ''}`, {
      method: 'GET',
      headers: authHeaders(accessToken),
    });
  },
};

export const homeApi = {
  getPublic: () => request('/api/home', { method: 'GET' }),

  listSections: (accessToken) =>
    request('/api/home/admin/sections', {
      method: 'GET',
      headers: authHeaders(accessToken),
    }),

  updateSection: (accessToken, section, data) =>
    request(`/api/home/${section}`, {
      method: 'POST',
      headers: authHeaders(accessToken),
      body: JSON.stringify({ data }),
    }),
};

export { API_BASE };
