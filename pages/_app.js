import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

import "../styles/global.scss";

import Head from "next/head";

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
        <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/img/favicon/mstile-144x144.png" />
        <meta name="theme-color" content="#000000" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-121297636-1"
        ></script>
        <script src="/js/google.analyics.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
