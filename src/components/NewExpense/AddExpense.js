import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box, Button } from "@material-ui/core";

const AddExpense = ({ onAddExpense }) => {
  // Expense form state and functions
  const [isFormVisible, setIsFormVisible] = useState(false);

  const fnShowExpenseForm = () => {
    setIsFormVisible(true);
  };
  const fnHideExpenseForm = () => {
    setIsFormVisible(false);
  };

  // Function as prop passed down from parent
  const fnNewExpenseData = (expenseData) => {
    onAddExpense(expenseData);
  };

  return (
    <Card variant="outlined">
      <CardContent style={{ padding: "10px 15px" }}>
        {!isFormVisible && (
          <Box display="flex" justifyContent="center">
            <Button
              type="button"
              color="primary"
              variant="contained"
              onClick={fnShowExpenseForm}
            >
              Add a new expense
            </Button>
          </Box>
        )}
        {isFormVisible && (
          <ExpenseForm
            onSaveExpenseItem={fnNewExpenseData}
            onCancel={fnHideExpenseForm}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default AddExpense;
