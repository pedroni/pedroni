import React from 'react'
import styles from './Button.module.css'

const Button = ({ color = 'primary', ...props }) => {
  return (
    <button className={`${styles.button} ${styles[color]} ${props.className ?? ''}`} {...props}>
      {props.children}
    </button>
  )
}

export default Button