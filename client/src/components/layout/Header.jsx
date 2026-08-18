import React, { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  House,
  Users,
  GraduationCap,
  Laptop2,
  BookOpen,
  Target,
  Lightbulb,
  LogIn,
  LogOut,
  ChevronDown,
  LayoutDashboard,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function userInitials(user) {
  const name = (user?.name || user?.email || 'U').trim();
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const { user, isLoggedIn, isAdmin, logout } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/#about', isHash: true },
    { name: 'Learn by Class', path: '/#classes', isHash: true },
    { name: 'Learn by Technology', path: '/#technologies', isHash: true },
    { name: 'Buy Books', path: '/#books', isHash: true },
    { name: 'Test My Skills', path: '/quizzes' },
    { name: 'Projects', path: '/#projects', isHash: true },
  ];

  useEffect(() => {
    const onDocClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const handleNavClick = (e, link) => {
    if (link.isHash) {
      e.preventDefault();
      const targetId = link.path.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      } else if (window.location.pathname !== '/') {
        window.location.href = link.path;
      }
    } else {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    setProfileOpen(false);
    setIsOpen(false);
    await logout();
    navigate('/');
  };

  const navIconMap = {
    Home: House,
    'About Us': Users,
    'Learn by Class': GraduationCap,
    'Learn by Technology': Laptop2,
    'Buy Books': BookOpen,
    'Test My Skills': Target,
    Projects: Lightbulb,
  };

  const profileMenu = (
    <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-xl">
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="truncate text-sm font-bold text-slate-900">{user?.name || 'Learner'}</p>
        <p className="truncate text-xs text-slate-500">{user?.email}</p>
        {user?.classLevel ? (
          <p className="mt-1 text-xs font-semibold text-cyan-700">Class {user.classLevel}</p>
        ) : null}
      </div>
      <Link
        to="/quizzes"
        onClick={() => setProfileOpen(false)}
        className="flex w-full items-center gap-2 border-b border-slate-100 px-4 py-3 text-left text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
      >
        <Target className="h-4 w-4" />
        My quizzes
      </Link>
      {isAdmin ? (
        <Link
          to="/admin"
          onClick={() => setProfileOpen(false)}
          className="flex w-full items-center gap-2 border-b border-slate-100 px-4 py-3 text-left text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          <LayoutDashboard className="h-4 w-4" />
          Admin dashboard
        </Link>
      ) : null}
      <button
        type="button"
        onClick={handleLogout}
        className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </button>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#5a4ee6] via-[#d946ef] via-[#f59e0b] via-[#84cc16] to-[#06b6d4] text-white shadow-[0_10px_30px_rgba(15,23,42,0.3)] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3 sm:h-24 sm:gap-4">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-14 sm:h-16 md:h-[4.75rem] w-14 sm:w-16 md:w-[4.75rem] rounded-2xl bg-white/90 shadow-md flex items-center justify-center overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-0.5 group-hover:ring-1 group-hover:ring-fuchsia-400 group-hover:ring-offset-2 group-hover:ring-offset-transparent group-hover:scale-105">
                <img
                  src="/logoimg.jpeg"
                  alt="kidscodingai.com Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          <div className="hidden flex-1 xl:flex xl:items-center xl:justify-end xl:gap-2 xl:pl-4">
            {navLinks.map((link) => {
              const Icon = navIconMap[link.name];
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`group inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full border px-3.5 text-sm font-semibold leading-none shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-400/70 ${
                    link.name === 'Learn by Class'
                      ? 'border-amber-200 bg-gradient-to-r from-amber-100/95 to-yellow-100/95 text-amber-900 shadow-[0_0_20px_rgba(251,191,36,0.45)] hover:from-amber-100 hover:to-yellow-100'
                      : 'border-white/60 bg-white/90 text-slate-800 hover:bg-white hover:text-violet-700'
                  }`}
                >
                  <span
                    className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      link.name === 'Learn by Class' ? 'bg-amber-200/80' : 'bg-violet-100'
                    }`}
                    aria-hidden
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" strokeWidth={2.3} />}
                  </span>
                  {link.name}
                </Link>
              );
            })}

            <div className="relative ml-2 flex items-center" ref={profileRef}>
              {isLoggedIn ? (
                <>
                  <button
                    type="button"
                    onClick={() => setProfileOpen((v) => !v)}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/60 bg-white/95 pl-1.5 pr-3 text-sm font-semibold text-slate-800 shadow-md transition hover:bg-white hover:text-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400/70"
                    aria-expanded={profileOpen}
                    aria-haspopup="menu"
                  >
                    {user?.profilePicture ? (
                      <img
                        src={user.profilePicture}
                        alt=""
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 text-xs font-bold text-white">
                        {userInitials(user)}
                      </span>
                    )}
                    <span className="max-w-[7rem] truncate">{user?.name?.split(' ')[0] || 'Profile'}</span>
                    <ChevronDown className={`h-4 w-4 transition ${profileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {profileOpen ? profileMenu : null}
                </>
              ) : (
                <Link
                  to="/signin"
                  className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full border border-white/60 bg-white/95 px-4 text-sm font-semibold leading-none text-slate-800 shadow-md transition-all hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-white hover:text-violet-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400/70"
                >
                  <LogIn className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
                  Sign in
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            {isLoggedIn ? (
              <button
                type="button"
                onClick={() => setProfileOpen((v) => !v)}
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/95 text-slate-800 shadow-md"
                aria-label="Open profile menu"
              >
                {user?.profilePicture ? (
                  <img src={user.profilePicture} alt="" className="h-9 w-9 rounded-full object-cover" />
                ) : (
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 text-xs font-bold text-white">
                    {userInitials(user)}
                  </span>
                )}
              </button>
            ) : null}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl border border-white/45 bg-white/15 p-2.5 text-white shadow-md transition-all hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/70"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile profile dropdown (avatar tap) */}
        {profileOpen && isLoggedIn && (
          <div className="relative px-4 pb-3 xl:hidden">
            <div className="ml-auto w-56">{profileMenu}</div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="xl:hidden border-t border-white/40 bg-gradient-to-b from-[#5a4ee6] via-[#d946ef] via-[#f59e0b] via-[#84cc16] to-[#06b6d4] text-white">
          <div className="px-3 pt-3 pb-4 space-y-1 sm:px-4 shadow-inner">
            {navLinks.map((link) => {
              const Icon = navIconMap[link.name];
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-base font-semibold transition-all hover:bg-white ${
                    link.name === 'Learn by Class'
                      ? 'border-amber-200 bg-gradient-to-r from-amber-100/95 to-yellow-100/95 text-amber-900 shadow-[0_0_14px_rgba(251,191,36,0.35)]'
                      : 'border-white/60 bg-white/90 text-slate-800 hover:text-violet-700'
                  }`}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  <span
                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      link.name === 'Learn by Class' ? 'bg-amber-200/80' : 'bg-violet-100'
                    }`}
                    aria-hidden
                  >
                    {Icon && <Icon className="h-4 w-4" strokeWidth={2.25} />}
                  </span>
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 space-y-2 border-t border-white/50 px-3 pb-3 pt-4">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/95 px-4 py-3 text-slate-800">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 text-sm font-bold text-white">
                      {userInitials(user)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-bold">{user?.name || 'Learner'}</p>
                      <p className="truncate text-xs text-slate-500">{user?.email}</p>
                    </div>
                  </div>
                  {isAdmin ? (
                    <Link
                      to="/admin"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-900 px-4 text-lg font-semibold text-white"
                    >
                      <LayoutDashboard className="h-5 w-5" />
                      Admin dashboard
                    </Link>
                  ) : null}
                  <Link
                    to="/quizzes"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 text-lg font-semibold text-violet-800"
                  >
                    <Target className="h-5 w-5" />
                    My quizzes
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 text-lg font-semibold text-rose-700"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/95 px-4 text-lg font-semibold leading-none text-slate-800 transition-all hover:bg-white hover:text-violet-700 hover:shadow-md"
                >
                  <LogIn className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden />
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
