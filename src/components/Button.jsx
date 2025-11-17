import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 transform hover:-translate-y-1 active:scale-95";

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 shadow-md",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-md",
    success: "bg-green-600 text-white hover:bg-green-700 shadow-md",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
