import React from 'react';
import { StackForm } from '../components/StackForm';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';


describe('StackForm', () => {
    const stackForm = shallow(<StackForm />);

    it('renders the Form title', () => {
        expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
    });
    it('renders the Link home', () => {
        expect(stackForm.find('h4').at(0).text()).toEqual('Home');
    });
    it('renders the Form component', () => {
        expect(stackForm.find('Form').exists()).toBe(true)
    });
    it('renders a button to add a new card', () => {
        expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
    });
    it('renders a button to submit the form', () => {
        expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add Stack');
    });

    describe('and updating the title', () => {
        beforeEach(() => {
            stackForm.find('FormControl').simulate('change', { target: { value: changeTitle } })
        });

        it('update the title in state', () => {
            expect(stackForm.state().title).toEqual(changeTitle);
        });
    })

    describe('when adding a new card', () => {
        beforeEach(() => {
            stackForm.find('Button').at(0).simulate('click')
        });

        // afterEach(() => {
        //     stackForm.setState({ cards: [] });
        // });

        it('adds a new to the state', () => {
            expect(stackForm.state().cards.length).toEqual(1);
        });

        it('renders the prompt section', () => {
            expect(stackForm.find('FormLabel').at(1).props().children).toEqual('Prompt:')
        });
        it('renders the answer section', () => {
            expect(stackForm.find('FormLabel').at(2).props().children).toEqual('Answer:')
        });
    })

    describe('updates the prompt in the state', () => {
        beforeEach(() => {
            stackForm.find('FormControl').at(1).simulate('change', { target: { value: changePrompt } });
        });

        it('updates the prompt in the state', () => {
            expect(stackForm.state().cards[0].prompt).toEqual(changePrompt);
        });
    })

    describe('and updatng the card answer', () => {
        beforeEach(() => {
            stackForm.find('FormControl').at(2)
                .simulate('change', { target: { value: changeAnswer } });
        });

        it('updates the answer in the state', () => {
            expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
        });
    })
});

