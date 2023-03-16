import { useState } from "react";
import { AddHabit, HabitList, LoadingIcon, PageContainer } from "./styled";
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
    const [addNewHabit, setAddNewHabit] = useState(false);
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const { tokenStored } = useContext(TokenContext);
    const [loadingPage, setLoadingPage] = useState(false);
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
                    setUserInfo({ ...userInfo, habits: res.data });
                    setLoadingPage(false);
                })
                .catch(err => alert(err.response.data.message));
        }

    }, [tokenStored]);

    return (
        <>
            <Header />
            <PageContainer>
                <nav>
                    Meus hábitos
                    <AddHabit onClick={() => setAddNewHabit(!addNewHabit)} data-test="habit-create-btn">+</AddHabit>
                </nav>
                <div>
                    {addNewHabit && <MenuAddHabit addNewHabit={addNewHabit} setAddNewHabit={setAddNewHabit} habitsUrl={habitsUrl} />}
                    <HabitList>
                        {loadingPage ? <LoadingIcon><ThreeDots color='#126BA5' width='69px' id='loading' /></LoadingIcon> :
                            userInfo.habits.length === 0 && 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'}
                        {userInfo.habits.length > 0 && userInfo.habits.map(h => <HabitCard key={h.id} card={h} />)}
                    </HabitList>
                </div>
            </PageContainer>
            <Menu />
        </>
    );
}