'use client'

import React from 'react'
import { scrollTo } from '../helpers'

interface HomeBannerScrollImgProps {
  className?: string
}

const HomeBannerScrollImg: React.FC<HomeBannerScrollImgProps> = ({ className }) => {
  const handleClick = () => {
    scrollTo('#about')
  }

  return (
    <img
      className={className}
      onClick={handleClick}
      src="/icon/scroll-down.svg"
      role="button"
      alt="Scroll down"
      style={{ cursor: 'pointer' }}
    />
  )
}

export default HomeBannerScrollImg