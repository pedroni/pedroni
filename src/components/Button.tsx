import React from 'react'
import styles from './Button.module.css'

const Button = ({ color = 'primary', className = '', ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[color]} outline outline-white/20 border-2 border-black/50 rounded-md focus:outline-primary focus:outline-2 ${className ?? ''}`}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button
