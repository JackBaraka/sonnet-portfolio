import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900',
      secondary: 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100',
      outline: 'border border-neutral-300 dark:border-neutral-600',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium',
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
