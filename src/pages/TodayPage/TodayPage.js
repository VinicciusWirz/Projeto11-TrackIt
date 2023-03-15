import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import UserInfoContext from "../../contexts/UserInfoContext";
import { LoadingIcon, PageContainer } from "../HabitsPage/styled";
import HabitCard from "./components/HabitCard";
import 'dayjs/locale/pt-br';
import weekdayList from "../../constants/weekday";
import { url } from "../../constants/url";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Title, Progress } from "./styled";

export default function TodayPage() {
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const [loading, setLoading] = useState(true);
    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    };
    useEffect(() => {
        const month = dayjs().month() + 1;
        const weekday = weekdayList[dayjs().locale('pt-br').day()];
        const calendarDate = `${dayjs().date()}/${month < 10 ? `0${month}` : month}`;
        axios.get(`${url}/habits/today`, config)
            .then(res => {
                const progress = (res.data.filter(h => h.done === true).length * 100) / res.data.length;
                setUserInfo({ ...userInfo, date: { weekday, calendarDate }, todayHabits: res.data, progress });
                setLoading(false);
            })
            .catch(err => alert(err.response.data.message));
    }, []);

    function handleToggleCheckbox(id, done) {
        const newHabits = [...userInfo.todayHabits];
        const objHabitChecking = newHabits.find((h) => h.id === id);
        objHabitChecking.done = !objHabitChecking.done;
        const updatedHabits = { ...userInfo, todayHabits: newHabits };
        setUserInfo(updatedHabits);
        if (!done) {
            objHabitChecking.currentSequence = objHabitChecking.currentSequence + 1;
            axios.post(`${url}/habits/${id}/check`, {}, config)
                .catch(err => {
                    alert(err.response.data.message);
                    objHabitChecking.done = !objHabitChecking.done;
                    setUserInfo(updatedHabits);
                });
        } else {
            objHabitChecking.currentSequence = objHabitChecking.currentSequence - 1;
            axios.post(`${url}/habits/${id}/uncheck`, {}, config)
                .catch(err => {
                    alert(err.response.data.message);
                    objHabitChecking.done = !objHabitChecking.done;
                    setUserInfo(updatedHabits);
                });
        }
        const progress = (updatedHabits.todayHabits.filter(h => h.done === true).length * 100) / updatedHabits.todayHabits.length;
        setUserInfo({ ...userInfo, progress });
    }

    return (
        <PageContainer>
            {loading ?
                <LoadingIcon><ThreeDots color='#126BA5' width='69px' id='loading' /></LoadingIcon>
                :
                <>
                    <Title>
                        <div data-test="today" >
                            {userInfo.date.weekday}, {userInfo.date.calendarDate}
                        </div>
                        <Progress data-test="today-counter" color={userInfo.progress > 0 ? '#8FC549' : '#BABABA'}>
                            {(userInfo.progress === 0 || userInfo.todayHabits.length === 0) ? 'Nenhum hábito concluído ainda' :
                                <>
                                    {userInfo.progress.toFixed(0)}% dos hábitos concluídos
                                </>
                            }
                        </Progress>
                    </Title>
                    <ul>
                        {userInfo.todayHabits.map(h => <HabitCard key={h.id} cardInfo={h} handleToggleCheckbox={handleToggleCheckbox} />)}
                    </ul>
                </>

            }

        </PageContainer >
    );
}
