import React from 'react'
import Menu from './Menu'
import { StyledSidebar, Logo } from './styles/StyledSidebar'

const Sidebar = () =>
  <StyledSidebar>
    <Logo>Pulsar Stone</Logo>
    <Menu />
  </StyledSidebar>

export default Sidebar