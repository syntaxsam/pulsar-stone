import React from 'react';
import { Link } from 'react-router-dom'

const Menu = () =>
  <div>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
  </div>

export default Menu;