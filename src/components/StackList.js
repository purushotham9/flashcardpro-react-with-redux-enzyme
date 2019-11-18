import React, { Component } from 'react';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setStack, loadStacks } from '../actions';


export class StackList extends Component {
    componentDidMount() {
        if (stacks.length === 0) loadStacks(stacks);
    }
    render() {
        return (
            <div>
                {
                    this.props.stacks.map(stack => {
                        return (
                            <Link to="/stack" key={stack.id} onClick={() => this.props.setStack(stack)}>
                                <h2 >{stack.title}</h2>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { stacks: state.stacks }
}


export default connect(mapStateToProps, { setStack })(StackList);
