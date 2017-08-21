import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecordViewContainer from './RecordViewContainer';
import reducer from '../reducers';

const store = createStore(reducer);
const match = {params: {id: '123'}};

test('RecordViewContainer renders correctly', () => {
    const tree = renderer.create(
        <Provider store={ store }>
            <Router>
                <RecordViewContainer match={match}/>
            </Router>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
