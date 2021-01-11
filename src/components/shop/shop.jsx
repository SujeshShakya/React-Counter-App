import React, {Component} from 'react';
import Counters from '../Counters/Counters';


class Shop extends Component{
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
    
    handleReset = () =>{
      const counters = this.state.counters.map(x=> {
          x.value = 0
          return x;
      })
      this.setState({counters});
    }

    render () {
      return (  <div>
        <main className="container">
        <Counters 
        counters = {this.state.counters}
        onReset = {this.handleReset}
        onIncrement={this.handleIncrement} onDelete={this.handleDelete} onDecrement={this.handleDecrement}/>
        </main>
        </div>
      )
    }
}

export default Shop