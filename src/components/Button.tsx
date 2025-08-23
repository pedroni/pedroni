import React from 'react'
import classNames from 'classnames'

const Button = ({ className = '', ...props }) => {
  return (
    <button
      className={classNames(
        `
      cursor-pointer
      relative
      px-6 py-3
      border
      border-primary/80
      shadow-transparent
      shadow-lg
      bg-[url(/img/bg-pattern.jpg)]
      bg-black
      rounded-br-2xl
      rounded-tl-2xl
      transition
      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/90
      overflow-clip
      hover:-translate-y-1
      active:translate-y-0
      hover:shadow-primary/50
      hover:text-white
      `,
        className
      )}
      {...props}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-white/10"></div>
      <span className="relative text-nowrap"> {props.children}</span>
    </button>
    // <button
    //   className={`${styles.button} ${styles[color]} outline outline-white/20 border-2 border-black/50 rounded-md focus:outline-primary focus:outline-2 ${className ?? ''}`}
    //   {...props}
    // >
    //   {props.children}
    // </button>
  )
}

export default Button
