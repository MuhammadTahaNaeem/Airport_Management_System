import React from "react";

const Spinner = ({ size = "md", color = "blue" }) => {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  const colors = {
    blue: "border-blue-600 border-t-blue-200",
    white: "border-white border-t-white/30",
    indigo: "border-indigo-600 border-t-indigo-200",
  };

  return (
    <div
      className={`${sizes[size]} ${colors[color]} rounded-full animate-spin`}
    />
  );
};

export default Spinner;
