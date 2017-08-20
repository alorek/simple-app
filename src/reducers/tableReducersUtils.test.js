import { sortData, getPage } from './tableReducersUtils'

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
    })
})

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

    })
})
