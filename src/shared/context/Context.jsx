import React from 'react';

import * as AllActions from '../actions';

const AppContext = React.createContext();

export class AppProvider extends React.Component {
  state = { }
  render() {
    if(global.window) {
      window.state = this.state;
    }
    // console.log('app',this.props);
    // console.log(AllActions, 'adawdawdawdawdawdawdawd');
    // console.log("<-------- APP PROVIDER STATUS -------->", '\n', this.state);
    // console.log("APP PROVIDER INITIALSTATE!!!!!!", this.props.initialState);
    return (
      <AppContext.Provider value={{
        state: {
          ...this.state,
          ...this.props.state,
          location: this.props.location.pathname,
          cookies: this.props.cookies
        },
        stateUpdater: async (pageToUpdate, newState) => this.setState({
          [pageToUpdate]: {
            ...this.state[pageToUpdate],
            ...newState
          }
        }),
        getParentState: async (page) => page ? this.state[page] : this.state,
        actions: AllActions
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const Consumer = AppContext.Consumer;
