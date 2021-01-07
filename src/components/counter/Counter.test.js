import {render} from '@testing-library/react';
import Counter from './Counter';

jest.mock()

test('test counter elements', () => {
    const {getByText, getByLabelText} = render(<Counter key={1} counter = {{id:1, value:4}}/>);

    getByText("Increment");
    getByText("Decrement");
})