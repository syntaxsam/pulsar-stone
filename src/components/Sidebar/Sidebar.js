import React from 'react'
import Menu from './Menu'
import { StyledSidebar, Logo, LogoText, LogoImage } from './styles/StyledSidebar'
import logo from './images/Pulsar-Stone-Logo-260.png'

const Sidebar = () =>
  <StyledSidebar>
    <Logo><LogoImage src={logo} alt="Pulsar Stone" /></Logo>
    <LogoText>Pulsar Stone</LogoText>
    <Menu />
  </StyledSidebar>

export default Sidebar