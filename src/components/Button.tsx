import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-tw-crimson/50 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-tw-crimson text-white hover:bg-tw-crimson/90",
            secondary: "bg-tw-teal text-white hover:bg-tw-teal/90",
            outline: "border-2 border-white text-white hover:bg-white hover:text-tw-black",
            text: "text-tw-black hover:text-tw-crimson underline-offset-4 hover:underline"
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-6 text-base",
            lg: "h-14 px-8 text-lg"
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
