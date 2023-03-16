import checkMark from "../../../assets/check.svg";
import { CheckBox, HabitContent, SequenceStyle } from "../styled";

export default function HabitCard({ cardInfo, handleToggleCheckbox }) {
    const { currentSequence, done, highestSequence, id, name } = cardInfo;

    return (
        <HabitContent data-test="today-habit-container">
            <div>
                <h3 data-test="today-habit-name">
                    {name}
                </h3>
                <p data-test="today-habit-sequence">
                    Sequência atual: <SequenceStyle done={done ? '#8FC549' : '#666666'}>
                        {currentSequence} {currentSequence > 1 ? 'dias' : 'dia'}
                    </SequenceStyle>
                </p>
                <p data-test="today-habit-record">
                    Seu recorde: <SequenceStyle done={highestSequence === currentSequence ? '#8FC549' : '#666666'}>
                        {highestSequence} {highestSequence > 1 ? 'dias' : 'dia'}
                    </SequenceStyle>
                </p>
            </div>

            <CheckBox done={done ? '#8FC549' : '#EBEBEB'} onClick={() => handleToggleCheckbox(id, done)} data-test="today-habit-check-btn">
                <img src={checkMark} />
            </CheckBox>
        </HabitContent>
    );
}