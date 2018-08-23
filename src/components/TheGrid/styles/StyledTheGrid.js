import glamorous from "glamorous";
import { Grid } from 'golly'

const StyledGrid = glamorous(Grid);
export const StyledTheGrid = StyledGrid(
  {
    marginTop: 60
  }
)
export const GridImage = glamorous.img(
  {
    width: 100,
    height: 100
  }
)

export const GridTitle = glamorous.div(
  {
    fontSize: 18
  }
)
