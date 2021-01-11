import React, { Component } from 'react';   
import {Link} from 'react-router-dom';

class Navbar extends Component {
    
    render() { 
        return ( 
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">ECommerce</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
        <Link to="/">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </Link>
        <Link to="/about">
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </Link> 
        <Link to="/shop">
          <li className="nav-item">
            <a className="nav-link" href="#">Shop</a>
          </li>
        </Link>
        </ul>
      </div>
    </div>
  </nav>
      //   <nav className="navbar navbar-light bg-light"> 
      //   <div className="container-fluid">
      //     <a className="navbar-brand" href="#">Navbar <span className="badge badge-pill badge-secondary"> {this.props.totalCounters}</span></a>
      //     <ul>
      //       <Link to="/home">
      //       <li>Home</li>
      //       </Link>
      //       <Link to="/about">  
      //       <li>About</li>
      //       </Link>
      //       <Link to="/shop">
      //       <li>Shop</li>
      //       </Link>
      //     </ul>
      //   </div>
      // </nav>
      
      );
    }
}
 
export default Navbar;