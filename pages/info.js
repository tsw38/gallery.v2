const Info = (props) => {
    return (
        <div>Info</div>
    );
}


Info.getInitialProps = async ({ req }) => {
    return {
        title: 'Info'
    }
}

export default Info;