const Homepage = (props) => {
    return (
        <div>HOMEPAGE</div>
    );
}


Homepage.getInitialProps = async ({ req }) => {
    return {
        title: 'Home'
    }
}

export default Homepage;