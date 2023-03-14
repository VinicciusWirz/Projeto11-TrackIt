import { Link } from "react-router-dom";
import styled from "styled-components";

export default function UserInfo({ id }) {
    return (
        <InputsStyles>
            <>
                <form>
                    <input placeholder="email" type='text' required />
                    <input placeholder="senha" type={id === 'login' ? 'password' : 'text'} required />
                    {id === 'signup' &&
                        <>
                            <input placeholder="nome" type='text' required />
                            <input placeholder="foto" type='text' required />
                        </>
                    }
                    <Link to={id === 'login' ? '/hoje' : '/'}>
                    <button>{id === 'login' ? 'Entrar' : 'Cadastrar'}</button>
                    </Link>
                </form>
                <Link to={id === 'login' ? '/cadastro' : '/'}>
                    {id === 'login' ? 'Não tem uma conta? Cadastre-se!' : 'Já tem uma conta? Faça login!'}
                </Link>
            </>
        </InputsStyles>
    )
}
const InputsStyles = styled.div`
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