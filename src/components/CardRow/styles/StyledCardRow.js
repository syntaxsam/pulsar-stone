import glamorous from "glamorous";

export const StyledCardRow = glamorous.div(
  {
    backgroundColor: "#fff",
    border: '1px solid #fff',
    position: "relative",
    top: "0",
    right: "0",
    minHeight: "104px",
    width: "100%",
    flex: "0 0 100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    transition: "all .1s linear",
    ":before": {
      content: `''`,
      position: "absolute",
      zIndex: "2",
      top: "-1px",
      right: "0px",
      transition: "all .1s linear"
    },
    ":hover": {
      backgroundColor: "#eee",
      border: '1px solid #ccc',
      ":before": {
        backgroundColor: 'purple',
        height: "calc(100% + 1px)",
        width: "5px"
      },
    }
  }
)

export const Details = glamorous.div(
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  }
)

export const CardName = glamorous.div(
  {
    fontSize: '16',
    fontWeight: '400',
    padding: '0px 0px 0px 30px'
  }
)