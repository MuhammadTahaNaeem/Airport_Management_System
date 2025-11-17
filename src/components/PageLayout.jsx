import React from "react";

const PageLayout = ({
  title,
  description,
  icon = "📄",
  children,
  className = "",
}) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <span className="text-5xl">{icon}</span>
            {title}
          </h1>
          {description && (
            <p className="text-gray-600 font-medium text-lg">{description}</p>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
