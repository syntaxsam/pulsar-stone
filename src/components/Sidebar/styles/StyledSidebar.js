import glamorous from "glamorous";

export const StyledSidebar = glamorous.div(
  {
    background: '#2D2D2D',
    padding: '40px',
    flex: '0 0 200px',
    height: '100vh'
  }
)

export const Logo = glamorous.div(
  {
    maxWidth: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
)

export const LogoImage = glamorous.img(
  {
    maxWidth: "100%",
    width: "100",
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