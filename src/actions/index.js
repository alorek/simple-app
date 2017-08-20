export const sortTable = (sortBy, sortOrder) => {
    return {
        type: 'SORT_TABLE',
        sortBy,
        sortOrder
    };
}

export const selectPage = (currentPage) => {
    return {
        type: 'SELECT_PAGE',
        currentPage
    };
}