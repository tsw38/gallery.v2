import React from 'react';
import { connect } from 'react-redux';

import HomepageWrapper from 'styles/Homepage';

const Homepage = ({background}) => {
    console.warn('this is the background', background);
    return (
        <HomepageWrapper
            url={background}
        />
    );
}


Homepage.getInitialProps = async ({ req, reduxStore }) => {
    // console.warn('this is the rest of the state', reduxStore);
    return {
        title: 'Home',
        background: 'https://firebasestorage.googleapis.com/v0/b/tylerscott-gallery.appspot.com/o/adriana-chris%2F01.jpg?alt=media&token=038db330-1ce3-4497-9fa0-da6506c5b097'
    }
}

const mapDispatchToProps = {

};

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)
