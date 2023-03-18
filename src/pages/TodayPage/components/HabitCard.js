import axios from "axios";
import { useContext, useState } from "react";
import checkMark from "../../../assets/check.svg";
import { url } from "../../../constants/url";
import UserInfoContext from "../../../contexts/UserInfoContext";
import { CheckBox, HabitContent, SequenceStyle } from "../styled";

export default function HabitCard({ cardInfo, habits, setHabits, setLoadData, loadData }) {
    const { currentSequence, done, highestSequence, id, name } = cardInfo;
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const [cardContent, setCardContent] = useState({ done, currentSequence });
    const [loading, setLoading] = useState(false);
    const percentage = 100;
    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    };
    function handleToggleCheckbox() {
        const urlPost = `${url}/habits/${id}`;
        let updatedCard = {};
        setLoading(true);
        if (!loading) {
            if (!cardContent.done) {
                updatedCard = {
                    done: !cardContent.done,
                    currentSequence: cardContent.currentSequence + 1
                };
                setCardContent(updatedCard);
                axios.post(`${urlPost}/check`, {}, config)
                    .then(() => {
                        setLoading(false);
                        setLoadData(!loadData);
                    })
                    .catch(err => {
                        alert(err.response.data.message);
                        setLoading(false);
                    });
            } else {
                updatedCard = {
                    done: !cardContent.done,
                    currentSequence: cardContent.currentSequence - 1
                };
                setCardContent(updatedCard);
                axios.post(`${urlPost}/uncheck`, {}, config)
                    .then(() => {
                        setLoading(false);
                        setLoadData(!loadData);
                    })
                    .catch(err => {
                        alert(err.response.data.message);
                        setLoading(false);
                    });
            }
            const updatedArray = [...habits].map((e) => e.id === id ? { ...e, ...updatedCard } : e);
            const progress = (updatedArray.filter((e) => e.done).length * percentage) / habits.length;
            setHabits(updatedArray);
            setUserInfo({ ...userInfo, progress });
        }
    }

    return (
        <HabitContent data-test="today-habit-container">
            <div>
                <h3 data-test="today-habit-name">
                    {name}
                </h3>
                <p data-test="today-habit-sequence">
                    Sequência atual: <SequenceStyle done={cardContent.done ? '#8FC549' : '#666666'}>
                        {cardContent.currentSequence} {cardContent.currentSequence > 1 ? 'dias' : 'dia'}
                    </SequenceStyle>
                </p>
                <p data-test="today-habit-record">
                    Seu recorde: <SequenceStyle done={(cardContent.currentSequence === highestSequence && highestSequence !== 0) ? '#8FC549' : '#666666'}>
                        {highestSequence} {highestSequence > 1 ? 'dias' : 'dia'}
                    </SequenceStyle>
                </p>
            </div>

            <CheckBox done={cardContent.done ? '#8FC549' : '#EBEBEB'} onClick={handleToggleCheckbox} data-test="today-habit-check-btn">
                <img src={checkMark} />
            </CheckBox>
        </HabitContent>
    );
}