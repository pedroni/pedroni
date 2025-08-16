import classNames from 'classnames'
import { ReactNode } from 'react'

const SimpleBox = (props: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={classNames(
        'bg-black/60 border-white/10 border shadow-2xl  p-4 rounded-3xl lg:p-10',

        props.className
      )}
    >
      {props.children}
    </div>
  )
}

export default SimpleBox
