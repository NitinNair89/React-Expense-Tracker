import React from 'react'
import ExpenseItem from './ExpenseItem';
import FallbackUI from './misc/FallbackUI';

const ExpenseItemUI = ({items}) => {

    if ( items.length === 0 ) {
        return <FallbackUI message="There are no expenses for the selected year." type="info" />;
    }

    return (
        <>
            {items.map(e => (
                <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
            ))}
        </>
    )
}

export default ExpenseItemUI
