import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600"
}) {
  return (
    <button className='inline-block'>{children}</button>
  )
}

export default Button
