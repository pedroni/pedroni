'use client'

import Rellax from 'rellax'
import useMobile from '../../hooks/useMobile'
import { useEffect, useRef } from 'react'

export default function HomeRellax() {
  const rellax = useRef(null)
  const isMobile = useMobile()

  useEffect(() => {
    if (!isMobile && !rellax.current) {
      rellax.current = new Rellax('.homeRellax', {
        center: true
      })
    } else {
      rellax.current?.destroy()
      rellax.current = null
    }
  }, [isMobile])

  return <></>
}
