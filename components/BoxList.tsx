import React, { useEffect, useState } from 'react'
import styles from './BoxList.module.css'

const BoxList = ({ list, onItemSelected = key => {}, activeItem }) => {
  const _onItemSelected = key => {
    setActiveItem(key)
    onItemSelected(key)
  }

  const [_activeItem, setActiveItem] = useState(activeItem)

  useEffect(() => {
    if (!_activeItem) {
      setActiveItem(list[0]?.key)
    }
  })

  useEffect(() => {
    if (activeItem !== _activeItem) {
      setActiveItem(activeItem)
      onItemSelected(activeItem)
    }
  }, [activeItem])

  return (
    <ul className={styles.boxList}>
      {list.map(({ key, label }) => (
        <li
          tabIndex={0}
          role="button"
          onClick={() => _onItemSelected({ key, label })}
          key={key}
          className={`${styles.boxListItem} ${_activeItem?.key === key ? styles.active : ''}`}>
          {label}
        </li>
      ))}
    </ul>
  )
}

export default BoxList