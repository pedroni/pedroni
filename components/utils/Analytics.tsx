import Script from 'next/script'

// TODO: https://willianjusten.com.br/como-configurar-o-google-analytics-no-nextjs-em-2021
// routing events

const Analytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TGW6ED8GWF"
      ></Script>
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
      ></Script>
    </>
  )
}

export default Analytics
