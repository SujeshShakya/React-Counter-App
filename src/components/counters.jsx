import React, { Component } from 'react';   
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]  };

    handleDelete= (counterId) =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    handleIncrement= (counter) =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement= (counter) =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }

    onReset = () =>{
        const counters = this.state.counters.map(x=> {
            x.value = 0
            return x;
        })
        this.setState({counters});
    }
 
    render() { 
        return (<div>
            <button className="btn-primary m-2" onClick={this.onReset}>Reset</button>
            {
            this.state.counters.map(counter => <Counter key={counter.id} counter={counter} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}>
                <h4>Counter: {counter.id}</h4>
            </Counter>)
            }</div> );
    }
}
 
export default Counters;