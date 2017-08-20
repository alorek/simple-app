import orderBy from 'lodash/orderBy';

export function sortData(records, sortKey, sortOrder) {
    return orderBy(records, function(record) {
        const val = record[sortKey];
        return  typeof val === 'string' ? (val).toLowerCase() : val;
    }, sortOrder);
};

export function getPage(records, currentPage, pageSize) {
    return records.slice((currentPage - 1 ) * pageSize, currentPage * pageSize);
};
