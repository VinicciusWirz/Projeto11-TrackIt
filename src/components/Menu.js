import styled from "styled-components";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { Link, useNavigate } from "react-router-dom";
import UserInfoContext from "../contexts/UserInfoContext";
import { useContext, useEffect } from "react";
import TokenContext from "../contexts/TokenContext";

export default function Menu() {
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const { tokenStored, setTokenStored } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!tokenStored) {
            if (localStorage.getItem('userData') !== null) {
                const localData = JSON.parse(localStorage.getItem('userData'));
                setUserInfo({ ...userInfo, ...localData });
                setTokenStored(true);
            } else {
                navigate('/');
            }
        }
    }, []);

    return (
        <MenuStyle data-test="menu">
            <div>
                <Link to='/habitos' data-test="habit-link">
                    Hábitos
                </Link>
            </div>

            <div>
                <Link to='/hoje' data-test="today-link">
                    <Progress>
                        <CircularProgressbar
                            text='Hoje'
                            value={isNaN(userInfo.progress) ? '0' : userInfo.progress}
                            backgroundPadding='6px'
                            styles={buildStyles({
                                backgroundColor: '#52B6FF',
                                textColor: '#fff',
                                pathColor: '#fff',
                                trailColor: 'transparent'
                            })}
                        />
                    </Progress>
                </Link>
            </div>

            <div>
                <Link to='/historico' data-test="history-link">
                    Histórico
                </Link>
            </div>
        </MenuStyle>
    );
}

function Progress(props) {
    return (
        <div
            style={{
                width: '91px',
                background: '#52B6FF',
                padding: '6px',
                borderRadius: '50%',
                marginBottom: '40px'
            }}>
            {props.children}
        </div>
    );
}

const MenuStyle = styled.footer`
  position: fixed;
  width: 100vw;
  z-index: 2;
  height: 70px;
  left: 0px;
  bottom: 0px;
  border-radius: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #FFF;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #52B6FF;
  a{
    color: #52B6FF;
    text-decoration: none;
  }
`;