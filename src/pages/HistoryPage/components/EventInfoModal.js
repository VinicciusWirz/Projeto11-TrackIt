import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";
import checkMark from "../../../assets/check.svg";
import weekday from "../../../constants/weekday";

export default function EventInfoModal({ setModal, modal }) {
    const dayOfTheWeek = (modal.habits[0].weekDay > 0 && modal.habits[0].weekDay < 6) ?
        `${weekday[modal.habits[0].weekDay]}-feira`
        :
        weekday[modal.habits[0].weekDay];

    const colors = {
        complete: '#8FC549',
        partial: '#ea5766'
    }
    const progressDay = (everyDone() * 100) / modal.habits.length;

    function turnOffModal() {
        setModal(false);
    }

    function everyDone() {
        let aux = 0;
        modal.habits.forEach((habit) => habit.done === true && aux++);
        return aux;
    }

    return (
        <ModalStyle onClick={(e) => turnOffModal(e)}>
            <ModalContainer onClick={(event) => event.stopPropagation()}>
                <Title>
                    <p>
                        {dayOfTheWeek}
                    </p>
                    <p>
                        {modal.day}
                    </p>
                </Title>
                <HabitList>
                    {modal.habits.map((habit) =>
                        <HabitCard key={habit.id}>
                            <p>
                                {habit.name}
                            </p>
                            <CheckBox background={habit.done ? colors.complete : colors.partial}>
                                {habit.done ? <img src={checkMark} /> : <div>X</div>}
                            </CheckBox>
                        </HabitCard>
                    )}
                </HabitList>
                <Result>
                    <Progress backgroundColor={progressDay === 100 ? colors.complete : colors.partial} >
                        <CircularProgressbar
                            text={`${progressDay}%`}
                            value={progressDay}
                            backgroundPadding='6px'
                            styles={buildStyles({
                                backgroundColor: '#52B6FF',
                                textColor: '#fff',
                                pathColor: '#fff',
                                trailColor: 'transparent'
                            })}
                        />
                    </Progress>
                    <ResultMessage>
                        {progressDay === 100 ? (
                            <>
                                <p>Muito bem, você conseguiu fazer tudo!</p>
                                <p>😄</p>
                            </>) :
                            progressDay > 0 ? (
                                <>
                                    <p>Quase lá!</p>
                                    <p>🙂</p>
                                </>
                            ) :
                                <p>Não concluiu nada no dia</p>}
                    </ResultMessage>
                </Result>

            </ModalContainer>
        </ModalStyle>
    )
}
function Progress(props) {
    return (
        <div
            style={{
                width: '91px',
                background: props.backgroundColor,
                padding: '6px',
                borderRadius: '50%'
            }}
        >
            {props.children}
        </div>
    )
}
const ModalStyle = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const HabitList = styled.ul`
    width: 100%;
    margin-top: 15px;
    max-height: 20%;
    overflow-y: scroll;
    margin-top: 55px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

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
const ModalContainer = styled.section`
    width: 375px;
    background-color: #E5E5E5;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    position: relative;
    max-height: 55%;
    scrollbar-width:none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const Title = styled.div`
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
    padding: 2px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const HabitCard = styled.li`
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
const CheckBox = styled.div`
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

const Result = styled.div`
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

const ResultMessage = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
`;
