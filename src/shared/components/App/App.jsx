import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import appStyle from '../SASS/main.scss';

import {
  Homepage,
  Archive,
  About,
  Login
} from '../../views/index';

import {
  AppProvider
} from '../../context/Context.jsx';

export default class App extends React.Component {
  render(){
    console.log(this.props);
    return(
      <AppProvider
        initialState={this.props.initialState}>
        <div>
          <Helmet
            htmlAttributes={{lang:"en"}}
            titleTemplate="Tyler Scott | %s"
            titleAttributes={{itemprop: "name", lang: "en"}}
            link={[
              {rel:"canonical", href: `https://tylerscott.gallery/`}
            ]}
            meta={[
              {name: "description", content: "Photographer &amp; Small Scale Explorer. As a Chicago based Southwest Florida transplant via New Jersey I\'ve traveled a fair amount and have found the most joy out of capturing you in your element. Let me prove it."},
              {name: "keywords", content: "photography, Photography, photographer, Photographer, Tyler Scott Williams, Tyler Scott, Tyler, tyler scott, tyler scott williams, wedding,headshots, headshot, portraits, wedding day, portrait, dslr, new york, New York, Manhattan, New York City, New York, New Jersey, Jersey City, JC, NJ, commercial, blog, contact, chicago, chi, chitown, south west florida, Florida, Senior Portraits, Maternity Portraits, Commerical, Professional Photography"},
              {property: "og:site_name", content: 'Tyler Scott | Chicago Wedding & Portrait Photographer'},
              {property: "og:type", content: 'website'},
              {property: "og:url", content: 'https://tylerscott.gallery/'},
              {name: "viewport", content: "width=device-width, initial-scale=1,minimum-scale=1"}
            ]} />
            <Switch>
              <Route exact path="/" component={ Homepage } />
              <Route exact path="/archive/" component={ Archive } />
              <Route exact path="/about/" component={ About } />
              <Route exact path="/login/" component={ Login } />
            </Switch>
        </div>
      </AppProvider>
    )
  }
}
