import checkMark from "../../../assets/check.svg"
import { CheckBox, HabitContent, SequenceStyle } from "../styled";

export default function HabitCard({ cardInfo, handleToggleCheckbox }) {
    const { currentSequence, done, highestSequence, id, name } = cardInfo;

    return (
        <HabitContent>
            <div>
                <h3>
                    {name}
                </h3>
                <p>
                    Sequência atual: <SequenceStyle done={done ? '#8FC549' : '#666666'}>{currentSequence} {currentSequence > 1 ? 'dias' : 'dia'}</SequenceStyle>
                </p>
                <p>
                    Seu recorde: <SequenceStyle done={highestSequence === currentSequence ? '#8FC549' : '#666666' }>{highestSequence} {highestSequence > 1 ? 'dias' : 'dia'}</SequenceStyle>
                </p>
            </div>

            <CheckBox done={done ? '#8FC549' : '#EBEBEB'}>
                <img src={checkMark} onClick={() => handleToggleCheckbox(id, done)} />
            </CheckBox>
        </HabitContent>
    );
}
