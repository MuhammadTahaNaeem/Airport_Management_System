import React from "react";

const Alert = ({ type = "info", title, message, onClose }) => {
  const typeStyles = {
    success: {
      bg: "bg-green-50",
      border: "border-l-4 border-green-500",
      icon: "✅",
      title: "text-green-800",
      message: "text-green-700",
    },
    error: {
      bg: "bg-red-50",
      border: "border-l-4 border-red-500",
      icon: "❌",
      title: "text-red-800",
      message: "text-red-700",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-l-4 border-yellow-500",
      icon: "⚠️",
      title: "text-yellow-800",
      message: "text-yellow-700",
    },
    info: {
      bg: "bg-blue-50",
      border: "border-l-4 border-blue-500",
      icon: "ℹ️",
      title: "text-blue-800",
      message: "text-blue-700",
    },
  };

  const style = typeStyles[type];

  return (
    <div className={`${style.bg} ${style.border} rounded-lg p-4 flex items-start justify-between gap-4`}>
      <div className="flex items-start gap-3">
        <span className="text-xl">{style.icon}</span>
        <div>
          {title && <p className={`font-semibold ${style.title}`}>{title}</p>}
          {message && <p className={`text-sm ${style.message} mt-1`}>{message}</p>}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 font-bold"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
