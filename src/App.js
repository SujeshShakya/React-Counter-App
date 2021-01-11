
import React, { Component } from 'react'; 
import './App.css';
import Navbar from './components/navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Shop from './components/shop/shop';
import Home from './components/home/home';
import About from './components/about/about';


class App extends Component {
  state = {
    counters: [
    {id:1, value:4},
    {id:2, value:0},
    {id:3, value:0},
    {id:4, value:0}
]  };



render(){
  console.log(this.state.counters.filter(c => c.value > 0))
  return (
    <Router>
      <div className="App">
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/> 
        <Switch>
        <Route path="/about" exact component={About}>
          <About/>
        </Route>
        <Route path="/" exact component={Home}>
          <Home/>
        </Route>
       
        <Route path="/shop" exact component={Shop}>
          <Shop/>
        </Route> 
        </Switch>

      </div>
    </Router>
  
);
}
  
}

export default App;
