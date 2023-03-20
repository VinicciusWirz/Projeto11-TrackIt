import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import UserInfoContext from "../../contexts/UserInfoContext";
import { Content, HabitList, LoadingIcon, PageContainer } from "../HabitsPage/styled";
import HabitCard from "./components/HabitCard";
import 'dayjs/locale/pt-br';
import weekdayList from "../../constants/weekday";
import { url } from "../../constants/url";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Title, Progress } from "./styled";
import TokenContext from "../../contexts/TokenContext";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default function TodayPage() {
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const { tokenStored } = useContext(TokenContext);
    const [habits, setHabits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [renderProgress, setRenderProgress] = useState();
    const percentage = 100;
    const decimal = 10;
    const month = dayjs().month() + 1;
    const weekday = weekdayList[dayjs().locale('pt-br').day()];
    const calendarDate = `${dayjs().date()}/${month < decimal ? `0${month}` : month}`;
    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    };
    useEffect(() => {
        if (userInfo.token) {
            axios.get(`${url}/habits/today`, config)
                .then(res => {
                    const progress = Math.round((res.data.filter(h => h.done).length * percentage) / res.data.length);
                    setUserInfo({ ...userInfo, progress });
                    setHabits(res.data);
                    setRenderProgress(res.data.map(({ id, done }) => ({ id, done })));
                    setLoading(false);
                })
                .catch(err => alert(err.response.data.message));
        }
    }, [tokenStored]);

    return (
        <>
            <Header />
            <PageContainer>
                <Content>
                    {loading ?
                        <LoadingIcon><ThreeDots color='#126BA5' width='69px' id='loading' /></LoadingIcon>
                        :
                        <>
                            <Title>
                                <div data-test="today" >
                                    {weekday}, {calendarDate}
                                </div>
                                <Progress data-test="today-counter" color={userInfo.progress > 0 ? '#8FC549' : '#BABABA'}>
                                    {(userInfo.progress === 0 || habits.length === 0) ? 'Nenhum hábito concluído ainda' :
                                        <>
                                            {userInfo.progress.toFixed(0)}% dos hábitos concluídos
                                        </>
                                    }
                                </Progress>
                            </Title>
                            <HabitList>
                                {habits.map(h => <HabitCard
                                    key={h.id}
                                    cardInfo={h}
                                    renderProgress={renderProgress}
                                />)}
                            </HabitList>
                        </>
                    }
                </Content>
            </PageContainer >
            <Menu />
        </>
    );
}