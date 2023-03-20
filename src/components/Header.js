import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserInfoContext from "../contexts/UserInfoContext";

export default function Header() {
  const { userInfo } = useContext(UserInfoContext);
  const [menuOptions, setMenuOptions] = useState(false);
  const defaultUserImage = "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"

  function logout() {
    const message = 'Você quer fazer logoff?';
    if (window.confirm(message)) {
      localStorage.clear();
      window.location.reload();
    }
  }

  return (
    <HeaderStyle data-test="header">
      <section>
        <h1>TrackIt</h1>
        <img
          src={userInfo.image ? userInfo.image : defaultUserImage}
          alt='usuário'
          onClick={() => setMenuOptions(!menuOptions)}
          onError={(e) => e.target.src = defaultUserImage}
        />
      </section>
      <DropdownMenu menuOptions={menuOptions}>
        <p>
          {`Olá ${userInfo.name}`}
        </p>
        <p>
          {`Bem vindo(a)!`}
        </p>
        <Break />
        <ul>
          <li onClick={() => alert('Função será implementada no futuro')}>
            Contatos
          </li>
          <Break />
          <li onClick={() => alert('Função será implementada no futuro')}>
            Configurações
          </li>
          <Break />
          <li onClick={logout}>Logout</li>
        </ul>
      </DropdownMenu>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100vw;
  position: fixed;
  z-index: 2;
  background: #126BA5;
  left: 0px;
  top: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Playball';
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 49px;
  color: #FFFFFF;
  cursor: default;
  section{
    width: 100%;
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 18px;
    background: #126BA5;
  }
  img{
    width: 51px;
    height: 51px;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
  }
`;
const DropdownMenu = styled.div`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  position: absolute;
  z-index: -1;
  top: 100%;
  right: 0;
  background: #126BA5;
  width: 140px;
  display: flex;
  flex-direction: column;
  text-align: end;
  padding: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding-right: 20px;
  border-radius: 0px 0px 5px 5px;
  transition: transform 0.5s ease-in;
  transform: translateY(${({ menuOptions }) => menuOptions ? '0%' : '-200%'});
  p{
    align-self: flex-end;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    &:not(:first-child){
      margin-bottom: 5px;
    }
  }
  ul{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 12px;
    a{
      color: #FFFFFF;
      text-decoration: none;
    }
    li{
      width: 80%;
      text-align: end;
      cursor: pointer;
      padding: 3px 0px;
    }
  }
`;
const Break = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0.2) 100%);
`;