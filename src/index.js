import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { devToolsEnhancer } from 'redux-devtools-extension';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import App from './containers/App';
import RecordViewContainer from './containers/RecordViewContainer';
import reducer from './reducers';

const store = createStore(reducer, devToolsEnhancer());

render((
    <Provider store = { store }>
        <Router>
            <div>
                <div className="app-header">
                    <h2>Simple App</h2>
                </div>
                <Route exact path="/" component = { App } />
                <Route path="/record/:id/" component = { RecordViewContainer } />
            </div>
        </Router>
    </Provider>

), document.getElementById('app'));
