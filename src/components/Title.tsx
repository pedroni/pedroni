import React from 'react'
import styles from './Title.module.css'
import classNames from 'classnames'

const Title = ({ subTitle, title, size = undefined, direction = 'left' }) => {
  return (
    <div
      className={`${styles.titleWrapper} ${styles.primary} ${styles[direction]}`}
    >
      <div className={classNames('hidden font-mono font-extralight uppercase text-white/50 lg:block tracking-wider', {
        'text-sm': size === 'sm',
        'text-base': size !== 'sm',
      })}>
        {subTitle}
      </div>
      <div className={classNames('relative font-serif text-primary pb-3', {
        'text-xl': size === 'sm',
        'text-3xl': size !== 'sm',

      })}>
        {title}

        <div className={classNames('absolute h-0.5 w-14 bg-primary bottom-0', {
          'left-0': direction !== 'right',
          'right-0': direction === 'right',
        })}></div>
        <div className="absolute h-px w-full bg-white/15 bottom-0 left-0"></div>
      </div>
    </div>
  )
}

export default Title
