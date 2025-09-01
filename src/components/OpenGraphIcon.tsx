export default function OpenGraphIcon(props: {
  style?: React.CSSProperties
  iconPath: string | string[]
}) {
  return (
    <svg
      style={{
        boxSizing: 'content-box',
        display: 'flex',
        height: 16,
        width: 16,
        overflow: 'visible',
        ...props.style
      }}
    >
      <path
        fill="white"
        d={
          Array.isArray(props.iconPath)
            ? props.iconPath.join(' ')
            : props.iconPath
        }
      ></path>
    </svg>
  )
}
