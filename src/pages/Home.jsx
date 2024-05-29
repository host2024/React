import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import MonthSelector from '../components/MonthSelector';
import ExpenseList from '../components/ExpenseList';

const Home = () => {
    const [selectedMonth] = useState(1);
    const [expenses, setExpenses] = useState([]); // expenses 상태 추가

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]); // 새로운 비용을 expenses에 추가
    };

    return (
        <div>
            <ExpenseForm selectedMonth={selectedMonth} addExpense={addExpense} />
            <ExpenseList expenses={expenses} /> {/* 변경된 expenses를 전달 */}
        </div>
    );
};

export default Home;
