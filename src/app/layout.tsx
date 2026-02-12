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
import { getLocale, getTranslations, setRequestLocale } from 'next-intl/server'
import { Metadata } from 'next'
import { calculateYears, getUrl } from '../helpers'

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

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params
  setRequestLocale(locale)

  const t = await getTranslations('SEO')

  return {
    title: t('siteTitle'),
    metadataBase: new URL(getUrl()),
    description: t('siteDescription', {
      years: calculateYears('2017-03-01')
    })
  }
}

export default async function Layout(
  props: Readonly<{ params: Promise<{ locale: string }>; children: ReactNode }>
) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
        />

        <meta name="theme-color" content="#180808" />
        <meta name="msapplication-navbutton-color" content="#180808" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#180808" />
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
        className={`${sans.variable} ${serif.variable} ${mono.variable} tracking-wider  font-sans bg-[url(/img/bg-pattern.jpg)] bg-repeat`}
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
