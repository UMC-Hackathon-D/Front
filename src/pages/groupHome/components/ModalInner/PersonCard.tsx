import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";

const PersonCard = () => {
    return (
        <Container>
            <Card>1</Card>
            <Card>1</Card>
            <Card>1</Card>
            <Card>1</Card>
            <Card>1</Card>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${cvw(40)};
`;

const Card = styled.div.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(180)};
    height: ${cvh(237)};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    cursor: pointer;
`;

export default PersonCard;
