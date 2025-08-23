'use client'
import { useEffect, useRef } from 'react'
import Rellax from 'rellax'
import HomeAbout from '../../components/HomeAbout'
import HomeBanner from '../../components/HomeBanner'
import HomeContact from '../../components/HomeContact'
import HomeServices from '../../components/HomeServices'
import HomeSkills from '../../components/HomeSkills'
import useMobile from '../../hooks/useMobile'

const Home = () => {
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

  return (
    <>
      <div id="banner">
        <HomeBanner />
      </div>
      <div className="homeRellax" data-rellax-speed="-2" id="about">
        <HomeAbout />
      </div>
      <div id="skills" className="pt-4 xl:pt-16">
        <HomeSkills />
      </div>
      <div className="homeRellax" data-rellax-speed="2" id="services">
        <HomeServices />
      </div>
      <div id="contact" className="pt-4 mb-20 xl:pt-16">
        <HomeContact />
      </div>
    </>
  )
}

export default Home
