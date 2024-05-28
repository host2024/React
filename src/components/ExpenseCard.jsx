import React from 'react';
import styled from 'styled-components';

const ExpenseCard = ({ expense }) => {
    return (
        <Card>
            <p>날짜: {expense.date}</p>
            <p>항목: {expense.item}</p>
            <p>금액: {expense.amount}</p>
            <p>설명: {expense.description}</p>
        </Card>
    );
};

const Card = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
`;

export default ExpenseCard;
