import React from 'react';
import Logo from '../components/logo';
import Icon from '../components/icon';
import Menu from '../components/menu';


class Main extends React.Component{
  render(){
    return(
      <div className="container">
        <header className="header">
          <Icon />
          <Logo />
        </header>
        <nav className="navigation">
          <Menu />

        </nav>
        <main className="content">
          <img className="picogram-image" src="https://ih1.redbubble.net/image.195004521.4649/flat,800x800,075,f.u5.jpg"></img>

        </main>
        <footer className="footer">
          <p>&copy; 2017 Boris</p>
        </footer>
      </div>
    );
  }
}

export default Main;
