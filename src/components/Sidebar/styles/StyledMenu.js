import glamorous from "glamorous";
import { NavLink } from "react-router-dom";

const StyledNavLink = glamorous(NavLink);
export const MenuItem = StyledNavLink(
  {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14',
    padding: '10px 20px',
    borderBottom: '1px solid #383C3D',
    width: '100%',
    ':hover': {
      color: 'grey'
    },
    ':active': {
      color: 'grey'
    },
    ':first-child': ({
      borderTop: '1px solid #383C3D',
    })
  });