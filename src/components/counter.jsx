import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //     value : this.props.counter.value
    //     // tags: ['tag1', 'tag2', 'tag3']
    //  }

     constructor (props){
         super(props);
        //  this.handleIncrement = this.handleIncrement.bind(this);
        //  console.log(this);
     }
    
    render() { 
        console.log(this.props);
        return <div>
            {this.props.children}
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
        <button className="btn-danger m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        
        <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Decrement</button>
        {/* <button onClick={(e) => { this.setCounter(e)}} className="btn btn-secondary btn-sm m-2">Set counter</button> */}
        {/* <ul>
            {this.state.tags.map(tag =>  <li key={tag}>{tag}</li>)}
        </ul> */}
        </div>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount (){
        const {value} = this.props.counter;
        return value == 0 ? "Zero" : value;
    }
}
 
export default Counter;