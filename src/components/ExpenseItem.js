import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ExpenseDate from './ExpenseDate';
import '../css/ExpenseItem.css';

const ExpenseItem = (props) => {    
    return (
      <li style={{ marginTop: 5, marginBottom: 5 }}>
        <Card variant="outlined" className="expenseCardWrapper">
          <CardContent className="expenseCard">
            <ExpenseDate date={props.date} />
            <div className="expenseDescription">{props.title}</div>
            <div className="expenseAmount">${props.amount}</div>
          </CardContent>
        </Card>
      </li>
    );
}

export default ExpenseItem;
