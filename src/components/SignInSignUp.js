import styled from "styled-components";
import logo from "../assets/trackitLogo.svg"
import UserInfo from "./UserInfo";

export default function SignInSignUp({id}) {
    return (
        <MainStyle>
            <img src={logo} />
            <UserInfo id={id} />
        </MainStyle>
    )
}


const MainStyle = styled.main`
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
