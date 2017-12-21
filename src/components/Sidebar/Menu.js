import React from 'react';
import { MenuItem } from './styles/StyledMenu'

const Menu = () =>
  <div>
    <MenuItem to='/'>Home</MenuItem>
    <MenuItem to='/about'>About</MenuItem>
  </div>

export default Menu;