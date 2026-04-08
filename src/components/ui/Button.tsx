import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      default: 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',
      outline: 'border border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800',
      ghost: 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
    }
    
    const sizes = {
      default: 'h-10 px-5 py-2',
      sm: 'h-8 px-3 text-sm',
      lg: 'h-12 px-8 text-lg',
      icon: 'h-10 w-10',
    }

    const classes = cn(baseStyles, variants[variant], sizes[size], className)

    if (asChild && typeof props.children === 'object') {
      return (
        <Link href={props.children?.props?.href || '#'} className={classes}>
          {props.children}
        </Link>
      )
    }

    return (
      <button className={classes} ref={ref} {...props} />
    )
  }
)

Button.displayName = 'Button'
