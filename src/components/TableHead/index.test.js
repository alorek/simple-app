import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import TableHead from './index';
import reducer from '../../reducers';

const store = createStore(reducer);

test('TableHead renders correctly', () => {

    const dataKeys = ['resource_type'];

    const tree = renderer.create(
        <Provider store={ store }>
            <TableHead dataKeys={ dataKeys } />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
