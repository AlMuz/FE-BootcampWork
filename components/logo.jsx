import React from 'react';
import Icon from './icon';


class Logo extends React.Component{
  render(){
    return(
        <h1 className="picogram-logo">Picogram {this.props.name}</h1>


    );
  }
}

export default Logo;
