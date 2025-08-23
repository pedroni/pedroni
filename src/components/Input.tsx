import React, { FocusEvent, useEffect, useRef, useState } from 'react'
import styles from './Input.module.css'

const Input = ({ label, name, ...props }) => {
  const [active, setActive] = useState(props.defaultValue ? true : false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onFocus = () => setActive(true)
  const onBlur = (ev: FocusEvent<HTMLInputElement>) => {
    ev.target.value.trim() ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    if (props.autoFocus) {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }, [inputRef, props.autoFocus])

  return (
    <div className={`${styles.inputWrapper} ${active ? styles.active : ''}`}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={`${styles.input} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/90`}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        id={name}
        name={name}
        {...props}
      />
    </div>
  )
}

export default Input
