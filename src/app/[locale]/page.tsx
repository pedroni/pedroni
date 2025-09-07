'use server'
import HomeAbout from '../../components/HomeAbout'
import HomeBanner from '../../components/HomeBanner'
import HomeContact from '../../components/HomeContact'
import HomeServices from '../../components/HomeServices'
import HomeSkills from '../../components/HomeSkills'
import HomeRellax from './HomeRellax'

const Home = () => {
  return (
    <>
      <HomeRellax></HomeRellax>
      <div id="banner">
        <HomeBanner />
      </div>
      <div className="homeRellax" data-rellax-speed="-2" id="about">
        <HomeAbout />
      </div>
      <div id="skills" className="pt-4 lg:pt-16">
        <HomeSkills />
      </div>
      <div className="homeRellax" data-rellax-speed="2" id="services">
        <HomeServices />
      </div>
      <div id="contact" className="pt-4 mb-20 lg:pt-16">
        <HomeContact />
      </div>
    </>
  )
}

export default Home
