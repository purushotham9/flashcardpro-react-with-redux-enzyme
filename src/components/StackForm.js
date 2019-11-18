import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addStack } from '../actions'


export class StackForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            cards: []
        }
    }

    addCard() {
        const { cards } = this.state;
        cards.push({ id: cards.length, prompt: '', answer: '' });
        this.setState({ cards })
    }

    updateCardPart(event, index, part) {
        const { cards } = this.state;
        cards[index][part] = event.target.value;
        this.setState({ cards })
    }

    addStack() {
        this.props.addStack(this.state);
    }

    render() {

        return (
            <div>
                <Link to='/' className="link-home"><h4>Home</h4></Link>
                <h4>Create a New Stack</h4><br />
                <Form>
                    <Form.Group >
                        <Form.Label>Title:</Form.Label>
                        {''}
                        <Form.Control onChange={event => this.setState({ title: event.target.value })} />
                    </Form.Group>

                    {
                        this.state.cards.map((card, index) => {
                            return (
                                <div key={card.id}>
                                    <FormGroup >
                                        <Form.Label>Prompt:</Form.Label>
                                        <Form.Control type="text" onChange={event => {
                                            this.updateCardPart(event, index, 'prompt')
                                        }} />
                                        <Form.Label>Answer:</Form.Label>
                                        <Form.Control type="text" onChange={event => {
                                            this.updateCardPart(event, index, 'answer')
                                        }} />
                                    </FormGroup>
                                </div>
                            )

                        })
                    }

                </Form>
                <Button onClick={() => this.addCard()}>Add Card</Button>
                <Button onClick={() => this.addStack()}>Save and Add Stack</Button>

            </div>
        );
    }
}


export default connect(null, { addStack })(StackForm);
