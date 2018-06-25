import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { GlobalActions } from '../shared/actions';

import {
  App
} from '../shared/components';

const initialState    = (window) ? window.__INITIAL_STATE__ : {};
initialState.supportsHistory = 'pushState' in window.history;
// initialState.GlobalActions = GlobalActions;
console.log(GlobalActions);

async function populate(){
  return await ReactDOM.hydrate(
    <BrowserRouter forceRefresh={!initialState.supportsHistory}>
      <App
        initialState={initialState}
      />
    </BrowserRouter>,
    document.getElementById('gallery')
  );
}

populate();
