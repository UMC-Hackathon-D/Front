import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import { useState, useEffect } from "react";

const Mission = ({
    name,
    setModalIdx,
}: {
    name: string;
    setModalIdx: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const [time, setTime] = useState<number>(3);

    useEffect(() => {
        if (time === 0) {
            setModalIdx((prev) => prev + 1);
            return;
        }

        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    return (
        <>
            <Text>
                <span>{name} 카드를 뽑으셨네요 !</span>
                <br />
                <span>이번에는 미션 카드를 뽑아볼까요 ?</span>
            </Text>
            <Timer>{time}</Timer>
        </>
    );
};

const Text = styled.div`
    margin-top: ${cvh(148)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.headingFontSize.h2};
`;

const Timer = styled.span`
    margin-top: ${cvh(75)};
    font-size: 50px;
`;

const Container = styled.div`
    margin-top: ${cvh(147)};
    display: flex;
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

export default Mission;
