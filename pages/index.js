const Homepage = (props) => {
    return (
        <div>HOMEPAGE</div>
    );
}


Homepage.getInitialProps = async ({ req }) => {
    return {
        title: 'Home',
        backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/tylerscott-gallery.appspot.com/o/adriana-chris%2F01.jpg?alt=media&token=038db330-1ce3-4497-9fa0-da6506c5b097'
    }
}

export default Homepage;