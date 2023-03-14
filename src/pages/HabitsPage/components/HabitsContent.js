import styled from "styled-components"

import HabitCard from "./HabitCard";

export default function HabitsContent(props) {
    const conditional = false;
    return (
        <>
            {props.children}
            <HabitList>
                {conditional ? <>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </> :
                <HabitCard />
                }
            </HabitList>
        </>
    )
}
const HabitList = styled.ul`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;

