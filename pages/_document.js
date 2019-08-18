import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps({ renderPage, ...rest }) {
        const initialProps = await Document.getInitialProps({renderPage, ...rest})

        const sheet = new ServerStyleSheet();

        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );

        const styleTags = sheet.getStyleElement();

        return {
            ...page,
            ...initialProps,
            styleTags
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
};
