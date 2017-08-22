import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import reducer from '../../reducers';
import SearchBox from './index';

test('SearchBox renders correctly', () => {
    const store = createStore(reducer);

    const dataKeys = ['resource_type'];

    const tree = renderer.create(
        <Provider store={ store }>
            <Router>
                <SearchBox  />
            </Router>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
