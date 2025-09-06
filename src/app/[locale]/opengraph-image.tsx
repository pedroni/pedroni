import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Logo } from '../../components/Logo'

export const dynamic = 'force-static';

export const alt = 'Lucas Pedroni'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

async function imageBase64(path: string) {
  const data = await readFile(join(process.cwd(), path), 'base64')
  const src = `data:image/png;base64,${data}`
  return src
}

export default async function Image() {
  const crimsonPro = await readFile(
    join(process.cwd(), 'fonts/CrimsonPro-Bold.ttf')
  )
  const jetBrainsMono = await readFile(
    join(process.cwd(), 'fonts/JetBrainsMono-Regular.ttf')
  )

  const meSrc = await imageBase64('public/img/banner/me.png')
  const nameSrc = await imageBase64('public/img/banner/name@2x.png')

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
