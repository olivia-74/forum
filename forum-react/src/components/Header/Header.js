import React from 'react';
import logo from '../../assets/empregologo.png';


const Header1 = () => {
  return (
    <header style={{ textAlign: 'center' }}>
      <img
        src={logo}
        alt="Logo"
        style={{ maxWidth: '100%', height: '80px' }}
      />
    </header>
  )
}

export default Header1;
