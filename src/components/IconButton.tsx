import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { MouseEvent, ReactNode } from 'react'

export const IconButton = (props: {
  onClick?: (ev: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  href?: string
  title?: string
  icon?: IconDefinition
  children?: ReactNode
}) => {
  const Element = props.href ? 'a' : 'button'
  return (
    <Element
      title={props.title}
      onClick={props.onClick}
      href={props.href}
      className={classNames(
        'cursor-pointer flex items-center justify-center font-bold font-mono rounded-lg px-1.5 py-1 transition border border-transparent text-sm w-8 h-7 hover:bg-white/10 hover:border-white/20 hover:text-primary-light'
      )}
    >
      {props.icon && (
        <FontAwesomeIcon
          icon={props.icon}
          className="text-base"
        ></FontAwesomeIcon>
      )}
      {props.children}
    </Element>
  )
}
