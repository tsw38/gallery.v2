'use strict';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import cheerio from 'cheerio';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import chalk from 'chalk';
import jwt from 'express-jwt';

import { App } from '../shared/components';

import routes from './routes/routes';
import HTMLTemplate from './templates/template.js';

const asyncMatchRoute = async (routes,location, cookies) => {
  let generatedHTML = '';

  const branch = await matchRoutes(routes,location);
// console.warn('THIS IS THE SERVER RENDERER',branch);

  let matchedRoute = branch
    .filter(Boolean)
    .filter(component => !!component.route && !!component.route.path)
    .map(({route}) => {
      console.log('\n-----------------------------------')
      console.log(route);
      console.log('-----------------------------------\n');
      return {
        preRender: route.preRender
      }
    })
    .slice(-1);

  // console.log(chalk.green('MATCHED!!!!!'), matchedRoute);

  if(matchedRoute){
    try{
      generatedHTML = await renderHTML({routes, location, matchedRoute, cookies});
    } catch (err) {
      generatedHTML = "404";
      console.error(chalk.red(`\n\n<<<<<< ERROR GENERATING HTML: ${location} >>>>>>>>`))
      console.error(err);
      console.error(chalk.red(`<<<<<< ERROR GENERATING HTML: ${location} >>>>>>>>\n\n`))
    }
  }
  return generatedHTML;
}

async function getPrerequisites() {

}

async function renderHTML({routes, location, matchedRoute, cookies}){
  const subpage = location.split('/').pop();
  console.log('+++++++++++++++++++++++++++++++++++++++++++')
  console.log('this is the matchedRoute', matchedRoute);
  console.log('this is the location', location);
  console.log('this is the subpage', subpage);

  const prerequisites = await matchedRoute[0].preRender(subpage);
  // console.log('prerequisites', prerequisites);

  const {
    key,
    ...remainingOptions
  } = prerequisites;

  const state = {
    [key]: {
      key,
      ...remainingOptions,
      location
    }
  };

  // console.warn(state);


  const sheet = new ServerStyleSheet();
  const markup = ReactDOMServer.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={location} context={{}}>
        <App
          state={state}
          cookies={cookies}
        />
      </StaticRouter>
    </StyleSheetManager>
  )
  console.log('is there any markup');
  // console.log(markup);
  console.log('+++++++++++++++++++++++++++++++++++++++++++\n\n')

  const stylesheets = sheet.getStyleTags();

  const virtualDOM = cheerio.load(markup);
  if(virtualDOM('body > div').children().length === 0){
    throw 'PageNotFoundError';
  } else {
    const helmet = Helmet.renderStatic();

    const finalHTML = await HTMLTemplate({ markup,helmet,state, stylesheets });
    return finalHTML;
  }
}

export default async (req,res,next) => {
  const { body, path, cookies } = req;
  let newHTML = '';
  try{
    newHTML = await asyncMatchRoute(routes,path,cookies);
  } catch (err) {
    console.error(err);
    newHTML = 'ERROR';
  } finally {
    if(/404/.test(newHTML)) res.redirect(301, "/");
    res.send(newHTML);
  }
}
