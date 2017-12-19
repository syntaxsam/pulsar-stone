import glamorous from "glamorous";

export const StyledLayout = glamorous.div(
  {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh'
  }
)

export const Content = glamorous.div(
  {
    background: '#f5f3f3',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 60px 60px 60px',
    width: '100%',
    height: '100vh'
  }
)

export const Text = glamorous.p(
  {
    fontSize: '18',
    lineHeight: '1.75'
  }
)