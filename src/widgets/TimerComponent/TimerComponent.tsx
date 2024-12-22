import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import { useQuery } from "@tanstack/react-query";
import { serverInstance } from "@shared/apiInstance";
import { useRecoilValue } from "recoil";
import { loginState } from "@shared/recoil/recoil";
import { useState, useEffect } from "react";

const TimerComponent = () => {
    const groupData = useRecoilValue(loginState);
    // const { data: startTime } = useQuery({
    //     queryKey: ["startTime", groupData.partyId, groupData.id],
    //     queryFn: async () => {
    //         const res = await serverInstance.get(
    //             `/api/v1/users/${groupData.id}/missionStartTime`
    //         );
    //         return res.data.success;
    //     },
    // });

    // console.log(startTime);

    // const [remainingTime, setRemainingTime] = useState("");

    // // 타이머 계산
    // useEffect(() => {
    //     if (!startTime) return;

    //     const calculateRemainingTime = () => {
    //         const now = new Date();
    //         const start = new Date(startTime);
    //         const nextMidnight = new Date(start);
    //         nextMidnight.setUTCDate(start.getUTCDate() + 1); // 다음날 자정
    //         nextMidnight.setUTCHours(0, 0, 0, 0);

    //         const timeDifference = nextMidnight.getTime() - now.getTime();

    //         if (timeDifference <= 0) {
    //             // 남은 시간이 0 이하일 때 타이머 멈추기
    //             setRemainingTime("00시간 00분");
    //             clearInterval(timer); // 타이머 정지
    //             return;
    //         }

    //         const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    //         const minutes = Math.floor(
    //             (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    //         );

    //         setRemainingTime(
    //             `${hours.toString().padStart(2, "0")}시간 ${minutes
    //                 .toString()
    //                 .padStart(2, "0")}분`
    //         );
    //     };

    //     calculateRemainingTime(); // 초기 계산
    //     const timer = setInterval(calculateRemainingTime, 1000 * 60); // 1분마다 업데이트

    //     return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
    // }, [startTime]);
    return (
        <TimerContainer>
            <div className="time-title">
                <span>남은 시간</span>
            </div>
            <div className="timer">
                <span>--시간 --분</span>
            </div>
        </TimerContainer>
    );
};

const TimerContainer = styled.div.attrs(() => ({ className: "pixel-timer" }))`
    width: ${cvw(284)};
    height: ${cvh(90)};
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.black.b100};

    & > .time-title {
        display: flex;
        align-items: center;
        font-size: ${({ theme }) => theme.captionFontSize.c1};

        & > span {
            margin-left: 10px;
            margin-top: 5px;
            font-weight: 100;
        }
    }

    & > .timer {
        display: flex;
        justify-content: flex-end;
        align-itemse: flex-end;
        margin-top: 15px;

        & > span {
            font-size: ${({ theme }) => theme.headingFontSize.h3};
            margin-right: 5px;
        }
    }
`;

export default TimerComponent;
