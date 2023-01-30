import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BYH2FCDETR"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-BYH2FCDETR');
        </script>
        <title>Likelion EWHA 10th</title>
        <meta name="theme-color" content="#00664F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="이화여대 멋쟁이사자처럼 10기 전시사이트"
        />
        <meta
          name="keywords"
          content="이화여대,멋쟁이사자처럼,웹,개발자,프론트엔드,백엔드,개발,컴공"
        />
        <meta
          name="og:site_name"
          content="이화여대 멋쟁이사자처럼 10기 전시사이트"
        />
        <meta name="og:title" content="Likelion EWHA 10th" />
        <meta property="twitter:title" content="Likelion EWHA 10th" />

        <meta
          name="og:description"
          content="이화여대 멋쟁이사자처럼 10기의 프로젝트를 만나보세요."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://likelion-ewha-10th.vercel.app" />
        <meta
          property="og:image"
          content="https://likelion-ewha-10th.vercel.app/default.png"
        />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
