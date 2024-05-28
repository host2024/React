import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonthSelector from './MonthSelector';

const ExpenseForm = ({ addExpense }) => {
    const [formData, setFormData] = useState({
        date: '',
        item: '',
        amount: '',
        description: '',
    });

    const { date, item, amount, description } = formData;
    const [selectedMonth, setSelectedMonth] = useState(1); // 처음에는 1월로 설정

    const handleMonthClick = (monthId) => {
        setSelectedMonth(monthId);
        const newDate = new Date();
        newDate.setMonth(monthId - 1); // monthId는 1부터 시작하기 때문에 1을 빼줍니다.
        newDate.setDate(1); // 해당 월의 첫째 날로 설정
        setFormData({
            ...formData,
            date: newDate.toISOString().split('T')[0], // ISO 문자열로 변환하여 저장
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense(formData);
        setFormData({
            date: '',
            item: '',
            amount: '',
            description: '',
        });
    };

    // 컴포넌트가 마운트될 때 실행되어 처음에는 1월로 설정
    useEffect(() => {
        handleMonthClick(selectedMonth);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <InputContainer>
                <div>
                    <label htmlFor="date">날짜</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleChange}
                        required
                        placeholder="날짜를 선택하세요"
                    />
                </div>
                <div>
                    <label htmlFor="item">항목</label>
                    <input
                        type="text"
                        id="item"
                        name="item"
                        value={item}
                        onChange={handleChange}
                        required
                        placeholder="항목을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="amount">금액</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        onChange={handleChange}
                        required
                        placeholder="금액을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="description">내용</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        required
                        placeholder="내용을 입력하세요"
                    />
                </div>

                <CustomButton type="submit">저장</CustomButton>
            </InputContainer>
            <MonthSelector selectedMonth={selectedMonth} handleMonthClick={handleMonthClick} />
        </form>
    );
};

const InputContainer = styled.div`
    display: flex;
    flex-direction: row; /* 가로 방향으로 아이템을 배치 */
    align-items: center;
    justify-content: center; /* 아이템을 가운데 정렬 */
    width: 49.5%; /* 너비를 더 넓게 설정 */
    margin: 0 auto;
    padding: 10px; /* 내부 여백 */
    border: 1px solid black; /* 통으로 둘러싸는 테두리 스타일 */
    margin-bottom: 20px;
    margin-top: 40px;

    & > div {
        display: flex;
        flex-direction: column; /* 세로 방향으로 아이템을 배치 */
        align-items: flex-start; /* 아이템을 왼쪽 정렬 */
        margin-right: 50px; /* 오른쪽 간격 설정 */
    }

    & input,
    & button {
        margin-top: 5px; /* 각각의 인풋과 버튼 위 여백 설정 */
    }

    & label {
        margin-bottom: 5px; /* 각 인풋 위의 텍스트들의 아래 여백 설정 */
    }
`;

const CustomButton = styled.button`
    background-color: blue; /* 버튼 배경색 */
    color: white; /* 버튼 텍스트 색상 */
    padding: 10px 20px; /* 버튼 내부 여백 */
    border: none; /* 버튼 테두리 없애기 */
    border-radius: 5px; /* 버튼 모서리 둥글게 처리 */
    cursor: pointer; /* 마우스 커서를 포인터로 변경 */
    transition: background-color 0.3s; /* 배경색 변화에 대한 전환 효과 */
    width: 120px; /* 버튼 너비를 조절하여 양옆으로 살짝 길게 만듦 */

    &:hover {
        background-color: #357abd; /* 마우스 오버시 연한 파란색으로 배경색 변경 */
    }
`;

export default ExpenseForm;
