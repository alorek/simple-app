import * as actions from './index'

describe('actions', () => {
    it('sortTable should create SORT_TABLE action', () => {
        expect(actions.sortTable('name', 'asc')).toEqual({
            type: 'SORT_TABLE',
            sortBy: 'name',
            sortOrder: 'asc'
        });
    });

    it('selectPage should create SELECT_PAGE action', () => {
        expect(actions.selectPage(100)).toEqual({
            type: 'SELECT_PAGE',
            currentPage: 100
        });
    });

    it('nextPage should create NEXT_PAGE action', () => {
        expect(actions.nextPage()).toEqual({
            type: 'NEXT_PAGE'
        });
    });

    it('previousPage should create PREVIOUS_PAGE action', () => {
        expect(actions.previousPage()).toEqual({
            type: 'PREVIOUS_PAGE'
        });
    });
});
