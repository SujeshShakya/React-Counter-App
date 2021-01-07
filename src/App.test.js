import { render, screen } from '@testing-library/react';
// import ReactDOM from 'react-dom';
import App from './App';

// test('renders learn react link', () => {
//   const {getByText, getByLabelText} = render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('render without crashing', () =>{
  const div =  document.createElement('div');
  
  render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);

})

test('render correct content with selectors', () =>{
const {getByText, getByLabelText} = render(<App />)

getByText("Navbar");
// getByLabelText("Reset")
})