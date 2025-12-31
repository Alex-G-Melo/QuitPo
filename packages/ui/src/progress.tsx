import * as React from 'react';
import { cn } from './lib/utils';

/* ============================================
 * Progress Component
 * ============================================
 * Design: Pill shape with gradient fill
 * Used for streak progress, achievements, etc.
 * ============================================ */

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: 'primary' | 'secondary' | 'success' | 'gradient';
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, variant = 'gradient', ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className={cn(
          'relative h-3 w-full overflow-hidden rounded-full bg-muted',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500',
            {
              primary: 'bg-primary',
              secondary: 'bg-secondary',
              success: 'bg-success',
              gradient: 'bg-gradient-to-r from-primary to-secondary',
            }[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress };
