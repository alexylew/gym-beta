import React, { Component } from 'react';
import './GradeCounter.css'

class GradeCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count || 0,
        };

        this.incCount = this.incCount.bind(this);
        this.decCount = this.decCount.bind(this);
    }

    incCount() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    decCount() {
        this.setState(prevState => {
            return prevState.count > 0 ? { count: prevState.count - 1 } : prevState;
        });
    }

    render() {
        console.log('rendering our counter', this.props.text);
        return (
            <div>
                <a class="button" onClick={this.decCount}>-</a>
                <p>{this.props.text} {this.state.count}</p>
                <a class="button" onClick={this.incCount}>+</a>
            </div>
        )
    }
}

export {
    GradeCounter,
}