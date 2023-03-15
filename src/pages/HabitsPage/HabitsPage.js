import { useState } from "react";
import { AddHabit, BtnDays, BtnDaysWrapper, ButtonWrapper, HabitList, LoadingIcon, MenuAddHabitStyle, PageContainer } from "./styled";
import { useContext, useEffect } from "react";
import axios from "axios";
import UserInfoContext from "../../contexts/UserInfoContext";
import { url } from "../../constants/url";
import HabitCard from "./components/HabitCard";
import days from "../../constants/days";
import { ThreeDots } from "react-loader-spinner";

export default function HabitsPage() {
    const [addNewHabit, setAddNewHabit] = useState(false);
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const [form, setForm] = useState({ name: '', days: [] });
    const [loadingPage, setLoadingPage] = useState(false);
    const [loadingForm, setLoadingForm] = useState(false);
    const habitsUrl = `${url}/habits`;
    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    };

    useEffect(() => {
        setLoadingPage(true);
        axios.get(habitsUrl, config)
            .then(res => {
                setUserInfo({ ...userInfo, habits: res.data });
                setLoadingPage(false);
            })
            .catch(err => alert(err.response.data.message));

    }, []);

    function handleAddhabbitSubmit(e) {
        e.preventDefault();
        setLoadingForm(true);
        axios.post(habitsUrl, form, config)
            .then(res => {
                setForm({ name: '', days: [] });
                setUserInfo({ ...userInfo, habits: [...userInfo.habits, res.data] });
                setAddNewHabit(false);
                setLoadingForm(false);
            })
            .catch(err => {
                err.response.data.message === "Campo Header inválido!" ? alert('Sessão expirada') : alert(err.response.data.message);
                setLoadingForm(false);
            });
    }

    function addFormSelectDay(e) {
        const index = Number(e.target.id);
        let updatedForm = {};
        if (form.days.includes(index)) {
            updatedForm = { ...form, days: form.days.filter(i => i !== index) };
            setForm(updatedForm);
        } else {
            updatedForm = { ...form, days: [...form.days, index] };
            setForm(updatedForm);
        }
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <PageContainer>
            <nav>
                Meus hábitos
                <AddHabit onClick={() => setAddNewHabit(!addNewHabit)} data-test="habit-create-btn">+</AddHabit>
            </nav>
            <div>
                {addNewHabit && (
                    <MenuAddHabitStyle onSubmit={handleAddhabbitSubmit} data-test="habit-create-container">
                        <div>
                            <input
                                placeholder="nome do hábito"
                                required type='text'
                                name='name'
                                onChange={handleChange}
                                value={form.name}
                                disabled={loadingForm}
                                data-test="habit-name-input"
                            />
                            <BtnDaysWrapper>
                                {days.map((d, i) => <BtnDays
                                    key={i}
                                    id={i}
                                    selected={form.days.includes(i)}
                                    onClick={addFormSelectDay}
                                    disabled={loadingForm}
                                    data-test="habit-day"
                                >
                                    {d}
                                </BtnDays>)
                                }
                            </BtnDaysWrapper>
                        </div>
                        <ButtonWrapper>
                            <button type="reset" disabled={loadingForm} onClick={() => setAddNewHabit(!addNewHabit)} data-test="habit-create-cancel-btn">Cancelar</button>
                            <button type="submit" disabled={loadingForm} data-test="habit-create-save-btn">{loadingForm ? <ThreeDots color='#ffff' height='11px' /> : 'Salvar'}</button>
                        </ButtonWrapper>
                    </MenuAddHabitStyle>
                )}
                <HabitList>
                    {loadingPage ? <LoadingIcon><ThreeDots color='#126BA5' width='69px' id='loading' /></LoadingIcon> :
                        userInfo.habits.length === 0 && 'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'}
                    {userInfo.habits.length > 0 && userInfo.habits.map(h => <HabitCard key={h.id} card={h} />)}
                </HabitList>
            </div>
        </PageContainer>
    );
}