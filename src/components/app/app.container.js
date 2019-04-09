import React from "react";
import {Helmet} from "react-helmet";
import {Location, Router} from "@reach/router";
import {connect} from 'react-redux';
import classNames from 'classnames';

const Home = () => <div>Home</div>
const Dash = () => <div>Dash</div>

class App extends React.Component {
    render() {
        return (
			<React.Fragment>
				<Helmet
					htmlAttributes={{lang:"en"}}
					titleTemplate="Plan-Eat | %s"
					defaultTitle="Plan-Eat"
					titleAttributes={{itemprop: "name", lang: "en"}}
					link={[
						{rel:"canonical", href: `https://plan-eat.kitchen/`}
					]}
					meta={[
						{name: "description", content: ""},
						{name: "keywords", content: ""},
						{property: "og:site_name", content: ''},
						{property: "og:type", content: 'website'},
						{property: "og:url", content: 'https://plan-eat.kitchen'},
						{name: "viewport", content: "width=device-width, initial-scale=1,minimum-scale=1"}
					]}
				/>
				<Router>
					<Home path="/" />
					<Dash path="dashboard" />
				</Router>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({app}, ownProps) => ({
    app
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(App);