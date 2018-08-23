import React from 'react';
import { MenuItem } from './styles/StyledMenu'

const Menu = () =>
  <div>
    <MenuItem to='/' exact activeClassName="active">What's Pulsar Stone?</MenuItem>
    <MenuItem to='/cards' exact activeClassName="active">Card Rows</MenuItem>
    <MenuItem to='/thegrid' exact activeClassName="active">The Grid</MenuItem>
    <MenuItem to='/advancedpatterns' exact activeClassName="active">Advanced Patterns</MenuItem>
    <MenuItem to='/controlledcomponents' exact activeClassName="active">Controlled Components</MenuItem>
  </div>

export default Menu;