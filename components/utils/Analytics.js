import Script from 'next/script'

// TODO: https://willianjusten.com.br/como-configurar-o-google-analytics-no-nextjs-em-2021
// routing events

const Analytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-121297636-1"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'UA-121297636-1')
  `
        }}
      ></Script>
    </>
  )
}

export default Analytics
