import React, { ReactNode } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules'
import { Crimson_Pro, JetBrains_Mono, Quicksand } from 'next/font/google'
import './global.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Script from 'next/script'
import Footer from '../components/Footer'
import Header from '../components/Header'
// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Navigation])

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin']
})

const serif = Crimson_Pro({
  variable: '--font-serif',
  subsets: ['latin']
})

const sans = Quicksand({
  variable: '--font-sans'
})

// This default export is required in a new `pages/_app.js` file.
export default function Layout(props: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/img/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lucas Pedroni, desenvolvedor full stack</title>
        <meta
          name="description"
          content="Dando vida a ideias. Desenvolvimento de sites, aplicativos e sistemas sob medida. Tecnologias utilizadas: PHP; Laravel; JavaScript; Angular; Ionic; React e muito mais."
        />

        <meta name="msapplication-TileColor" content="#7f20ac" />
        <meta
          name="msapplication-TileImage"
          content="/img/favicon/mstile-144x144.png"
        />
        <meta name="theme-color" content="#7f20ac" />
        <meta property="og:image:url" content="https://pedroni.dev/image.jpg" />
      </head>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TGW6ED8GWF"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TGW6ED8GWF');
            `
        }}
      />
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} tracking-wider font-light font-sans bg-[url(/img/bg-pattern.jpg)] bg-repeat`}
      >
        <div className="min-h-screen z-[1] relative max-w-full flex flex-col">
          <Header></Header>
          <div className="grow pt-32"> {props.children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
