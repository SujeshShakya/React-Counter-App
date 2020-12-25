import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0,
        // tags: ['tag1', 'tag2', 'tag3']
     }

     constructor (){
         super();
         this.handleIncrement = this.handleIncrement.bind(this);
         console.log(this);
     }

     handleIncrement = () => {
        this.setState({count: this.state.count + 1});
     }
     
     handleDecrement = () =>{
         this.setState({count: this.state.count - 1})
     }

     resetCounter = () => {
         this.setState ({ count: 0});
     }

     setCounter = counter => {
         console.log(counter); 
        //  this.setState ()
     }
    
    render() { 
        return <div><span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
        <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">Decrement</button>
        <button onClick={this.resetCounter} className="btn btn-secondary btn-sm m-2">Reset</button>
        <input type="text" value={this.state.count} onChange={(e) => this.setState({count : parseInt(e.target.value)})}/> 
        {/* <button onClick={(e) => { this.setCounter(e)}} className="btn btn-secondary btn-sm m-2">Set counter</button> */}
        {/* <ul>
            {this.state.tags.map(tag =>  <li key={tag}>{tag}</li>)}
        </ul> */}
        </div>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount (){
        const {count} = this.state;
        return count == 0 ? "Zero" : count;
    }
}
 
export default Counter;