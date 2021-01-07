import React, { Component } from 'react';   
import Counter from '../counter/Counter';

class Counters extends Component {
    render() { 
        return (<div>
            <button className="btn-primary m-2" onClick={this.props.onReset}>Reset</button>
            {
            this.props.counters.map(counter => <Counter key={counter.id} counter={counter} 
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}>
                <h4>Counter: {counter.id}</h4>
            </Counter>)
            }</div> );
    }
}
 
export default Counters;