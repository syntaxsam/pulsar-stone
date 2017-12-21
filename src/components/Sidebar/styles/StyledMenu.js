import glamorous from "glamorous";
import { NavLink } from "react-router-dom";

const StyledNavLink = glamorous(NavLink);
export const MenuItem = StyledNavLink(
  {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14',
    paddingTop: '5',
    paddingBottom: '5',
    ':hover': {
      color: 'grey'
    },
    ':active': {
      color: 'grey'
    }
  });