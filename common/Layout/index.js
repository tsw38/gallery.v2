import React from 'react'
import classNames from 'classnames';

import Header from 'common/Header';
import Footer from 'common/Footer';
import Body from 'common/Body';
import Reset from 'common/Layout/reset';
import Fonts from 'common/Layout/fonts';
import Links from 'common/Layout/links';
// import Layout from 'common/Layout/styles';

import { initGA, logPageView } from 'utilities/analytics';

export default class LayoutWrapper extends React.Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
          logPageView()
    }

    render() {
        return (
            <React.Fragment>
                <Reset />
                <Fonts />
                <Links />

                <Header />
                <Body className={classNames(
                    'Page',
                    this.props.className
                )}>{this.props.children}</Body>
                <Footer />
            </React.Fragment>
        )
    }
};
