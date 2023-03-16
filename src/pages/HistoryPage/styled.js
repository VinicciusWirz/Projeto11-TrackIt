import styled from "styled-components";

export const Title = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    margin-bottom: 17px;
`;

export const HistoryContainer = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    border-radius: 10px;
    -webkit-tap-highlight-color: none;
    justify-self: center;
    width: 100%;
    display: flex;
    justify-content: center;
    .react-calendar{
        width: 335px;
        background-color: #fff;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        button{
            font-family: 'Lexend Deca';
        }
    }
    .react-calendar__navigation{
        button{
            border-radius: 0px;
        }
    }
    .react-calendar__tile--now{
        border-radius: 0px;
    }
    .react-calendar__month-view__days{
        button{
            width: 45px;
            height: 45px;
        }
    }
    .react-calendar__tile{
        position: relative;
    }
    button{
        border-radius: 50%;
    }
`;

export const Day = styled.div`
    background-color: ${({ background }) => background};
    color: black;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;