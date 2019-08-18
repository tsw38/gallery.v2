import Head from 'next/head'

export default ({title}) => (
    <Head>
        <title>{title || 'Home'} | Tyler Scott | Gallery</title>
        <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
        />
    </Head>
)