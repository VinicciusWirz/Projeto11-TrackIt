import styled from "styled-components";
import Days from "../../../components/Days";
import trashIcon from "../../../assets/trash.svg"

export default function HabitCard() {
    return (
        <HabitWrapper>
            <div>
                Nome do hábito
                <img src={trashIcon}/>
            </div>
            <ButtonsWrapper>
                <Days />
            </ButtonsWrapper>
        </HabitWrapper>
    );
}

const HabitWrapper = styled.li`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 13px 11px 15px 15px;
    margin-bottom: 10px;
    div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            align-self: flex-start;
        }
    }
`;

const ButtonsWrapper = styled.div`
    margin-top: 8px;
    button{
        margin-right: 4px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

`;