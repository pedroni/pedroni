import React from 'react'
import styles from './Title.module.css'

/**
 * color primary, secondary
 */
const Title = ({ subTitle, title, color = 'primary', direction = 'left' }) => {
  return (
    <div className={`${styles.titleWrapper} ${styles[color]} ${styles[direction]}`}>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default Title