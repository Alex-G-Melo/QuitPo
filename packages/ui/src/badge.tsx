import * as React from 'react';
import { cn } from './lib/utils';

/* ============================================
 * Badge Component
 * ============================================
 * Design: Pill shape for tags and labels
 * Variants for different states
 * ============================================ */

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
          'transition-colors duration-200',

          // Variants
          {
            default: 'bg-primary text-primary-foreground',
            secondary: 'bg-secondary text-secondary-foreground',
            success: 'bg-success-soft text-success',
            warning: 'bg-warning-soft text-warning',
            destructive: 'bg-destructive/10 text-destructive',
            outline: 'border-2 border-current bg-transparent',
          }[variant],

          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
