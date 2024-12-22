import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";

const TimerComponent = () => {
    return (
        <TimerContainer>
            <div className="time-title">
                <span>남은 시간</span>
            </div>
            <div className="timer">
                <span>10시간 10분</span>
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

        & > span {
            font-size: ${({ theme }) => theme.headingFontSize.h3};
            margin-right: 5px;
        }
    }
`;

export default TimerComponent;
