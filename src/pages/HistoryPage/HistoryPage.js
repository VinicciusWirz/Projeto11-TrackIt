import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Content, PageContainer } from "../HabitsPage/styled";
import { Day, HistoryContainer, Title } from "./styled";
import { url } from "../../constants/url";
import UserInfoContext from "../../contexts/UserInfoContext";
import TokenContext from "../../contexts/TokenContext";
import EventInfoModal from "./components/EventInfoModal";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default function HistoryPage() {
    const { userInfo } = useContext(UserInfoContext);
    const { tokenStored } = useContext(TokenContext);
    const [habitDays, setHabitDays] = useState([]);
    const [modal, setModal] = useState('');

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        };
        if (userInfo.token) {
            axios.get(`${url}/habits/history/daily`, config)
                .then(res => {
                    const updatedArray = res.data.map((obj) => {
                        const allDone = obj.habits.every((habit) => habit.done);
                        return { ...obj, allDone };
                    });
                    setHabitDays(updatedArray);
                })
                .catch(err => alert(err.response.data.message));
        }
    }, [tokenStored]);

    function formatDay(date) {
        const habitDaysItem = habitDays.find((d) => d.day === dayjs(date).format("DD/MM/YYYY"));
        const dayNumber = date.getDate();
        if (habitDaysItem && !dayjs(date).isSame(dayjs(), 'day')) {
            return (
                <Day background={habitDaysItem.allDone ? '#8cc654' : '#ea5766'}>
                    {dayNumber}
                </Day>
            );
        }
        return (
            <div>
                {dayNumber}
            </div>
        );
    }

    function showDayInfo(value) {
        const habitDaysItem = habitDays.find((d) => d.day === dayjs(value).format("DD/MM/YYYY"));
        if (habitDaysItem && !dayjs(value).isSame(dayjs(), 'day')) {
            setModal(habitDaysItem);
        }
    }

    return (
        <>
            <Header />

            <PageContainer>
                <Content>
                    <Title>
                        Histórico
                    </Title>
                    <HistoryContainer data-test="calendar">
                        <Calendar
                            calendarType={'US'}
                            formatDay={(locale, date) => formatDay(date)}
                            onClickDay={(value) => showDayInfo(value)}
                        />
                    </HistoryContainer>
                    {modal && <EventInfoModal setModal={setModal} modal={modal} />}
                </Content>
            </PageContainer>
            <Menu />
        </>
    );
}

