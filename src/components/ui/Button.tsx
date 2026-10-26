import { cn } from '../../lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'outline'
type Size = 'sm' | 'md' | 'lg' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-sm border border-transparent',
  secondary:
    'bg-[var(--color-surface-elevated)] text-[var(--color-foreground)] border border-[var(--color-border)] hover:bg-[var(--color-border-subtle)]',
  ghost:
    'bg-transparent text-[var(--color-foreground-secondary)] hover:bg-[var(--color-border-subtle)] hover:text-[var(--color-foreground)]',
  destructive:
    'bg-error-600 text-white hover:bg-error-500 border border-transparent',
  outline:
    'bg-transparent border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-border-subtle)]',
}

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-9 px-4 text-sm gap-2',
  lg: 'h-10 px-5 text-sm gap-2',
  icon: 'h-9 w-9 p-0',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-[var(--radius-md)] transition-colors focus-ring disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
