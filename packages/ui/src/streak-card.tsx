import * as React from 'react';
import { cn } from './lib/utils';
import { Progress } from './progress';

/* ============================================
 * StreakCard Component
 * ============================================
 * QuitPo-specific component for displaying
 * the user's current streak and progress
 * toward the 90-day rewiring goal.
 * ============================================ */

export interface StreakCardProps extends React.HTMLAttributes<HTMLDivElement> {
  days: number;
  targetDays?: number;
  label?: string;
}

const StreakCard = React.forwardRef<HTMLDivElement, StreakCardProps>(
  ({ className, days, targetDays = 90, label = 'Day Streak', ...props }, ref) => {
    const percentage = Math.min((days / targetDays) * 100, 100);

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl bg-gradient-to-br from-primary to-secondary p-6 text-white',
          'shadow-md',
          className
        )}
        {...props}
      >
        <div className="text-center">
          <div className="font-heading text-5xl font-bold leading-none">{days}</div>
          <div className="mt-1 text-sm opacity-90">{label}</div>
        </div>

        <div className="mt-4">
          <Progress
            value={days}
            max={targetDays}
            variant="primary"
            className="h-2 bg-white/30"
          />
          <div className="mt-2 flex justify-between text-xs opacity-75">
            <span>Day 1</span>
            <span>Day {targetDays}</span>
          </div>
        </div>
      </div>
    );
  }
);

StreakCard.displayName = 'StreakCard';

export { StreakCard };
