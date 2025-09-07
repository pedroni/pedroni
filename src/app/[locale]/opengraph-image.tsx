import { ImageResponse } from 'next/og'
import { Logo } from '../../components/Logo'
import { getUrl } from '../../helpers'

export const alt = 'Lucas Pedroni'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

export default async function Image() {
  let meSrc, nameSrc, crimsonPro, jetBrainsMono
  const mePath = 'img/banner/me.png'
  const namePath = 'img/banner/name@2x.png'
  const crimsonProPath = 'fonts/CrimsonPro-Bold.ttf'
  const jetBrainsMonoPath = 'fonts/JetBrainsMono-Regular.ttf'

  meSrc = await fetch(getUrl(mePath)).then(res => res.arrayBuffer())
  nameSrc = await fetch(getUrl(namePath)).then(res => res.arrayBuffer())

  crimsonPro = await fetch(getUrl(crimsonProPath)).then(res =>
    res.arrayBuffer()
  )
  jetBrainsMono = await fetch(getUrl(jetBrainsMonoPath)).then(res =>
    res.arrayBuffer()
  )

  return new ImageResponse(
    (
      <div
        style={{
          background: '#100806',
          color: '#ff8904',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={meSrc}
          alt="Lucas Pedroni"
          style={{
            width: 500,
            opacity: 0.5,
            position: 'absolute',
            bottom: 0,
            left: 24
          }}
        />
        <Logo
          style={{ position: 'absolute', left: 36, bottom: 36 }}
          width={128 / 1.3}
          height={104 / 1.3}
        ></Logo>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            right: 88,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={nameSrc}
            alt="Lucas Pedroni Name"
            style={{
              width: 700
            }}
          ></img>
          <span
            style={{
              fontFamily: 'JetBrains Mono',
              fontSize: 24,
              letterSpacing: 2,
              marginTop: 32
            }}
          >
            Software Engineer
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 8,
            width: '100%',
            background: 'linear-gradient(to bottom right, #ff8904, #cc6d03)'
          }}
        ></div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'JetBrains Mono',
          data: jetBrainsMono,
          style: 'normal',
          weight: 400
        },
        {
          name: 'Crimson Pro',
          data: crimsonPro,
          style: 'normal',
          weight: 400
        }
      ]
    }
  )
}
