import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from "next/document"
import { ServerStyleSheet } from "styled-components"
import { GA_TRACKING_ID } from "../lib/gtag"

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style>{`
            body {
              background-color: #fff;
              margin: 0;
            }
          `}</style>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://css.tito.io/v1.1"
          />
          <script src="https://js.tito.io/v1" async />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
