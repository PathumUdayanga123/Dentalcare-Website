import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-standard font-medium transition-all duration-200 focus:outline-none';
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-blue-500 shadow-sm',
    secondary: 'bg-secondary text-primary hover:bg-blue-100',
    outline: 'border border-primary text-primary hover:bg-secondary'
  };
  const sizeStyles = {
    small: 'text-sm py-1.5 px-3',
    medium: 'text-base py-2 px-5',
    large: 'text-lg py-3 px-8'
  };
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';
  return <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`}>
      {children}
    </button>;
};
export default Button;