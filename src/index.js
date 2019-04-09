import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createClientStore} from 'utils/createStore';

import App from 'components/app/app.container';

const ClientStore = createClientStore();
window.planEat = ClientStore;

ReactDOM.render(
    <Provider store={ClientStore}>
        <App />
    </Provider>, document.getElementById('tylerscott-gallery')
);

ClientStore.subscribe((params) => {
    // console.warn('what is happening', params)
})

ClientStore.dispatch((dispatch) => {
    // console.warn('awdawd');
    // dispatch(onLocationChange())
})