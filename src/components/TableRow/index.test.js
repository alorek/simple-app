import React from 'react';
import renderer from 'react-test-renderer';

import TableRow from './index';

test('TableRow renders correctly', () => {

    const tree = renderer.create(
        <TableRow />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
