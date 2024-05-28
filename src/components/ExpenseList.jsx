import React from 'react';

const ExpenseList = ({ expenses }) => {
    return (
        <ul>
            {expenses.map((expense, index) => (
                <li key={index}>
                    {expense.month} - {expense.amount}: {expense.description}
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;
