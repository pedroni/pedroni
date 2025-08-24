'use client'
import { useCallback, useEffect, useState } from 'react'

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = useCallback(
    () => setIsMobile(window.matchMedia('(max-width: 1024px)').matches),
    []
  )

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])
  return isMobile
}
