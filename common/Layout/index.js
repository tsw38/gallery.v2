import React from 'react'
import classNames from 'classnames';
import { connect } from 'react-redux';

import Header from 'common/Header';
import Footer from 'common/Footer';
import Body from 'common/Body';
import Reset from 'common/Layout/reset';
import Fonts from 'common/Layout/fonts';
import Links from 'common/Layout/links';
// import Layout from 'common/Layout/styles';

import {getTheme, setTheme} from 'actions/ThemeActions';

import { initGA, logPageView } from 'utilities/analytics';

class LayoutWrapper extends React.Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }

        this.props.getTheme();

        console.warn('this is the theme', this.props.theme);
        logPageView()
    }

    componentDidUpdate(prevProps) {
        console.log(this.props);
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

const mapStateToProps = ({theme}) => ({
    theme
});

const mapDispatchToProps = {
    getTheme
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LayoutWrapper)
