import { cn } from '../../lib/utils'
import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  label: string
  value: string | number
  unit?: string
  change?: string
  changeTone?: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
  description?: string
}

export function MetricCard({
  label,
  value,
  unit,
  change,
  changeTone = 'neutral',
  icon: Icon,
  description,
}: MetricCardProps) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[var(--color-muted)]">{label}</p>
          <div className="mt-1.5 flex items-baseline gap-1.5">
            <span className="text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
              {value}
            </span>
            {unit && <span className="text-sm text-[var(--color-muted)]">{unit}</span>}
          </div>
          {change && (
            <p
              className={cn(
                'mt-1.5 text-xs font-medium',
                changeTone === 'positive' && 'text-emerald-600 dark:text-emerald-400',
                changeTone === 'negative' && 'text-red-600 dark:text-red-400',
                changeTone === 'neutral' && 'text-[var(--color-muted)]'
              )}
            >
              {change}
            </p>
          )}
          {description && (
            <p className="mt-1 text-xs text-[var(--color-muted)]">{description}</p>
          )}
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-brand-50 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
