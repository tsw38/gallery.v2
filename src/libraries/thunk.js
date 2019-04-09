import {api} from 'libraries/api';

const createThunkMiddleware = (isServer, serverHosts) => {
    return ({dispatch, getState}) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState, api(dispatch, getState, isServer, serverHosts))
        }

        return next(action);
    }
}

const thunk = createThunkMiddleware();

thunk.withServer = createThunkMiddleware;

export default thunk;