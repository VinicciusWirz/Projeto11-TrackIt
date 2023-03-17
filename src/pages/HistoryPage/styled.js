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
    -webkit-tap-highlight-color: transparent;
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


export const ModalStyle = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding-top: 105px;
    /* align-items: center; */
`;
export const HabitList = styled.ul`
    width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    margin-top: 55px;
    padding-top: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    min-height: 115px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    li:not(:first-child){
        margin-top: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

export const ModalContainer = styled.section`
    width: 100%;
    background-color: #E5E5E5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    position: relative;
    height: 500px;
    max-height: 65%;
    scrollbar-width:none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0px;
        display: none;
    }

    @media (min-width: 375px) {
        width: 375px;
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const ModalTitle = styled.div`
    position: absolute;
    top: 0;
    background-color: #126BA5;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    border-radius: 5px 5px 0px 0px;
    padding: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const HabitCard = styled.li`
    width: 100%;
    background-color: #ffff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        max-width: 75%;
        overflow-y: hidden;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
`;

export const CheckBox = styled.div`
    background-color: ${(props) => props.background};
    color: #ffff;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const Result = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffff;
    margin-top: 10px;
    padding: 10px;
    border-radius: 9px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const ResultMessage = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
`;