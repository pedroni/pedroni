import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialButton } from './SocialButton'
import { Logo } from './Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="-z-10 relative">
      <div className="w-full h-screen pointer-events-none absolute left-0 bottom-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="relative max-w-5xl px-4 xl:px-20 border-t border-white/15 mt-20 py-4 mx-auto flex items-center justify-between">
        <div className="flex font-mono text-xs items-center gap-1">
          <Link
            href="/"
            className="w-14 mr-0 px-4 -mx-4 grayscale opacity-70 hover:opacity-100 hover:grayscale-0"
          >
            <Logo></Logo>
          </Link>
          <span>
            <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
          </span>
          <span>{new Date().getFullYear()}</span>
          <span className="block ml-4 pl-4 border-l border-l-white/20">
            pedroni.dev
          </span>
        </div>
        <div>
          <SocialButton
            href="https://www.linkedin.com/in/lucaspedroni/"
            icon={faLinkedin}
          ></SocialButton>
          <SocialButton
            href="https://github.com/pedroni"
            icon={faGithub}
          ></SocialButton>
        </div>
      </div>
      <div className="relative h-2 w-full bg-gradient-to-br from-primary-light to-primary-dark"></div>
    </footer>
  )
}

export default Footer
