import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
configure({adapter: new Adapter()});

describe('App', ()=>{
  const app = shallow(<App />);

  it('renders the `FlashcardPro` title', ()=>{
    expect(app.find('h1').text()).toEqual('Flashcardpro')
  })
  it('renders the StackList', ()=>{
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  })
  it('renders the a link to create to create new stacks', ()=>{
    expect(app.find('Link h2').text()).toEqual('Create a New StackList')
  })
});

