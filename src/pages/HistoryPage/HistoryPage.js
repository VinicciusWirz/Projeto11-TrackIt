import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { PageContainer } from "../HabitsPage/styled";
import { Day, HistoryContainer, Title } from "./styled";
import { url } from "../../constants/url";
import UserInfoContext from "../../contexts/UserInfoContext";
import TokenContext from "../../contexts/TokenContext";

export default function HistoryPage() {
    const { userInfo } = useContext(UserInfoContext);
    const { tokenStored } = useContext(TokenContext);
    const [habitDays, setHabitDays] = useState([]);

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
                .catch(err => console.log(err));
        }
    }, [tokenStored]);

    function formatDay(date) {
        const habitDaysItem = habitDays.find((d) => d.day === dayjs(date).format("DD/MM/YYYY"));
        const dia = date.getDate()
        if (habitDaysItem && !dayjs(date).isSame(dayjs(), 'day')) {
            return (
                <Day background={habitDaysItem.allDone ? '#8cc654' : '#ea5766'}>
                    {dia}
                </Day>
            );
        }
        return (
            <div>
                {dia}
            </div>
        );
    }

    return (
        <PageContainer>
            <Title>
                Histórico
            </Title>
            <HistoryContainer data-test="calendar">
                <Calendar calendarType={'US'} formatDay={(locale, date) => formatDay(date)} />
            </HistoryContainer>
        </PageContainer>
    )
}

