import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, className = '', ...props }, ref) => (
  <div>
    <input
      ref={ref}
      className={`w-full px-4 py-2.5 text-sm rounded-lg border 
        ${error 
          ? 'border-error-500 focus:border-error-500' 
          : 'border-gray-200 focus:border-brand-500'
        } ${className}`}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-error-500">{error}</p>}
  </div>
));

Input.displayName = 'Input';

export default Input;
