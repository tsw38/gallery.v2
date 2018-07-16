import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { injectGlobal } from 'styled-components';

import {
  Console,
  Variables,
  ObjectUtil
} from '../../utils';

import {
  About,
  Login,
  Archive,
  Gallery,
  Homepage,
  Dashboard
} from '../../views/index';

const {
  MainDashboard
} = Dashboard;

import {
  AppProvider
} from '../../context/Context.jsx';

Console();

export default class App extends React.Component {
  componentWillMount(){
    if(global.window && localStorage){
      if(localStorage.getItem(process.env.LOCALSTORAGE_KEY)){
        let expiration = ObjectUtil.deepFind(JSON.parse(localStorage.getItem(process.env.LOCALSTORAGE_KEY) || {}), 'expiration');
        expiration = expiration ? new Date(expiration).getTime() : false;
        let now = (new Date()).getTime();
        if(expiration <= now){
          localStorage.clear(process.env.LOCALSTORAGE_KEY);
        }
      }
    }
  }

  render(){
    return(
      <React.Fragment>
        <Helmet
          htmlAttributes={{lang:"en"}}
          titleTemplate="Tyler Scott | %s"
          titleAttributes={{itemprop: "name", lang: "en"}}
          link={[
            {rel:"canonical", href: `https://tylerscott.gallery/`}
          ]}
          meta={[
            {name: "description", content: "Photographer &amp; Small Scale Explorer. As a Chicago transplant via New Jersey I\'ve traveled a fair amount and have found the most joy out of capturing you in your element. Let me prove it."},
            {name: "keywords", content: "photography, Photography, photographer, Photographer, Tyler Scott Williams, Tyler Scott, Tyler, tyler scott, tyler scott williams, wedding, headshots, headshot, portraits, wedding day, portrait, dslr, new york, New York, Manhattan, New York City, New York, New Jersey, Jersey City, JC, NJ, commercial, blog, contact, Chicago, Chi, Chitown, south west florida, Florida, Senior Portraits, Maternity Portraits, Commercial, Professional Photography, Illinois, Chicago IL, 60657"},
            {property: "og:site_name", content: 'Tyler Scott | Chicago Wedding & Portrait Photographer'},
            {property: "og:type", content: 'website'},
            {property: "og:url", content: 'https://tylerscott.gallery/'},
            {name: "viewport", content: "width=device-width, initial-scale=1,minimum-scale=1"}
          ]} />
          <Switch>
            <AppProvider {...this.props}>
              <Route exact path="/" component={ Homepage } />
              <Route exact path="/archive/" component={ Archive } />
              <Route exact path="/archive/:gallery" component={ Gallery } />
              <Route exact path="/about/" component={ About } />
              <Route exact path="/login/" component={ Login } />
              <Route exact path="/dashboard/" component={ MainDashboard }/>
            </AppProvider>
          </Switch>
      </React.Fragment>
    )
  }
}

injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
    overflow:hidden;
  }
  ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }


  body {
    border:20px solid white;
    height:calc(100vh - 40px);
    width:calc(100vw - 40px);
    font-family: 'Montserrat',sans-serif;
    background-color:${Variables.backgroundState};

    #gallery{
      height:100%;
      width:100%;
      position:relative;

      > div, .page-wrapper{
        height:inherit;
        width:inherit;
      }
    }

    *,*:focus{
      outline:none;
      outline-style:none;
      outline-color:transparent;
    }
  }

  @media only screen and (max-width:468px){
    body {
      border: 10px solid white;
      height:calc(100vh - 20px);
      width:calc(100vw - 20px);
    }
  }

`;
