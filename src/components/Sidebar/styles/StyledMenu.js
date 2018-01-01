import glamorous from "glamorous";
import { NavLink } from "react-router-dom";

const StyledNavLink = glamorous(NavLink);
export const MenuItem = StyledNavLink(
  {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16',
    padding: '11px 25px',
    width: '100%',
    position: 'relative',
    transition: "all .2s linear",
    '.active': {
      ':before': {
        content: `''`,
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "calc(100% + 1px)",
        width: "5px",
      }
    }
  }, ({ theme }) => ({
    ':hover': {
      backgroundColor: '#23272A'
    },
    '.active': {
      backgroundColor: '#23272A',
      ':before': {
        backgroundColor: theme.color.blue,
      }
    }
  })
)