import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* <meta name="robots" content="index,follow" /> */}
          {/* <meta httpEquiv="expires" content="10800" /> */}
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          {/* {this.helmetHeadComponents()} */}
          {/* {AppIcons()} */}
          <title>Digest Design Workshop | Real is good, interesting is better</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="http://s22.cnzz.com/z_stat.php?id=1273277019&web_id=1273277019" language="JavaScript" /> */}
        </body>
      </html>
    )
  }
}
