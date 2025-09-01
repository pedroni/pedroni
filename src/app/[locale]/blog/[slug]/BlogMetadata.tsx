import { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'

export default function BlogMetadata(props: {
  icon: IconDefinition
  children: ReactNode
}) {
  return (
    <div className="font-mono text-sm font-light mt-2 not-print:opacity-80 flex flex-nowrap text-nowrap items-center gap-1">
      <FontAwesomeIcon fixedWidth icon={props.icon}></FontAwesomeIcon>
      <span>{props.children}</span>
    </div>
  )
}
