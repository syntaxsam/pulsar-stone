import glamorous from "glamorous";

export const StyledSidebar = glamorous.div(
  {
    background: '#1A1A1C',
    padding: '40px',
    flex: '0 0 200px',
    height: '100vh'
  }
)

export const Logo = glamorous.div(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
)

export const LogoImage = glamorous.img(
  {
    width: "80px",
    height: "auto"
  }
)

export const LogoText = glamorous.div(
  {
    color: '#fff',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: '40'
  }
)