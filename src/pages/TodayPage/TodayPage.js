import styled from "styled-components";
import { PageContainer } from "../HabitsPage/styled";
import HabitCard from "./components/HabitCard";

export default function TodayPage() {
    return (
        <PageContainer>
            <Title>
                Segunda, 17/05
                <Progress>
                    Nenhum hábito concluído ainda
                </Progress>
            </Title>
            <HabitList>
                <HabitCard />
                <HabitCard />
            </HabitList>

        </PageContainer>
    )
}
const Title = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    margin-bottom: 28px;
`;
const Progress = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #BABABA;
`;
const HabitList = styled.ul`
`