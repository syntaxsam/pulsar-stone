import React from 'react';
import { MenuItem } from './styles/StyledMenu'

const Menu = () =>
  <div>
    <MenuItem to='/' exact activeClassName="active">What's Pulsar Stone</MenuItem>
    <MenuItem to='/cards' exact activeClassName="active">Card Rows</MenuItem>
  </div>

export default Menu;