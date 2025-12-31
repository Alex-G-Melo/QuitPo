import * as React from 'react';
import { cn } from './lib/utils';

/* ============================================
 * Button Component
 * ============================================
 * Design: Full pill shape (border-radius: 9999px)
 * Variants: primary, secondary, outline, ghost, destructive
 * Sizes: sm, md, lg
 * ============================================ */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200',
          'rounded-full focus-visible:outline-2 focus-visible:outline-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',

          // Variants
          {
            // Primary - Indigo gradient
            primary: [
              'bg-primary text-primary-foreground',
              'hover:bg-primary-hover',
              'focus-visible:outline-primary',
              'shadow-sm hover:shadow-md',
            ],
            // Secondary - Teal
            secondary: [
              'bg-secondary text-secondary-foreground',
              'hover:bg-secondary-hover',
              'focus-visible:outline-secondary',
              'shadow-sm hover:shadow-md',
            ],
            // Outline - Border only
            outline: [
              'border-2 border-primary bg-transparent text-primary',
              'hover:bg-primary hover:text-primary-foreground',
              'focus-visible:outline-primary',
            ],
            // Ghost - No border, subtle hover
            ghost: [
              'bg-transparent text-foreground',
              'hover:bg-muted',
              'focus-visible:outline-ring',
            ],
            // Destructive - Red
            destructive: [
              'bg-destructive text-destructive-foreground',
              'hover:bg-destructive/90',
              'focus-visible:outline-destructive',
              'shadow-sm hover:shadow-md',
            ],
          }[variant],

          // Sizes
          {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-13 px-8 text-lg',
          }[size],

          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
