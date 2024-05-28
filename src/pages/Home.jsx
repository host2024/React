import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import MonthSelector from '../components/MonthSelector';
import ExpenseList from '../components/ExpenseList';

const Home = () => {
    const [selectedMonth, setSelectedMonth] = useState('January');
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList />
        </div>
    );
};

export default Home;
