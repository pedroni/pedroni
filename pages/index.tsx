import { useEffect, useRef, useState } from 'react'
import Rellax from 'rellax'
import HomeAbout from '../components/HomeAbout'
import HomeBanner from '../components/HomeBanner'
import HomeContact from '../components/HomeContact'
import HomeServices from '../components/HomeServices'
import HomeSkills from '../components/HomeSkills'
import Layout from '../components/Layout'
import useMobile from '../hooks/useMobile'

const Home = () => {
  const bannerAnchorRef = useRef()
  const aboutAnchorRef = useRef()
  const skillsAnchorRef = useRef()
  const servicesAnchorRef = useRef()
  const contactAnchorRef = useRef()

  const [nav, setNav] = useState([])
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

  useEffect(() => {
    setNav([
      {
        label: 'Início',
        ref: bannerAnchorRef
      },
      {
        label: 'Sobre',
        ref: aboutAnchorRef
      },
      {
        label: 'Conhecimentos',
        ref: skillsAnchorRef
      },
      {
        label: 'Serviços',
        ref: servicesAnchorRef
      },
      {
        label: 'Contato',
        ref: contactAnchorRef
      }
    ])
  }, [])
  return (
    <Layout nav={nav}>
      <div id="bannerAnchor" ref={bannerAnchorRef}>
        <HomeBanner scrollToRef={aboutAnchorRef} />
      </div>
      <div
        className="homeRellax"
        data-rellax-speed="-2"
        id="aboutAnchor"
        ref={aboutAnchorRef}
      >
        <HomeAbout onContact={() => scrollTo(contactAnchorRef.current)} />
      </div>
      <div id="skillsAnchor" ref={skillsAnchorRef}>
        <HomeSkills
          style={{
            marginTop: isMobile ? 16 : 64
          }}
        />
      </div>
      <div
        className="homeRellax"
        data-rellax-speed="2"
        id="servicesAnchor"
        ref={servicesAnchorRef}
      >
        <HomeServices
          style={{
            marginTop: isMobile ? 16 : 64
          }}
          onContact={() => scrollTo(contactAnchorRef.current)}
        />
      </div>
      <div id="contactAnchor" ref={contactAnchorRef}>
        <HomeContact
          style={{
            marginTop: isMobile ? 16 : 64
          }}
        />
      </div>
    </Layout>
  )
}

export default Home
