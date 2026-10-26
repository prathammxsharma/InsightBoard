import {
  LayoutDashboard,
  CheckSquare,
  Users,
  Target,
  FileText,
  Workflow,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'

const navGroups = [
  {
    label: 'Workspace',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'tasks', label: 'Tasks', icon: CheckSquare },
      { id: 'leads', label: 'Leads', icon: Target },
      { id: 'invoices', label: 'Invoices', icon: FileText },
    ],
  },
  {
    label: 'Team',
    items: [
      { id: 'hr', label: 'HR', icon: Users },
      { id: 'flow', label: 'FMS Flow', icon: Workflow },
      { id: 'chat', label: 'Chat', icon: MessageSquare },
    ],
  },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  active: string
  onNavigate: (id: string) => void
  mobileOpen: boolean
  onMobileClose: () => void
}

export function Sidebar({
  collapsed,
  onToggle,
  active,
  onNavigate,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onMobileClose}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200 ease-out',
          collapsed ? 'w-[var(--sidebar-collapsed-width)]' : 'w-[var(--sidebar-width)]',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Brand */}
        <div className="flex h-[var(--header-height)] items-center gap-3 border-b border-[var(--color-border)] px-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Building2 className="h-4 w-4" />
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-[var(--color-foreground)]">
                InsightBoard
              </div>
              <div className="truncate text-xs text-[var(--color-muted)]">Acme Corp</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              {!collapsed && (
                <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                  {group.label}
                </div>
              )}
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const isActive = active === item.id
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          onNavigate(item.id)
                          onMobileClose()
                        }}
                        className={cn(
                          'group flex w-full items-center gap-3 rounded-[var(--radius-md)] px-2.5 py-2 text-sm font-medium transition-colors focus-ring',
                          isActive
                            ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300'
                            : 'text-[var(--color-foreground-secondary)] hover:bg-[var(--color-border-subtle)] hover:text-[var(--color-foreground)]'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon
                          className={cn(
                            'h-[18px] w-[18px] shrink-0',
                            isActive ? 'text-brand-600 dark:text-brand-400' : 'text-[var(--color-muted)] group-hover:text-[var(--color-foreground)]'
                          )}
                        />
                        {!collapsed && <span className="truncate">{item.label}</span>}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-[var(--color-border)] p-3">
          <button
            onClick={() => onNavigate('settings')}
            className={cn(
              'flex w-full items-center gap-3 rounded-[var(--radius-md)] px-2.5 py-2 text-sm font-medium text-[var(--color-foreground-secondary)] transition-colors hover:bg-[var(--color-border-subtle)] hover:text-[var(--color-foreground)] focus-ring',
              active === 'settings' && 'bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300'
            )}
          >
            <Settings className="h-[18px] w-[18px] shrink-0 text-[var(--color-muted)]" />
            {!collapsed && <span>Settings</span>}
          </button>

          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="mt-2 w-full justify-center lg:justify-start"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" />
                <span className="ml-1">Collapse</span>
              </>
            )}
          </Button>
        </div>
      </aside>
    </>
  )
}
