'use client';

export type RoleBasedGuardProp = {
  currentRole: string;
  hasContent?: boolean;
  acceptRoles: string[];
  children: React.ReactNode;
};

export function RoleBasedGuard({
  children,
  hasContent,
  currentRole,
  acceptRoles,
}: RoleBasedGuardProp) {
  if (typeof acceptRoles !== 'undefined' && !acceptRoles.includes(currentRole)) {
    return hasContent ? (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h3>Permission denied</h3>
        <p>You do not have permission to access this page.</p>
        <div style={{ marginTop: '20px' }}>
          <span>[Forbidden Illustration Placeholder]</span>
        </div>
      </div>
    ) : null;
  }

  return <>{children}</>;
}