'use client'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export default function Clock() {
  const [now, setNow] = useState<Date>()
  useEffect(() => {
    setNow(new Date())
    setInterval(() => {
      setNow(new Date())
    }, 1000)
  }, [])

  return (
    <div
      className="text-primary-light text-[16vw] text-center flex justify-center items-center mx-auto font-mono h-[calc(100vh_-_380px)]"
      style={{
        textShadow: '0 0 1000px white, 0 0 2px white'
      }}
    >
      {now && <div>{dayjs(now).format('HH:mm:ss')}</div>}
    </div>
  )
}
