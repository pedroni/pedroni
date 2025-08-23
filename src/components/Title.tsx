import React from 'react'
import styles from './Title.module.css'

const Title = ({ subTitle, title, direction = 'left' }) => {
  return (
    <div
      className={`${styles.titleWrapper} ${styles.primary} ${styles[direction]}`}
    >
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default Title
