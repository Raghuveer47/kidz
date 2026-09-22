import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardList,
  BarChart3,
  Layers,
  TrendingUp,
  Home as HomeIcon,
  LogOut,
  Home,
  Shield,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  { to: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/curriculum', label: 'Curriculum', icon: BookOpen },
  { to: '/admin/quizzes', label: 'Quizzes', icon: ClipboardList },
  { to: '/admin/reports', label: 'Reports', icon: BarChart3 },
  { to: '/admin/batches', label: 'Batches', icon: Layers },
  { to: '/admin/progress', label: 'Progress', icon: TrendingUp },
  { to: '/admin/home', label: 'Home CMS', icon: HomeIcon },
];

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-slate-900 text-white md:flex">
          <div className="border-b border-white/10 px-5 py-5">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-cyan-300" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Kids Coding AI</p>
                <p className="text-lg font-bold">Admin</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-white/15 text-white'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span className="flex-1">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="space-y-2 border-t border-white/10 p-4">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Home className="h-4 w-4" />
              Student site
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/20"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-cyan-700">Admin dashboard</p>
              <h1 className="text-lg font-extrabold text-slate-900 sm:text-xl">Welcome, {user?.name || 'Admin'}</h1>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-800">{user?.email}</p>
              <p className="text-xs font-medium text-slate-500">
                {(user?.roles || []).join(', ') || 'admin'}
              </p>
            </div>
          </header>

          <div className="flex gap-2 overflow-x-auto border-b border-slate-200 bg-white px-3 py-2 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold ${
                    isActive ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <main className="flex-1 p-4 sm:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
