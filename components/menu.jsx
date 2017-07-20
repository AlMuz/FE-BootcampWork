import React from 'react';
import {Link} from 'react-router';

class Menu extends React.Component{
  render(){
    return(
      <ul>
        <li><Link to="/">1</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    );
  }
}

export default Menu;
