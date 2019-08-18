import React from 'react'
import App from 'next/app'
import Head from 'common/Head'

import Layout from 'common/Layout';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const className = this.props.router.pathname.split('/')[1].toLowerCase();

        return (
            <React.Fragment>
                <Head {...pageProps} />
                <Layout
                    className={className && `Page--${className}`}>
                    <Component
                        {...pageProps}
                    />
                </Layout>
            </React.Fragment>
        )
    }
}