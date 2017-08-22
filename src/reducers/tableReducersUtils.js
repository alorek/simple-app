import orderBy from 'lodash/orderBy';
import includes from 'lodash/includes';

export function filterData(records, searchTerm) {

    const text = String(searchTerm).toLowerCase();

    return records.filter(function(record) {
        return includes((record.resource_type).toLowerCase(), text) ||
            includes((record.display_title).toLowerCase(), text) ||
            includes((record.media_type).toLowerCase(), text) ||
            includes((record.language).toLowerCase(), text);
    });
};

export function sortData(records, sortKey, sortOrder) {
    return orderBy(records, function(record) {
        const val = record[sortKey];
        return  typeof val === 'string' ? (val).toLowerCase() : val;
    }, sortOrder);
};

export function getPage(records, currentPage, pageSize) {
    return records.slice((currentPage - 1 ) * pageSize, currentPage * pageSize);
};
