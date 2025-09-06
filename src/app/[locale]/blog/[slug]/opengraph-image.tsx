import {
  faCalendar,
  faClock,
  faUser
} from '@fortawesome/free-regular-svg-icons'
import { getTranslations } from 'next-intl/server'
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Logo } from '../../../../components/Logo'
import { getPostBySlug } from '../../../../lib/blog'
import OpenGraphIcon from '../../../../components/OpenGraphIcon'

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

export default async function Image(props: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await props.params

  const t = await getTranslations()

  const post = getPostBySlug(locale, slug)

  const crimsonPro = await readFile(
    join(process.cwd(), 'assets/CrimsonPro-Bold.ttf')
  )
  const jetBrainsMono = await readFile(
    join(process.cwd(), 'assets/JetBrainsMono-Regular.ttf')
  )

  const meSrc = await imageBase64('public/img/banner/me.png')

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
          justifyContent: 'flex-end'
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
            textAlign: 'right',
            width: 850,
            padding: 88,
            justifyContent: 'flex-end'
          }}
        >
          <div
            style={{
              fontFamily: 'Crimson Pro',
              fontSize: 58
            }}
          >
            {post.title}
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 18,
              justifyContent: 'flex-end',
              gap: 24,
              fontSize: 18,
              letterSpacing: 2,
              color: 'white',
              opacity: 0.8,
              textAlign: 'right',
              width: '100%'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <OpenGraphIcon
                style={{ marginRight: 12 }}
                iconPath={faUser.icon[4]}
              ></OpenGraphIcon>
              <span>Lucas Pedroni</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <OpenGraphIcon
                style={{ marginRight: 12 }}
                iconPath={faCalendar.icon[4]}
              ></OpenGraphIcon>
              <span>{new Date(post.date).toLocaleDateString(locale)}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <OpenGraphIcon
                style={{ marginRight: 12 }}
                iconPath={faClock.icon[4]}
              ></OpenGraphIcon>

              <span>
                {post.readingTime} {t('Words.minutes')}
              </span>
            </div>
          </div>
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
