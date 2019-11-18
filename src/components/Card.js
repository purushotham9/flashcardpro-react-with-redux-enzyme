import React, { Component } from 'react';

export class Card extends Component {
  constructor() {
    super();

    this.state = { reveal: false }
  }
  render() {
    const { prompt, answer } = this.props.card

    return (
      <div className="card" style={{ border: "1px solid black", margin: "10px", borderRadius: "10px", padding: "10px" }} onClick={() => this.setState({ reveal: true })}>
        <div className="card-prompt" style={{ display: "inline-block", textAlign: "left", width: "50%" }}><h3>{prompt}</h3></div>
        <div className="card-answer" style={{ display: "inline-block", textAlign: "right", width: "50%" }}>
          <h3 className={this.state.reveal ? 'text-hidden' : 'text-revealed'}>{answer}</h3></div>
      </div>
    );
  }
}

export default Card;