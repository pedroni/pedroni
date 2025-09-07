import React from 'react'

const BoxContent = ({ children }) => {
  return (
    <div className="text-base leading-relaxed prose prose-invert max-w-full [&>div>p:first-child]:mt-0">
      {children}
    </div>
  )
}

export default BoxContent
