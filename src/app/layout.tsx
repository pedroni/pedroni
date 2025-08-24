import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { NextIntlClientProvider } from 'next-intl'
import { Crimson_Pro, JetBrains_Mono, Quicksand } from 'next/font/google'
import Script from 'next/script'
import { ReactNode } from 'react'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { routing } from '../i18n/routing'
import './global.css'

// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Navigation])
config.autoAddCss = false

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin']
})

const serif = Crimson_Pro({
  variable: '--font-serif',
  subsets: ['latin']
})

const sans = Quicksand({
  variable: '--font-sans',
  subsets: ['latin']
})

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

// This default export is required in a new `pages/_app.js` file.
export default function Layout(props: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
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

        <meta name="theme-color" content="#000000" />
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
        <NextIntlClientProvider>
          <div className="min-h-screen z-[1] relative max-w-full flex flex-col">
            <Header></Header>
            <div className="grow pt-32"> {props.children}</div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
