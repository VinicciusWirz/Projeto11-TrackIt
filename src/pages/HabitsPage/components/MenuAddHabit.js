import axios from "axios";
import { useContext, useState } from "react";
import days from "../../../constants/days";
import { BtnDays, BtnDaysWrapper, ButtonWrapper, MenuAddHabitStyle } from "../styled";
import UserInfoContext from "../../../contexts/UserInfoContext";
import { ThreeDots } from "react-loader-spinner";


export default function MenuAddHabit({ addNewHabit, setAddNewHabit, habitsUrl, habits, setHabits }) {
    const { userInfo } = useContext(UserInfoContext);
    const [form, setForm] = useState({ name: '', days: [] });
    const [loadingForm, setLoadingForm] = useState(false);
    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    };

    function handleAddhabbitSubmit(e) {
        e.preventDefault();
        if (form.name.trim().length !== 0) {
            setLoadingForm(true);
            axios.post(habitsUrl, form, config)
                .then(res => {
                    setForm({ name: '', days: [] });
                    setHabits([...habits, res.data]);
                    setAddNewHabit(false);
                    setLoadingForm(false);
                })
                .catch(err => {
                    err.response.data.message === "Campo Header inválido!" ? alert('Sessão expirada') : alert(err.response.data.message);
                    setLoadingForm(false);
                });
        } else {
            alert('O hábito não pode estar em branco');
        }
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
        <>
            <MenuAddHabitStyle onSubmit={handleAddhabbitSubmit} data-test="habit-create-container">
                <div>
                    <input
                        placeholder="nome do hábito"
                        type='text'
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
                            cursor='pointer'
                            data-test="habit-day"
                        >
                            {d}
                        </BtnDays>)
                        }
                    </BtnDaysWrapper>
                </div>
                <ButtonWrapper>
                    <button
                        type="reset"
                        disabled={loadingForm}
                        onClick={() => setAddNewHabit(!addNewHabit)}
                        data-test="habit-create-cancel-btn"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={loadingForm}
                        data-test="habit-create-save-btn"
                    >
                        {loadingForm ? <ThreeDots color='#ffff' height='11px' /> : 'Salvar'}
                    </button>
                </ButtonWrapper>
            </MenuAddHabitStyle>
        </>
    );
}