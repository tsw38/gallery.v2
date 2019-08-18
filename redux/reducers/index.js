import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'libraries/thunk';
import {canUseDom} from 'utilities/canUse';

import actionTypes from 'constants';

import theme from 'reducers/ThemeReducer';

const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0
  }

  // REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light
            })
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            })
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: exampleInitialState.count
            })
        default:
            return state
    }
}

export function initializeStore (initialState = exampleInitialState) {
    return createStore(
        combineReducers({
            // reducer,
            theme
        }),
        initialState,
        composeWithDevTools(applyMiddleware(
            thunk.withServer({isServer: canUseDom()})
        ))
    )
}