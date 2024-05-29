import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MonthSelector from './MonthSelector';

const ExpenseForm = ({ addExpense, selectedMonth }) => {
    const [formData, setFormData] = useState({
        date: new Date(new Date().getFullYear(), selectedMonth - 1, 1).toISOString().split('T')[0], // 선택한 월의 첫째 날로 초기화
        item: '',
        amount: '',
        description: '',
    });

    const { item, amount, description } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault(); // 폼의 기본 동작 중지
        addExpense(formData);
        setFormData((prevData) => ({
            ...prevData,
            item: '',
            amount: '',
            description: '',
        }));
    };

    // 컴포넌트가 마운트될 때 실행되어 처음에는 1월로 설정
    useEffect(() => {
        const newDate = new Date();
        newDate.setMonth(selectedMonth - 1); // selectedMonth는 1부터 시작하기 때문에 1을 빼줍니다.
        newDate.setDate(1); // 해당 월의 첫째 날로 설정
        const newDateString = newDate.toISOString().split('T')[0];
        setFormData((prevData) => ({
            ...prevData,
            date: newDateString,
        }));
    }, [selectedMonth]);

    return (
        <form onSubmit={handleSubmit}>
            <InputContainer>
                <InputWrapper>
                    <label htmlFor="date">날짜</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        placeholder="날짜를 선택하세요"
                    />
                </InputWrapper>
                <InputWrapper>
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
                </InputWrapper>
                <InputWrapper>
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
                </InputWrapper>
                <InputWrapper>
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
                </InputWrapper>
                <CustomButton type="submit">저장</CustomButton>
            </InputContainer>
        </form>
    );
};

const InputContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* 가로 방향으로 아이템을 배치 */
    align-items: center;
    justify-content: center; /* 아이템을 가운데 정렬 */
    width: 49.5%; /* 너비를 더 넓게 설정 */
    margin: 0 auto;
    padding: 10px; /* 내부 여백 */
    border: 1px solid black; /* 통으로 둘러싸는 테두리 스타일 */
    margin-bottom: 20px;
    margin-top: 40px;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column; /* 세로 방향으로 아이템을 배치 */
    align-items: flex-start; /* 아이템을 왼쪽 정렬 */
    margin: 10px; /* 간격 설정 */
    flex: 1 1 200px; /* flex-grow, flex-shrink, flex-basis 설정으로 반응형 동작 추가 */

    & input {
        margin-top: 5px; /* 각각의 인풋 위 여백 설정 */
        width: 100%; /* 인풋 요소의 너비를 100%로 설정 */
        box-sizing: border-box; /* padding과 border를 포함한 전체 너비 설정 */
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
