import styled from "styled-components";

export const PageContainer = styled.div`
    background-color:#F2F2F2;
    width: 100%;
    height: 92vh;
    margin-top: 70px;
    padding: 22px 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    nav{
        color: #126BA5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 28px;
    }
`;
export const AddHabit = styled.button`
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 5px;
            border: none;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 27px;
            text-align: center;
            padding-bottom: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFFFFF;
`;

export const MenuAddHabitStyle = styled.form`
    width: 100%;
    height: 180px;
    left: 17px;
    top: 147px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 29px;
    input{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 45px;
        padding: 0 11px;
        width: 100%;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        &::placeholder{
            color:#d4d4d4;
        }
    }
    div:nth-child(1){
        button{
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
            color: #DBDBDB;
            margin-top: 8px;
            margin-right: 4px;
        }
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    button{
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
    }
    button:nth-child(1){
        color: #52B6FF;
        background-color: #FFFFFF;
    }
`;