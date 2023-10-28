import classNames from 'classnames'

const Box = ({
  aside,
  children,
  direction = 'top left',
  asideProps = {},
  boxProps = {},
  centerProps = {},
  bottomProps = {},
  bottom = '',
  ...props
}) => {
  return (
    <section
      className={classNames(
        'relative mx-auto w-[var(--container-width)] max-w-full flex justify-center',
        {
          'xl:justify-end': direction.includes('right')
        }
      )}
      {...props}
    >
      <div
        className={classNames(
          'text-white text-opacity-70 w-full p-[calc(var(--box-padding)_*_2)] md:shadow-lg md:bg-[#101010] xl:w-[80%] xl:flex xl:flex-col xl:p-[var(--box-padding)]',
          {
            'rounded-tr-3xl':
              direction.includes('top') && direction.includes('right'),
            'rounded-tl-3xl':
              direction.includes('top') && direction.includes('left'),
            'rounded-br-3xl':
              direction.includes('bottom') && direction.includes('right'),
            'rounded-bl-3xl':
              direction.includes('bottom') && direction.includes('left')
          }
        )}
        {...boxProps}
      >
        <div
          className={classNames('flex flex-wrap xl:flex-nowrap ', {
            'xl:flex-row-reverse': direction.includes('right')
          })}
        >
          {aside && (
            <div
              className="w-full shrink-0 text-left text-base leading-7 xl:w-48 xl:text-right [& img]:max-w-none"
              {...asideProps}
            >
              {aside}
            </div>
          )}

          <div
            className={classNames('w-full xl:w-auto', {
              'text-right xl:pr-16': direction.includes('right'),
              'xl:pl-16': !direction.includes('right')
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
