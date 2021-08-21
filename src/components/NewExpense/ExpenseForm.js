import React, { useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
  Tooltip,
  useMediaQuery,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";

// Style
const fnUseStyles = makeStyles((theme) => ({
  customGridItem: {
    marginBottom: 5,
    padding: theme.spacing(1),
  },
}));

const ExpenseForm = ({ onSaveExpenseItem, onCancel }) => {
  const isSmallScreen = useMediaQuery("(max-device-width:425px)");

  const classes = fnUseStyles();

  // Input field error states
  const [enteredAmount, setEnteredAmount] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [dateError, setDateError] = useState(false);

  // Expense title state and function
  const [enteredTitle, setEnteredTitle] = useState("");
  const fnTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    setTitleError(false);
  };

  // Expense date state and function
  const [selectedDate, handleDateChange] = useState(new Date());
  const fnDateChangeHandler = (value) => {
    handleDateChange(value);
    setDateError(false);
  };

  // Expense amount state and function
  const [amountError, setAmountError] = useState(false);
  const fnAmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    setAmountError(false);
  };

  // Resets input fields state
  const fnClearFields = () => {
    handleDateChange(new Date());
    setEnteredTitle("");
    setEnteredAmount("");
  };

  // Validates inputs field and saves expense data
  const fnSaveFormData = (event) => {
    event.preventDefault();
    let isError = false;

    // Invalid expense title
    if (!enteredTitle) {
      isError = true;
      setTitleError(true);
    }

    // Invalid expense amount
    if (!enteredAmount) {
      isError = true;
      setAmountError(true);
    }

    // Invalid expense date
    if (!selectedDate || new Date(selectedDate).getFullYear() < "2019") {
      isError = true;
      setDateError(true);
    }

    if (!isError) {
      const expenseData = {
        id: Math.random(),
        title: enteredTitle,
        amount: +enteredAmount,
        date: selectedDate,
      };
      onSaveExpenseItem(expenseData);
      fnClearFields();
      onCancel();
    }
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <form noValidate autoComplete="off" onSubmit={fnSaveFormData}>
          <Grid container component="div" className={classes.customGridItem}>
            <Grid item xs={12} className={classes.customGridItem}>
              <TextField
                type="text"
                id="expense-title"
                label="Expense Title"
                placeholder="Example: Groceries"
                helperText="Title is required"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                onChange={fnTitleChangeHandler}
                value={enteredTitle}
                error={titleError}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.customGridItem}>
              <KeyboardDatePicker
                clearable
                placeholder="MM/dd/yyyy"
                margin="normal"
                id="expense-date-dialog"
                label="Expense Date"
                format="MM/dd/yyyy"
                KeyboardButtonProps={{ "aria-label": "change date" }}
                value={selectedDate}
                onChange={(date) => fnDateChangeHandler(date)}
                minDate="2019-01-01"
                minDateMessage="Year should not be before 2019"
                error={dateError}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.customGridItem}>
              <TextField
                type="number"
                id="expense-amount"
                label="Expense Amount"
                placeholder="Example: 100"
                helperText="Amount is required"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={enteredAmount}
                onChange={fnAmountChangeHandler}
                error={amountError}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid
            container
            component="div"
            direction={isSmallScreen ? "column" : "row-reverse"}
            className={classes.customGridItem}
          >
            <Grid item xs={12} sm={6} className={classes.customGridItem}>
              <Tooltip title="Save expense to list">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Save Expense
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.customGridItem}>
              <Tooltip title="Close form">
                <Button type="button" onClick={onCancel} fullWidth>
                  Cancel
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </form>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default ExpenseForm;
