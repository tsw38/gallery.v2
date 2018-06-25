import React from 'react';

import {
  HomepageActions,
  LoginActions,
  ArchiveActions,
  AboutActions
} from '../actions';

const AppContext = React.createContext();

export class AppProvider extends React.Component {
  render() {
    return (
      <AppContext.Provider value={{
        state: {...this.props.initialState},
        actions: ''
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const Consumer = AppContext.Consumer;
