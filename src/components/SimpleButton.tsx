import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { MouseEvent, ReactNode } from 'react'

export const SimpleButton = (props: {
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void
  icon?: IconDefinition
  children?: ReactNode
}) => {
  return (
    <button
      onClick={props.onClick}
      className={classNames(
        'cursor-pointer flex gap-2 items-center justify-center text-white font-mono rounded-lg px-3 py-1.5 transition border text-sm bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/30 hover:text-primary-light'
      )}
    >
      {props.icon && (
        <FontAwesomeIcon
          icon={props.icon}
          className="text-base"
        ></FontAwesomeIcon>
      )}
      {props.children}
    </button>
  )
}
