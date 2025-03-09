'use client'
import React from 'react'
import clsx from 'clsx'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;  // Fixed spelling
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,  // Fixed spelling
  onClick,
  secondary,
  danger,
  disabled
}) => {
  return (
    <button
    onClick={onClick} 
    type={type}
    disabled={disabled}
    className={clsx(`
        flex justify-center rounded-md px-2 py-2 
        font-semibold text-sm focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2       
        `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? 'text-gray-900': 'text-white',
        danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
        !secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600'
      )}
    >
      {children}
    </button>
  )
}

export default Button