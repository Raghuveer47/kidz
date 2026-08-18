import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { authApi } from '../lib/api';
import { useAuth } from '../context/AuthContext';
import { hasAdminRole } from '../lib/roles';

function safeNextPath(value) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) return null;
  return value;
}

const emptyLogin = { email: '', password: '' };
const emptySignup = {
  name: '',
  email: '',
  password: '',
  phone: '',
  classLevel: '',
};

function SignIn() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const [mode, setMode] = useState('login'); // login | signup
  const [loginForm, setLoginForm] = useState(emptyLogin);
  const [signupForm, setSignupForm] = useState(emptySignup);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onLoginChange = (e) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSignupChange = (e) => {
    setSignupForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await authApi.login(loginForm.email.trim(), loginForm.password);
      login(result.data);
      const loggedInUser = result.data?.user;
      const next = safeNextPath(searchParams.get('next'));
      navigate(next || (hasAdminRole(loggedInUser) ? '/admin' : '/'));
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const payload = {
        name: signupForm.name.trim(),
        email: signupForm.email.trim(),
        password: signupForm.password,
      };
      if (signupForm.phone.trim()) payload.phone = signupForm.phone.trim();
      if (signupForm.classLevel) payload.classLevel = Number(signupForm.classLevel);

      const result = await authApi.signup(payload);
      login(result.data);
      const next = safeNextPath(searchParams.get('next'));
      navigate(next || '/');
    } catch (err) {
      setError(err.message || 'Could not create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-b from-sky-100 via-amber-50 to-white">
      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-amber-200/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-lg flex-col px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/"
          className="mb-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur sm:p-8">
          <div className="mb-6 text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">Kids Coding AI</p>
            <h1 className="mt-2 font-nunito text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {mode === 'login' ? 'Welcome back!' : 'Create your account'}
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              {mode === 'login'
                ? 'Sign in with your email and password to continue learning.'
                : 'Parents and kids can join in under a minute.'}
            </p>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
              }}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition ${
                mode === 'login' ? 'bg-white text-slate-900 shadow' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <LogIn className="h-4 w-4" />
              Sign in
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setError('');
              }}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition ${
                mode === 'signup' ? 'bg-white text-slate-900 shadow' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <UserPlus className="h-4 w-4" />
              Sign up
            </button>
          </div>

          {error ? (
            <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
              {error}
            </div>
          ) : null}

          {mode === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={loginForm.email}
                  onChange={onLoginChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-400 transition focus:ring-2"
                  placeholder="you@email.com"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Password</span>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    autoComplete="current-password"
                    value={loginForm.password}
                    onChange={onLoginChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 text-slate-900 outline-none ring-cyan-400 transition focus:ring-2"
                    placeholder="Your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 px-4 py-3.5 text-base font-bold text-white shadow-lg transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Signing in…' : 'Sign in'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Full name</span>
                <input
                  type="text"
                  name="name"
                  required
                  minLength={2}
                  value={signupForm.name}
                  onChange={onSignupChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-400 transition focus:ring-2"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={signupForm.email}
                  onChange={onSignupChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-400 transition focus:ring-2"
                  placeholder="you@email.com"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">Password</span>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    value={signupForm.password}
                    onChange={onSignupChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-12 text-slate-900 outline-none ring-cyan-400 transition focus:ring-2"
                    placeholder="Min 8 chars, A-Z, a-z, number, symbol"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <span className="mt-1 block text-xs text-slate-500">
                  Use uppercase, lowercase, a number, and a special character.
                </span>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">Phone (optional)</span>
                  <input
                    type="tel"
                    name="phone"
                    value={signupForm.phone}
                    onChange={onSignupChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-400 transition focus:ring-2"
                    placeholder="Optional"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">Class (optional)</span>
                  <select
                    name="classLevel"
                    value={signupForm.classLevel}
                    onChange={onSignupChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-400 transition focus:ring-2"
                  >
                    <option value="">Select class</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        Class {n}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-3.5 text-base font-bold text-white shadow-lg transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Creating account…' : 'Create account'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
