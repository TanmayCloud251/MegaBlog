import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-indigo-600",
    textColor = "text-white",
    className = '',
    ...props
}) {
  return (
    <button 
    type={type}
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:opacity-90 active:scale-95 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 outline-none ${bgColor} ${textColor} ${className}`} 
    {...props}
    >
        {children}
    </button>
  )
}

export default Button
