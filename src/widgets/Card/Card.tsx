import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";

const Card = ({
    number,
    data,
    onClick,
}: {
    number: number;
    data: unknown[];
}) => {
    return <Container onClick={onClick}>{number}</Container>;
};

const Container = styled.div.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(150)};
    height: ${cvh(237)};
    // width: 180px;
    // height: 237px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    cursor: pointer;
`;

export default Card;
