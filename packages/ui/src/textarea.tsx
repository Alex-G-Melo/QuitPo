import * as React from 'react';
import { cn } from './lib/utils';

/* ============================================
 * Textarea Component
 * ============================================
 * Design: Large rounded corners
 * No strong borders, subtle backgrounds
 * ============================================ */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          // Base styles
          'flex min-h-[120px] w-full rounded-xl px-5 py-4 text-base transition-all duration-200',
          'bg-input text-foreground placeholder:text-muted-foreground',
          'border-2 border-transparent',
          'resize-none',

          // Focus state
          'focus:border-ring focus:outline-hidden',
          'focus:shadow-sm',

          // Error state
          error && 'border-destructive focus:border-destructive',

          // Disabled state
          'disabled:cursor-not-allowed disabled:opacity-50',

          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
