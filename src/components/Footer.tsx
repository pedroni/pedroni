import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  faCopyright
} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

const FooterButton = (props: { href: string; icon: IconDefinition }) => {
  return (
    <a
      href={props.href}
      className={classNames(
        'rounded-lg px-1.5 py-1 transition border border-transparent hover:bg-white/10 hover:border-white/20 hover:text-primary-light'
      )}
    >
      <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
    </a>
  )
}

const Footer = () => {
  return (
    <footer className="relative">
      <div className="max-w-5xl xl:px-20 border-t border-white/10 mt-20 py-4 mx-auto flex items-center justify-between">
        <div className="flex font-mono text-xs items-center gap-1">
          <img
            className="w-6 mr-3"
            src="/img/isotipo.svg"
            alt="Lucas Pedroni isotipo"
          />
          <span>
            <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
          </span>
          <span>{new Date().getFullYear()}</span>
        </div>
        <div>
          <FooterButton
            href="https://www.linkedin.com/in/lucaspedroni/"
            icon={faLinkedin}
          ></FooterButton>
          <FooterButton
            href="https://github.com/pedroni"
            icon={faGithub}
          ></FooterButton>
        </div>
      </div>
      <div className="h-2 w-full bg-gradient-to-br from-primary-light to-primary-dark"></div>
    </footer>
  )
}

export default Footer
