import styled from "styled-components";
import { cvh } from "@shared/utils/unit";
import { useState, useEffect } from "react";
import MissionCard from "./MissionCard";
const Mission = () => {
    const [time, setTime] = useState<number>(3);

    useEffect(() => {
        if (time === 0) return;

        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    return time === 0 ? (
        <MissionCard />
    ) : (
        <>
            <Text>
                <span>000 카드를 뽑으셨네요 !</span>
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

export default Mission;
