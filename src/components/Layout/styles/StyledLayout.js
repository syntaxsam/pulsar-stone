import glamorous from "glamorous";

export const StyledLayout = glamorous.div(
  {
    display: 'flex',
    alignItems: 'stretch',
  }
)

export const Content = glamorous.div(
  {
    padding: '40px 60px 60px 60px',
    width: '100%',
  }
)

export const Text = glamorous.p(
  {
    fontSize: '18',
    lineHeight: '1.75'
  }
)

export const PageTitle = glamorous.h1(
  {
    fontSize: 30,
    fontWeight: '600'
  }, ({ theme }) => ({
    color: theme.color.darkGrey
  })
)