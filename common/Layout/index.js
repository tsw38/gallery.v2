import React from 'react'
import classNames from 'classnames';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Header from 'common/Header';
import Footer from 'common/Footer';
import Body from 'common/Body';
import Reset from 'common/Layout/reset';
import Fonts from 'common/Layout/fonts';
import Links from 'common/Layout/links';
// import Layout from 'common/Layout/styles';

import {getTheme} from 'actions/ThemeActions';

import { initGA, logPageView } from 'utilities/analytics';

class LayoutWrapper extends React.Component {
    async componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }

        this.props.getTheme();

        logPageView()
    }

    componentDidUpdate(prevProps) {
    }

    render() {
        return (
            <ThemeProvider theme={{theme: this.props.theme}}>
                {!!this.props.theme &&
                    <React.Fragment>
                        <Reset />
                        <Fonts />
                        <Links />

                        <Header />
                        <Body className={classNames(
                            'Page',
                            this.props.className,
                            {'Page--hidden': !this.props.theme}
                        )}>{this.props.children}</Body>
                        <Footer />
                    </React.Fragment>
                }
            </ThemeProvider>
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
