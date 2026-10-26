import {
  CheckSquare,
  Users,
  Target,
  FileText,
  Clock,
  ArrowRight,
  Circle,
} from 'lucide-react'
import { MetricCard } from './ui/MetricCard'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { cn } from '../lib/utils'

const metrics = [
  {
    label: 'Open Tasks',
    value: 24,
    change: '3 due today',
    changeTone: 'neutral' as const,
    icon: CheckSquare,
  },
  {
    label: 'Active Leads',
    value: 18,
    change: '+4 this week',
    changeTone: 'positive' as const,
    icon: Target,
  },
  {
    label: 'Team Members',
    value: 12,
    change: '2 on leave',
    changeTone: 'neutral' as const,
    icon: Users,
  },
  {
    label: 'Pending Invoices',
    value: 7,
    unit: '$12.4k',
    change: '2 overdue',
    changeTone: 'negative' as const,
    icon: FileText,
  },
]

const upcoming = [
  { id: 1, title: 'Finalize Q4 roadmap', due: 'Today, 4:00 PM', priority: 'high', status: 'In progress' },
  { id: 2, title: 'Review design system tokens', due: 'Tomorrow', priority: 'medium', status: 'Todo' },
  { id: 3, title: 'Client kickoff — NovaTech', due: 'Wed 10:00 AM', priority: 'high', status: 'Todo' },
  { id: 4, title: 'Update employee handbook', due: 'Fri', priority: 'low', status: 'In review' },
]

const activity = [
  { id: 1, user: 'Sarah Chen', action: 'completed', target: 'API rate limiting', time: '12m ago' },
  { id: 2, user: 'Marcus Lee', action: 'commented on', target: 'Invoice #1842', time: '34m ago' },
  { id: 3, user: 'Priya Patel', action: 'moved', target: 'Lead: Horizon Labs', time: '1h ago' },
  { id: 4, user: 'Alex Kim', action: 'created', target: 'Sprint 24 tasks', time: '2h ago' },
  { id: 5, user: 'Jordan Ruiz', action: 'approved', target: 'Time-off request', time: '3h ago' },
]

const priorityTone = {
  high: 'error' as const,
  medium: 'warning' as const,
  low: 'default' as const,
}

export function Dashboard() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      {/* KPI row */}
      <section aria-label="Key metrics">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Upcoming tasks */}
        <section className="lg:col-span-3" aria-labelledby="upcoming-heading">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
              <div>
                <h2 id="upcoming-heading" className="text-sm font-semibold text-[var(--color-foreground)]">
                  Upcoming deadlines
                </h2>
                <p className="text-xs text-[var(--color-muted)]">Tasks and events due soon</p>
              </div>
              <Button variant="ghost" size="sm">
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
            <ul className="divide-y divide-[var(--color-border)]">
              {upcoming.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-[var(--color-border-subtle)]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-border-subtle)]">
                    <Circle className="h-3.5 w-3.5 text-[var(--color-muted)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-[var(--color-foreground)]">
                      {item.title}
                    </p>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-[var(--color-muted)]">
                      <Clock className="h-3 w-3" />
                      {item.due}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Badge tone={priorityTone[item.priority as keyof typeof priorityTone]}>
                      {item.priority}
                    </Badge>
                    <span className="hidden text-xs text-[var(--color-muted)] sm:inline">
                      {item.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Activity feed */}
        <section className="lg:col-span-2" aria-labelledby="activity-heading">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]">
            <div className="border-b border-[var(--color-border)] px-5 py-4">
              <h2 id="activity-heading" className="text-sm font-semibold text-[var(--color-foreground)]">
                Team activity
              </h2>
              <p className="text-xs text-[var(--color-muted)]">Recent updates across the workspace</p>
            </div>
            <ul className="divide-y divide-[var(--color-border)]">
              {activity.map((item) => (
                <li key={item.id} className="px-5 py-3.5">
                  <p className="text-sm text-[var(--color-foreground)]">
                    <span className="font-medium">{item.user}</span>{' '}
                    <span className="text-[var(--color-muted)]">{item.action}</span>{' '}
                    <span className="font-medium">{item.target}</span>
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--color-muted)]">{item.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Quick actions / empty-ish section for polish */}
      <section aria-label="Quick actions">
        <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 text-center">
          <p className="text-sm font-medium text-[var(--color-foreground)]">
            Need to capture something quickly?
          </p>
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            Create a task, log a lead, or start a new invoice without leaving the dashboard.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <Button size="sm">New Task</Button>
            <Button variant="secondary" size="sm">
              Add Lead
            </Button>
            <Button variant="outline" size="sm">
              Create Invoice
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
