import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RecordView from './index';
import reducer from '../../reducers';

const store = createStore(reducer);

test('RecordView renders correctly', () => {

    const tree = renderer.create(
        <Provider store={ store }>
                <RecordView  />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
