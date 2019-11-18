import React from 'react';
import { Stack } from '../components/Stack';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { stack } from '../data/fixtures'

configure({ adapter: new Adapter() });
const props = { stack };

describe('Stack', () => {
  const stack = shallow(<Stack  {...props} />);

  it('renders the  title', () => {
    expect(stack.find('h3').text()).toEqual(props.stack.title)
  })

  it('renders the a link home', () => {
    expect(stack.find('Link h4').text()).toEqual('Home')
  })
  it('renders the correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length);
  })
});

