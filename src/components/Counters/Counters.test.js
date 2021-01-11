import {render} from '@testing-library/react';
import Counters from './Counters';

///to do : implement mock and use event  asdfkjti   `


const counters = [
    {id:1, value:4},
    {id:2, value:0},
    {id:3, value:0},
    {id:4, value:0}
];

test ("test name", () => {
    const {getByText, getByLabelText} =  render(<Counters counters={counters}/>);

    getByText("Reset");
})