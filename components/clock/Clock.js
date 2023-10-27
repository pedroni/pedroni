import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export default function Clock() {
  const [now, setNow] = useState()
  useEffect(() => {
    setInterval(() => {
      setNow(new Date())
    }, 1000)
  }, [])

  return (
    <div
      style={{
        height: 'calc(100vh - 380px)',
        color: 'var(--color-primary-light)',
        fontSize: '16vw',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        fontWeight: '900',
        fontFamily: 'monospace',
        
        textShadow: '0 0 1000px white, 0 0 2px white'
      }}
    >
      <div>{dayjs(now).format('HH:mm:ss')}</div>
    </div>
  )
}
