import classNames from 'classnames'
import { ReactNode } from 'react'

const Box = ({
  aside = undefined,
  children,
  direction = 'top left',
  asideProps = {},
  boxProps = {},
  centerProps = {},
  bottomProps = {},
  bottom = '',
  className = '',
  ...props
}: {
  bottom?: ReactNode
  children?: ReactNode
  aside?: ReactNode
  direction?: string
  asideProps?: object
  boxProps?: object
  centerProps?: object
  bottomProps?: object
  className?: string
  [key: string]: any
}) => {
  return (
    <section
      className={classNames(
        'relative mx-auto w-[var(--container-width)] max-w-full flex justify-center [&_a]:font-semibold [&_a]:text-primary',
        {
          'lg:justify-end': direction.includes('right')
        },
        className
      )}
      {...props}
    >
      <div
        className={classNames(
          'w-full p-[calc(var(--box-padding)_*_2)]  md:shadow-lg lg:w-[80%] lg:flex lg:flex-col lg:p-[var(--box-padding)]',
          {
            'rounded-tr-3xl':
              direction.includes('top') && direction.includes('right'),
            'rounded-tl-3xl':
              direction.includes('top') && direction.includes('left'),
            'rounded-br-3xl':
              direction.includes('bottom') && direction.includes('right'),
            'rounded-bl-3xl':
              direction.includes('bottom') && direction.includes('left')
          },
          'backdrop-blur-lg bg-white/5  border-[2] border-black/50  outline-1 outline-white/10'
        )}
        {...boxProps}
      >
        <div
          className={classNames('flex flex-wrap lg:flex-nowrap ', {
            'lg:flex-row-reverse': direction.includes('right')
          })}
        >
          {aside && (
            <div
              className="w-full shrink-0 text-left text-base leading-7 lg:w-48 lg:text-right [& img]:max-w-none"
              {...asideProps}
            >
              {aside}
            </div>
          )}

          <div
            className={classNames('w-full flex-grow lg:w-auto', {
              'lg:text-right lg:pr-16': direction.includes('right'),
              'lg:pl-16': !direction.includes('right')
            })}
            {...centerProps}
          >
            {children}
          </div>
        </div>
        {bottom && (
          <div className="max-w-full w-full" {...bottomProps}>
            {bottom}
          </div>
        )}
      </div>
    </section>
  )
}

export default Box
