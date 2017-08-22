import { filterData, sortData, getPage } from './tableReducersUtils'

import includes from 'lodash/includes';

describe('tableReducersUtils filterData', () => {
    it('should return records containing search term', () => {

        const records = [{
            resource_type: 'Agile',
            display_title: 'Some title',
            media_type: 'pdf',
            language: 'en-us'
        }, {
            resource_type: 'Type1',
            display_title: 'Some title',
            media_type: 'flash',
            language: 'en-us'
        }, {
            resource_type: 'Type2',
            display_title: 'Book',
            media_type: 'html',
            language: 'en-gb'
        }];

        let searchTerm = 'Agile';

        expect(filterData(records, searchTerm).length).toEqual(1);
        expect(filterData(records, searchTerm)[0].resource_type).toEqual('Agile');

        searchTerm = 'Type';

        expect(filterData(records, searchTerm).length).toEqual(2);
        expect(filterData(records, searchTerm)[0].resource_type).toEqual('Type1');
        expect(filterData(records, searchTerm)[1].resource_type).toEqual('Type2');

        searchTerm = 'html';

        expect(filterData(records, searchTerm).length).toEqual(1);
        expect(filterData(records, searchTerm)[0].resource_type).toEqual('Type2');

        searchTerm = 'en-gb';

        expect(filterData(records, searchTerm).length).toEqual(1);
        expect(filterData(records, searchTerm)[0].resource_type).toEqual('Type2');

        searchTerm = 1;

        expect(filterData(records, searchTerm).length).toEqual(1);
        expect(filterData(records, searchTerm)[0].resource_type).toEqual('Type1');

    });
});

describe('tableReducersUtils sortData', () => {
    it('should sort records by sortKey', () => {

        const records = [{
            name: 'Bob',
            age: 2
        }, {
            name: 'Alice',
            age: 12
        }, {
            name: 'Zoe',
            age: 10
        }];

        const sortedByName = sortData(records, 'name', 'asc');
        const sortedByAge = sortData(records, 'age', 'asc');

        expect(sortedByName[0].name).toEqual('Alice');
        expect(sortedByName[sortedByName.length - 1].name).toEqual('Zoe');

        expect(sortedByAge[0].name).toEqual('Bob');
        expect(sortedByAge[sortedByAge.length - 1].name).toEqual('Alice');
    });
});

describe('tableReducersUtils getPage', () => {
    it('should return current page records by sortKey', () => {

        const fruit = [{
            type: 'apple',
        }, {
            type: 'orange',
        }, {
            type: 'banana',
        }, {
            type: 'strawberry',
        }, {
            type: 'pear',
        }, {
            type: 'peach',
        }];

        const firstPageOfTwo = getPage(fruit, 1, 2);
        const secondPageOfThree = getPage(fruit, 2, 3);

        expect(firstPageOfTwo[0].type).toEqual('apple');
        expect(firstPageOfTwo[firstPageOfTwo.length - 1].type).toEqual('orange');

        expect(secondPageOfThree[0].type).toEqual('strawberry');
        expect(secondPageOfThree[secondPageOfThree.length - 1].type).toEqual('peach');

    });
});
