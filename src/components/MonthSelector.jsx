import React from 'react';
import styled, { css } from 'styled-components';

const MonthSelector = ({ selectedMonth, handleMonthClick }) => {
    const months = [
        { id: 1, name: '1월' },
        { id: 2, name: '2월' },
        { id: 3, name: '3월' },
        { id: 4, name: '4월' },
        { id: 5, name: '5월' },
        { id: 6, name: '6월' },
        { id: 7, name: '7월' },
        { id: 8, name: '8월' },
        { id: 9, name: '9월' },
        { id: 10, name: '10월' },
        { id: 11, name: '11월' },
        { id: 12, name: '12월' },
    ];

    return (
        <Container>
            <MonthRow>
                {months.slice(0, 6).map((month) => (
                    <MonthTab
                        key={month.id}
                        onClick={() => handleMonthClick(month.id)}
                        active={selectedMonth === month.id}
                        monthId={month.id}
                        isJanuary={month.id === 1}
                    >
                        {month.name}
                    </MonthTab>
                ))}
            </MonthRow>
            <MonthRow>
                {months.slice(6).map((month) => (
                    <MonthTab
                        key={month.id}
                        onClick={() => handleMonthClick(month.id)}
                        active={selectedMonth === month.id}
                        monthId={month.id}
                    >
                        {month.name}
                    </MonthTab>
                ))}
            </MonthRow>
        </Container>
    );
};

const Container = styled.div`
    width: 50%;
    margin: 0 auto;
    border: 1px solid black;
    padding: 10px 5px;
    border-radius: 5px;
`;

const MonthRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

const monthTabStyles = css`
    padding: 10px;
    cursor: pointer;
    background-color: ${({ active }) => (active ? 'lightblue' : 'transparent')};
    border: 2px solid black;
    margin: 5px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    flex: 1;
`;

const MonthTab = styled.div.attrs((props) => ({
    'data-month-id': props.monthId, // 필터링 된 props
}))`
    ${monthTabStyles}

    &:hover {
        background-color: ${({ monthId, isJanuary }) => {
            if (isJanuary) return 'blue';
            if (monthId === 1 || monthId === 12 || monthId === 2) return 'blue';
            if (monthId >= 3 && monthId <= 5) return 'lightpink';
            if (monthId >= 6 && monthId <= 8) return 'lightblue';
            if (monthId >= 9 && monthId <= 11) return 'orange';
            return 'transparent';
        }};
        color: ${({ active }) => (active ? 'white' : 'black')};
    }
`;

export default MonthSelector;
