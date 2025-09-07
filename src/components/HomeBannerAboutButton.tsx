'use client'

import React from 'react'
import Button from './Button'
import { scrollTo } from '../helpers'

interface HomeBannerAboutButtonProps {
  className?: string
  children: React.ReactNode
}

const HomeBannerAboutButton: React.FC<HomeBannerAboutButtonProps> = ({
  className,
  children
}) => {
  const handleClick = () => {
    scrollTo('#about')
  }

  return (
    <Button className={className} onClick={handleClick}>
      {children}
    </Button>
  )
}

export default HomeBannerAboutButton
