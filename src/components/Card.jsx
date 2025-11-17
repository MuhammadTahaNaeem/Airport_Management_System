import React from "react";

const Card = ({
  children,
  className = "",
  shadow = "lg",
  hover = true,
  noBorder = false,
  borderColor = "blue",
}) => {
  const shadowMap = {
    sm: "shadow-soft",
    md: "shadow-medium",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const borderColorMap = {
    blue: "border-blue-600",
    indigo: "border-indigo-600",
    green: "border-green-600",
    red: "border-red-600",
    purple: "border-purple-600",
  };

  return (
    <div
      className={`
        bg-white rounded-2xl ${shadowMap[shadow]} 
        ${hover ? "hover:shadow-2xl transition-all duration-300" : ""}
        ${!noBorder ? `border-l-4 ${borderColorMap[borderColor]}` : ""}
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
