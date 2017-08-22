import tableReducers from './tableReducers';
import tableData from '../resources/Content.json';

describe('tableReducers reducer', () => {

    const data = tableData.response.results.result.map(row => row.content.resource);
    const initialState = {
        data: data,
        tableData: data,
        sortKey: 'resource_type',
        sortOrder: 'asc',
        currentPage: 1,
        searchTerm: null
    };

    it('should handle initial state', () => {
        expect(tableReducers(undefined, {}).data).toEqual(data)
    });
});
