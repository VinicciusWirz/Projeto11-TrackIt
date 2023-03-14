import styled from "styled-components";
import { PageContainer } from "../HabitsPage/styled";

export default function HistoryPage() {
    return (
        <PageContainer>
            <Title>
                Histórico
            </Title>
            <HistoryContainer>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </HistoryContainer>
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
    margin-bottom: 17px;
`;

const HistoryContainer = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
`;