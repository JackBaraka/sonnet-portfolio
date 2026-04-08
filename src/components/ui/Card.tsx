import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900',
        hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        className
      )}
      {...props}
    />
  )
)

Card.displayName = 'Card'
