const ADMIN_ROLES = ['super_admin', 'content_admin'];

export function hasAdminRole(user) {
  if (!user || !Array.isArray(user.roles)) return false;
  const roles = user.roles.map((r) => String(r).toLowerCase());
  return roles.some((r) => ADMIN_ROLES.includes(r));
}

export { ADMIN_ROLES };
