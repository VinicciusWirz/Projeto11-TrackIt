import { useContext } from "react";
import styled from "styled-components";
import UserInfoContext from "../contexts/UserInfoContext";

export default function Header() {
  const {userInfo} = useContext(UserInfoContext)
    return (
        <HeaderStyle data-test="header">
            <h1>TrackIt</h1>
            <img src={userInfo.image ? userInfo.image : "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"} alt='usuário' />
        </HeaderStyle>
    );
}

const HeaderStyle = styled.header`
  width: 100vw;
  position: fixed;
  z-index: 2;
  background: #126BA5;
  height: 70px;
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
  padding: 0 18px;
  img{
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;