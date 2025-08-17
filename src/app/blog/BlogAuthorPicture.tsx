import classNames from 'classnames'

export default function BlogAuthorPicture(props: {
  className?: string
  size?: number
}) {
  return (
    <div
      className={classNames(
        'rounded-full shrink-0 p-0.5 border overflow-hidden shadow-lg transition border-primary-light shadow-primary-light/30  hover:shadow-primary-light/80',
        props.className
      )}
      style={{
        width: props.size || 80,
        height: props.size || 80,
      }}
    >
      <img
        src="/img/lucas-pedroni-profile.jpeg"
        className="rounded-full"
        alt="Lucas Pedroni Profile Picture"
      ></img>
    </div>
  )
}
