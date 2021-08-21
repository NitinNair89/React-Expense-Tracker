import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  expenseDate: {
    borderRadius: 5,
    padding: "10px 15px",
    width: "3rem",
  },
  expDate: {
    fontSize: 22,
    fontWeight: 700,
  },
  expYear: {
    fontSize: 12,
  },
  expMonth: {
    fontSize: 16,
  },
});

const ExpenseDate = (props) => {
  const savedDate = new Date(props.date);

  const isSmallScreen = useMediaQuery("(max-device-width:425px)");

  const classes = useStyles();
  const month = savedDate.toLocaleString("en-US", { month: "long" });
  const date = savedDate.toLocaleString("en-US", { day: "2-digit" });
  const year = savedDate.getFullYear();

  if (isSmallScreen) {
    return (
      <>
        <Typography component="span" color="textSecondary">
          {month}{" "}
        </Typography>
        <Typography component="span" color="textSecondary">
          {date},{" "}
        </Typography>
        <Typography component="span" color="textSecondary">
          {year}
        </Typography>
      </>
    );
  } else {
    return (
      <Paper variant="outlined" className={classes.expenseDate}>
        <Typography component="div" className={classes.expYear}>
          {year}
        </Typography>
        <Typography component="div" className={classes.expMonth}>
          {month}
        </Typography>
        <Typography component="div" className={classes.expDate}>
          {date}
        </Typography>
      </Paper>
    );
  }
};

export default ExpenseDate;
