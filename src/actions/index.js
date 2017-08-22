export const searchTable = (searchTerm) => {
    return {
        type: 'SEARCH_TABLE',
        searchTerm
    };
};

export const sortTable = (sortBy, sortOrder) => {
    return {
        type: 'SORT_TABLE',
        sortBy,
        sortOrder
    };
};

export const selectPage = (currentPage) => {
    return {
        type: 'SELECT_PAGE',
        currentPage
    };
};

export const nextPage = () => {
    return {
        type: 'NEXT_PAGE'
    };
};

export const previousPage = () => {
    return {
        type: 'PREVIOUS_PAGE'
    };
};
