import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules'

import '../styles/global.css'

import Head from 'next/head'
import Script from 'next/script'
SwiperCore.use([Navigation])

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
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
      </Head>
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
      <Component {...pageProps} />
    </>
  )
}
