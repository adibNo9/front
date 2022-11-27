import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { getDirection } from '@utils/get-direction'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__

    return (
      <Html className="h-full w-full flex m-0" dir={getDirection(locale)}>
        <Head />
        <body className="h-full w-full flex m-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
