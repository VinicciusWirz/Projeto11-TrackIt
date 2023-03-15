import styled from "styled-components";

export const Title = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    margin-bottom: 28px;
    div:nth-child(1){
        color: #126BA5;
    }
`;
export const Progress = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color:${({ color }) => color};
`;

export const HabitContent = styled.li`
    padding: 13px 13px 12px 15px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    div:nth-child(1){
        display: flex;
        flex-direction: column;
        max-width: 72%;
    }
    h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        line-break: anywhere;
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }
`;

export const CheckBox = styled.div`
    min-width: 69px;
    min-height: 69px;
    max-width: 69px;
    max-height: 69px;
    background-color: ${(props) => props.done};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SequenceStyle = styled.span`
color:${({ done }) => done};
`;