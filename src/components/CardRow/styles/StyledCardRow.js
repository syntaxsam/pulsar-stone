import glamorous from "glamorous";

export const StyledCardRow = glamorous.div(
  {
    backgroundColor: "#fff",
    border: '1px solid #fff',
    borderBottom: '1px solid #ccc',
    position: "relative",
    top: "0",
    right: "0",
    minHeight: "120px",
    width: "100%",
    flex: "0 0 100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "20px",
    transition: "all .1s linear",
    ":first-child": {
      borderTop: '1px solid #ccc',
    },
    ":before": {
      content: `''`,
      position: "absolute",
      zIndex: "2",
      top: "-1px",
      right: "0px",
      transition: "all .1s linear"
    },
    ":hover": {
      border: '1px solid #ccc',
      ":before": {
        backgroundColor: 'purple',
        height: "calc(100% + 1px)",
        width: "5px",
      },
      "& .expandButton": {
        opacity: 1,
        top: 40
      }
    }
  }, ({ theme }) => ({
    ":hover": {
      ":before": {
        backgroundColor: theme.color.blueTwo,
      }
    }
  }),
  ({ isExpanded, theme }) => ({
    minHeight: isExpanded ? "250px" : "120px",
    backgroundColor: isExpanded ? "#eee" : "transparent",
    border: isExpanded ? "1px solid #ccc" : "1px solid #fff",
    ":before": {
      backgroundColor: isExpanded ? theme.color.blueTwo : "transparent",
      height: isExpanded ? "calc(100% + 1px)" : "0px",
      width: isExpanded ? "5px" : "0px"
    },
    "& .expandButton": {
      opacity: isExpanded ? 1 : 0,
      top: isExpanded ? 40 : 50
    }
  })
)

export const Details = glamorous.div(
  {
    display: "flex",
    alignItems: "center",
    height: "78px"
  }
)

export const CardName = glamorous.div(
  {
    fontSize: '16',
    fontWeight: '400'
  }
)

export const ExpandButton = glamorous.div(
  {
    position: 'absolute',
    right: "20px",
    transition: 'all .3s linear',
    color: 'white',
    padding: '10px 30px',
    borderRadius: 4,
    cursor: 'pointer',
    opacity: '0',
    top: 50,
  }, ({ theme }) => ({
    backgroundColor: theme.color.blueTwo,
    ":hover": {
      backgroundColor: theme.color.blueThree,
    }
  })
)

export const ExpandedRow = glamorous.div(
  {
    display: "flex",
    alignItems: 'center',
    justifyContent: "space-between",
    flex: "0 0 100%",
    width: "100%",
    position: "relative",
    height: 0,
  },
  ({ isExpanded }) => ({
    opacity: isExpanded ? "1" : "0",
    height: isExpanded ? 'auto' : "0",
  })
)

export const ExpandedRowDetails = glamorous.div(
  {
    padding: "0px",
    opacity: '0',
  },
  ({ isExpanded }) => ({
    opacity: isExpanded ? "0" : "1",
    padding: '40px 0px 20px 0px',
  })
)

// Practice using three states