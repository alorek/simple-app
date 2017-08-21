import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TableHeader from './index';
import reducer from '../../reducers';

const store = createStore(reducer);

test('TableHeader renders correctly', () => {
    const column = {id: 'resource_type'};

    const tree = renderer.create(
        <Provider store={ store }>
            <Router>
                <TableHeader column={ column }/>
            </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
