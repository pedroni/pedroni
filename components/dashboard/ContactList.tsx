import React, { useState } from 'react'
import styles from './ContactList.module.css'

const ContactList = ({ list, ...props }) => {
  const [opened, setOpened] = useState(null)
  return (
    <div className={styles.contactList}>
      {list.map((item, index) => (
        <div
          key={index}
          className={`${styles.contactListItem} ${opened === item._id && styles.opened}`}>
          <div className={styles.contactListHeader} onClick={() => setOpened(item._id)}>
            {item.email}
          </div>
          <div className={styles.contactListContent}>
            {item.messages.map((message, index) => (
              <div className={styles.contactListMessage} key={index}>
                <strong>
                  {message.name} |{' '}
                  <em>
                    {new Date(message.createdAt).toLocaleDateString()} às{' '}
                    {new Date(message.createdAt).toLocaleTimeString()}
                  </em>
                </strong>
                <p>{message.subject}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactList
