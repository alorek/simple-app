import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import TablePagination from './index';
import reducer from '../../reducers';

const store = createStore(reducer);

test('TablePagination renders correctly', () => {

    const tree = renderer.create(
        <Provider store={ store }>
            <TablePagination />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
