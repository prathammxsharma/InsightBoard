import { Menu, Search, Bell, Moon, Sun, ChevronDown } from 'lucide-react'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

interface HeaderProps {
  title: string
  description?: string
  onMenuClick: () => void
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

export function Header({ title, description, onMenuClick, theme, onThemeToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-[var(--header-height)] items-center gap-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 px-4 backdrop-blur-sm sm:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMenuClick}
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="min-w-0 flex-1">
        <h1 className="truncate text-base font-semibold text-[var(--color-foreground)] sm:text-lg">
          {title}
        </h1>
        {description && (
          <p className="hidden truncate text-xs text-[var(--color-muted)] sm:block">
            {description}
          </p>
        )}
      </div>

      {/* Search */}
      <div className="hidden md:flex relative max-w-xs flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]" />
        <input
          type="search"
          placeholder="Search tasks, people…"
          className={cn(
            'h-9 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] pl-9 pr-3 text-sm',
            'placeholder:text-[var(--color-muted)] focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'
          )}
          aria-label="Search"
        />
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onThemeToggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        {/* User menu */}
        <button
          className="ml-1 flex items-center gap-2 rounded-[var(--radius-md)] px-2 py-1.5 text-sm hover:bg-[var(--color-border-subtle)] focus-ring"
          aria-label="User menu"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
            AK
          </div>
          <span className="hidden text-[var(--color-foreground)] sm:inline">Alex Kim</span>
          <ChevronDown className="hidden h-3.5 w-3.5 text-[var(--color-muted)] sm:block" />
        </button>
      </div>
    </header>
  )
}
