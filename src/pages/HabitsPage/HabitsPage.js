import { useState } from "react";
import { AddHabit, Content, HabitList, LoadingIcon, PageContainer } from "./styled";
import { useContext, useEffect } from "react";
import axios from "axios";
import UserInfoContext from "../../contexts/UserInfoContext";
import { url } from "../../constants/url";
import HabitCard from "./components/HabitCard";
import { ThreeDots } from "react-loader-spinner";
import TokenContext from "../../contexts/TokenContext";
import MenuAddHabit from "./components/MenuAddHabit";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default function HabitsPage() {
    const { userInfo } = useContext(UserInfoContext);
    const { tokenStored } = useContext(TokenContext);
    const [addNewHabit, setAddNewHabit] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [habits, setHabits] = useState([]);
    const habitsUrl = `${url}/habits`;
    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    };

    useEffect(() => {
        if (userInfo.token) {
            setLoadingPage(true);
            axios.get(habitsUrl, config)
                .then(res => {
                    setHabits(res.data);
                    setLoadingPage(false);
                })
                .catch(err => alert(err.response.data.message));
        }

    }, [tokenStored]);

    return (
        <>
            <Header />
            <PageContainer>
                <Content>
                    <nav>
                        Meus hábitos
                        <AddHabit onClick={() => setAddNewHabit(!addNewHabit)} data-test="habit-create-btn">+</AddHabit>
                    </nav>
                    <div>
                        {addNewHabit && <MenuAddHabit
                            addNewHabit={addNewHabit}
                            setAddNewHabit={setAddNewHabit}
                            habitsUrl={habitsUrl}
                            habits={habits}
                            setHabits={setHabits}
                        />}
                        <HabitList>
                            {loadingPage ? <LoadingIcon><ThreeDots color='#126BA5' width='69px' id='loading' /></LoadingIcon> :
                                habits.length === 0 && 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'}
                            {habits.length > 0 && habits.map(h => <HabitCard key={h.id} card={h} />)}
                        </HabitList>
                    </div>
                </Content>
            </PageContainer>
            <Menu />
        </>
    );
}