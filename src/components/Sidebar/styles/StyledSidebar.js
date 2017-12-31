import glamorous from "glamorous";

export const StyledSidebar = glamorous.div(
  {
    padding: '40px 20px',
    flex: '0 0 240px',
    height: '100vh'
  }, ({ theme }) => ({
    backgroundColor: theme.color.darkGrey
  })
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
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: '40',
    textAlign: 'center',
  },
  ({ theme }) => ({
    color: theme.color.lightBlue
  })
)