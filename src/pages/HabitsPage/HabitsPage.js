import { useState } from "react";
import Days from "../../components/Days";
import HabitsContent from "./components/HabitsContent";
import { AddHabit, ButtonWrapper, MenuAddHabitStyle, PageContainer } from "./styled";

export default function HabitsPage() {
    const [addNewHabit, setAddNewHabit] = useState(false);
    return (
        <PageContainer>
            <nav>
                Meus hábitos
                <AddHabit onClick={() => setAddNewHabit(!addNewHabit)}>+</AddHabit>
            </nav>
            <HabitsContent>
                {addNewHabit && (
                    <MenuAddHabitStyle>
                        <div>
                            <input placeholder="nome do hábito" required />
                            <Days />
                        </div>
                        <ButtonWrapper>
                            <button>Cancelar</button>
                            <button>Salvar</button>
                        </ButtonWrapper>
                    </MenuAddHabitStyle>
                )}
            </HabitsContent>
        </PageContainer>
    )
}

