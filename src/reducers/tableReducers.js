import rawData from '../resources/Content.json';
import { sortData, getPage } from './tableReducersUtils';

const PAGE_SIZE = 5;

const data = ((((rawData || {}).response || {}).results || {}).result || [])
    .map(row => ((row || {}).content || {}).resource);

const initialState = {
    data: data,
    tableData: data,
    sortKey: 'resource_type',
    sortOrder: 'asc',
    currentPage: 1
};

export default function tableReducer (state = initialState , action) {
    let sortedData = [];
    let currentPageData = [];

    switch (action.type) {

        case 'SORT_TABLE':
            sortedData = sortData(state.data, action.sortBy, action.sortOrder);
            currentPageData = getPage(sortedData, 1, PAGE_SIZE);

            return Object.assign({}, state, {
                tableData: currentPageData,
                sortKey: action.sortBy,
                sortOrder: action.sortOrder,
                currentPage: 1
            });
        case 'SELECT_PAGE':
            sortedData = sortData(state.data, state.sortKey, state.sortOrder);
            currentPageData = getPage(sortedData, action.currentPage, PAGE_SIZE);

            return Object.assign({}, state, {
                tableData: currentPageData,
                currentPage: action.currentPage
            });
        case 'NEXT_PAGE':
            const nextPage = state.currentPage + 1;
            sortedData = sortData(state.data, state.sortKey, state.sortOrder);

            if (nextPage > data.length/PAGE_SIZE) {
                return state;
            }

            currentPageData = getPage(sortedData, nextPage, PAGE_SIZE);

            return Object.assign({}, state, {
                tableData: currentPageData,
                currentPage: nextPage
            });
        case 'PREVIOUS_PAGE':
            const previousPage = state.currentPage - 1;
            sortedData = sortData(state.data, state.sortKey, state.sortOrder);

            if (previousPage < 1) {
                return state;
            }

            currentPageData = getPage(sortedData, previousPage, PAGE_SIZE);

            return Object.assign({}, state, {
                tableData: currentPageData,
                currentPage: previousPage
            });
        default:
            sortedData = sortData(state.data, state.sortKey, state.sortOrder);
            currentPageData = getPage(sortedData, 1, PAGE_SIZE);

            return Object.assign({}, state, {
                tableData: currentPageData
            });
    }
};
