import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";
import checkMark from "../../../assets/check.svg";
import weekday from "../../../constants/weekday";
import { CheckBox, HabitCard, HabitList, ModalContainer, ModalStyle, ModalTitle, Result, ResultMessage } from "../styled";

export default function EventInfoModal({ setModal, modal }) {
    const dayOfTheWeek = (modal.habits[0].weekDay > 0 && modal.habits[0].weekDay < 6) ?
        `${weekday[modal.habits[0].weekDay]}-feira`
        :
        weekday[modal.habits[0].weekDay];

    const colors = {
        complete: '#8FC549',
        partial: '#ea5766'
    };
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
                <ModalTitle>
                    <p>
                        {dayOfTheWeek}
                    </p>
                    <p>
                        {modal.day}
                    </p>
                </ModalTitle>
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
                            text={`${progressDay.toFixed(0)}%`}
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
    );
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
    );
}