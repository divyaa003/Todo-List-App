import React from 'react';
import './Header.css';

const Header = ({ title }) => {
  return (
    <header>
      <main className='headerMain'><h1>{title}</h1></main>
    </header>
  )
}

Header.defaultProps = { title: "AURORA AGENDA" };

export default Header