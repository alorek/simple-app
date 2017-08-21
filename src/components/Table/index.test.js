import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Table from './index';
import reducer from '../../reducers';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(reducer);

test('Table renders correctly', () => {

    const dataKeys = ['resource_type'];

    const tree = renderer.create(
        <Provider store={ store }>
            <Router>
                <Table  />
            </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
