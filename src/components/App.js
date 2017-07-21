import React  from 'react';
import {Link} from 'react-router';

const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar">
        
          <div className="navbar-brand">
            <a className="navbar-item" href="#">Scotch Books</a>
            <div className="navbar-burger burger" data-target="navMenuExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-menu" id="navMenuExample">
            <ul className="navbar-start">
              <li className="navbar-item "><Link to="/">Home</Link></li>
              <li className="navbar-item "><Link to="/about">About</Link></li>
              <li className="navbar-item "><Link to="/books">Book</Link></li>
              <li className="navbar-item "><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
        
      </nav>
      {props.children}
    </div>
    
  );
};

export default App