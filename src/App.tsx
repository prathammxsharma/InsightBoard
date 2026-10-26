import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { Sidebar } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { Dashboard } from './components/Dashboard'
import { cn } from './lib/utils'

const pageMeta: Record<string, { title: string; description?: string }> = {
  dashboard: {
    title: 'Dashboard',
    description: 'Overview of your workspace this week',
  },
  tasks: { title: 'Tasks', description: 'Manage and track work items' },
  leads: { title: 'Leads', description: 'Pipeline and opportunity tracking' },
  invoices: { title: 'Invoices', description: 'Billing and payment status' },
  hr: { title: 'HR', description: 'Team and people management' },
  flow: { title: 'FMS Flow Builder', description: 'Automate internal processes' },
  chat: { title: 'Chat', description: 'Team conversations' },
  settings: { title: 'Settings', description: 'Workspace preferences and account' },
}

export default function App() {
  const { theme, toggle } = useTheme()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('dashboard')

  const meta = pageMeta[active] ?? { title: 'InsightBoard' }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        active={active}
        onNavigate={setActive}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div
        className={cn(
          'flex min-h-screen flex-col transition-[padding] duration-200 ease-out',
          collapsed ? 'lg:pl-[var(--sidebar-collapsed-width)]' : 'lg:pl-[var(--sidebar-width)]'
        )}
      >
        <Header
          title={meta.title}
          description={meta.description}
          onMenuClick={() => setMobileOpen(true)}
          theme={theme}
          onThemeToggle={toggle}
        />

        <main className="flex-1" id="main-content">
          {active === 'dashboard' ? (
            <Dashboard />
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-10 shadow-[var(--shadow-sm)]">
                <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
                  {meta.title}
                </h2>
                <p className="mt-2 max-w-sm text-sm text-[var(--color-muted)]">
                  This module is part of the InsightBoard suite. The dashboard focuses on the
                  main overview; other modules are ready for expansion.
                </p>
                <button
                  onClick={() => setActive('dashboard')}
                  className="mt-6 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
                >
                  ← Back to Dashboard
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
