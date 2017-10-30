import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store.js';
import FormContainer from './Containers/FormContainer';
import ProductsContainer from './Containers/ProductsContainer';
import FoldButtonContainer from './Containers/FoldButtonContainer';
import './Styles/style.scss';

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);
const history = syncHistoryWithStore(browserHistory, store);

const InitialComponentContainer = document.getElementById('InitialComponentContainer');

ReactDOM.render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */ }
        <div>
            <FoldButtonContainer/>
            <Router history={history}>
                <Route path="/" component={FormContainer}/>
                <Route path="/store" component={ProductsContainer}/>
            </Router>
        </div>
    </Provider>,
    InitialComponentContainer
);

// import store from './store';
// import ProductsContainer from './Containers/ProductsContainer';
// import StoreNameForm from './Components/StoreNameForm'
// import './Styles/style.scss'
//
// const InitialComponentContainer = document.getElementById('InitialComponentContainer');
//
// ReactDOM.render(
//     <StoreNameForm />, InitialComponentContainer
// );