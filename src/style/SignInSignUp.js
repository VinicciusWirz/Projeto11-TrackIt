import styled from "styled-components";

export const MainStyle = styled.main`
    display: flex;
    background: #FFFFFF;
    width: 100vw;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    position: fixed;
    z-index: 10;
    img{
        margin-top: 68px;
    }
`;

export const InputsStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
form{
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    input{
        width: 303px;
        height: 45px;
        left: 36px;
        top: 279px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        padding: 11px;
        margin-bottom: 6px;
        &::placeholder{
            color: #DBDBDB;
        }
    }
    input:disabled{
        background: #F2F2F2;
        color: #AFAFAF;
    }
    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button:disabled{
        opacity: 0.7;
    }
}
a{
    margin-top: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
}
`;