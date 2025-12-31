import * as React from 'react';
import { cn } from './lib/utils';

/* ============================================
 * Input Component
 * ============================================
 * Design: Full pill shape (border-radius: 9999px)
 * No strong borders, subtle backgrounds
 * ============================================ */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          // Base styles
          'flex h-11 w-full rounded-full px-5 text-base transition-all duration-200',
          'bg-input text-foreground placeholder:text-muted-foreground',
          'border-2 border-transparent',

          // Focus state
          'focus:border-ring focus:outline-hidden',
          'focus:shadow-sm',

          // Error state
          error && 'border-destructive focus:border-destructive',

          // Disabled state
          'disabled:cursor-not-allowed disabled:opacity-50',

          // File input styles
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',

          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
