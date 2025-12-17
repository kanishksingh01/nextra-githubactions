import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          :root {
            --border-color: #eaeaea;
          }
          
          .dark {
            --border-color: #404040;
          }
          
          .dark body {
            background-color: #111;
            color: #fff;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
