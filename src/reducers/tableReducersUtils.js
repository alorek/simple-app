import { orderBy, includes, some } from 'lodash';

export function filterData(records, searchTerm) {

    // NOTE: Case insensitive search
    const text = String(searchTerm).toLowerCase();

    return records.filter(function(record) {
        return some([
            'resource_type',
            'display_title',
            'media_type',
            'language'
        ], function(attribute) {
            return includes((record[attribute]).toLowerCase(), text);
        });
    });
};

export function sortData(records, sortKey, sortOrder) {

    // NOTE: Case insensitive sorting
    return orderBy(records, function(record) {
        const val = record[sortKey];
        return  typeof val === 'string' ? (val).toLowerCase() : val;
    }, sortOrder);
};

export function getPage(records, currentPage, pageSize) {
    return records.slice((currentPage - 1 ) * pageSize, currentPage * pageSize);
};
