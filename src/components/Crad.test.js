import React from 'react';
import { Card } from '../components/Card';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {stack} from '../data/fixtures'

configure({ adapter: new Adapter() });
const props = {
    card: { prompt: 'test prompt', answer: 'test answer' }
};

describe('Card', () => {
    const card = shallow(<Card  {...props} />);

    it('sets `reveal` to be ``false', () => {
        expect(card.state().reveal).toBe(false);
    })

    it('renders the card prompt', () => {
        expect(card.find('.card-prompt h3').text()).toEqual(props.card.prompt)
    })

    it('renders the card answer', () => {
        expect(card.find('.card-answer h3').text()).toEqual(props.card.answer)
    })
    it('applies the ``text-hidden class to the card answer', () => {
        expect(card.find('.card-answer h3').hasClass('text-hidden')).toBe(false)
    })

    describe('when clicking on the card', () => {
        beforeEach(() => card.simulate('click'));

        it('sets `reveal` to be ``true', () => {
            expect(card.state().reveal).toBe(true);
        })

        it('applies the ``text-revealed class to the card answer', () => {
            expect(card.find('.card-answer h3').hasClass('text-hidden')).toBe(true)
        })
    })
});

