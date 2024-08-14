import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <header>
        <a href="/">

      <h1>Real<span> Estate</span> Maroc</h1>
        </a>
      <nav>
        <ul className="link">
          <li key="home">
            <a onClick={() => setMenu('home')} href="/" >
              Home {menu === 'home' ? <hr /> : null}
            </a>
          </li>
          <li key="about">
            <a onClick={() => setMenu('About')} href="/About">
              About Me {menu === 'About' ? <hr /> : null}
            </a>
          </li>
          <li key="service">
            <a onClick={() => setMenu('Service')} href="#Services">
              Service {menu === 'Service' ? <hr /> : null}
            </a>
          </li>
         
          <li key="contact">
            <a onClick={() => setMenu('Contact')} href="#Contact">
              Contact {menu === 'Contact' ? <hr /> : null}
            </a>
          </li>
        </ul>
      </nav>
      <div className="btn">
      <a href="/Login"> <button className='in'>Login</button></a>
          <a href="/Register"> <button className='up'>Register</button></a>
        </div>
    </header>
  );
};

export default Navbar;