import React from 'react';

import * as AllActions from '../actions';

const AppContext = React.createContext();

export class AppProvider extends React.Component {
  state = { }

  render() {
    // console.log(AllActions, 'adawdawdawdawdawdawdawd');
    // console.log("<-------- APP PROVIDER STATUS -------->", '\n', this.props, '\n', this.state);
    // console.log("APP PROVIDER INITIALSTATE!!!!!!", this.props.initialState);
    return (
      <AppContext.Provider value={{
        state: {
          ...this.state,
          ...this.props.state,
          location: this.props.location.pathname
        },
        stateUpdater: async (pageToUpdate, newState) => this.setState({
          [pageToUpdate]: {
            ...this.state[pageToUpdate],
            ...newState
          }
        }),
        getParentState: async (page) => this.state[page] || this.state,
        actions: AllActions
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const Consumer = AppContext.Consumer;
