import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'

import Head from 'common/Head'
import Layout from 'common/Layout';
import withReduxStore from 'utilities/withStore';

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props;
        const className = this.props.router.pathname.split('/')[1].toLowerCase();

        return (
            <Provider store={reduxStore}>
                <Head {...pageProps} />
                <Layout
                    className={className && `Page--${className}`}>
                    <Component
                        {...pageProps}
                    />
                </Layout>
            </Provider>
        )
    }
}

export default withReduxStore(MyApp);