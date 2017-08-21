import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TableViewContainer from './TableViewContainer';
import reducer from '../reducers';

const store = createStore(reducer);

test('TableViewContainer renders correctly', () => {
    const tree = renderer.create(
        <Provider store={ store }>
            <Router>
                <TableViewContainer />
            </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
