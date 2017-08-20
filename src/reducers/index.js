import { combineReducers } from 'redux';
import tableReducers from './tableReducers';

const reducer = combineReducers({
    table: tableReducers
});

export default reducer;
