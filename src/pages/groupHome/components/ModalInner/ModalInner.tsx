import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import Timer from "./Timer";

interface DataState {
    targetUserID: number | undefined;
    targetUserName: string;
    missionID: number | undefined;
    missionName: string;
}

interface ModalInnerProps {
    data: DataState;
    modalIdx: number;
    personData: { id: number; name: string }[];
    missionData: { id: number; mission: string }[];
    onClick: (data: unknown) => void;
    setModalIdx: React.Dispatch<React.SetStateAction<number>>;
}

const ModalInner = ({
    data,
    modalIdx,
    personData,
    missionData,
    onClick,
    setModalIdx,
}: ModalInnerProps) => {
    if (modalIdx === 0) {
        return (
            <PersonCardContainer>
                {personData.map((data) => (
                    <Card key={data.id} onClick={() => onClick(data)}>
                        {data.id}
                    </Card>
                ))}
            </PersonCardContainer>
        );
    } else if (modalIdx === 1) {
        return <Timer name={data.targetUserName} setModalIdx={setModalIdx} />;
    } else if (modalIdx === 2) {
        return (
            <MissionCardContainer>
                {missionData.map((data) => (
                    <Card key={data.id} onClick={() => onClick(data)}>
                        {data.id}
                    </Card>
                ))}
            </MissionCardContainer>
        );
    } else if (modalIdx === 3) {
        return (
            <MissionGuideContainer>
                <MissionText>
                    <span>
                        오늘의 미션은
                        <br />
                        <span className="highlight">{data.missionName} </span>
                        입니다 !
                    </span>
                </MissionText>
                <MissionText>
                    <span>
                        미션 완료 후 미션을 인증해주세요 !<br />
                        그럼 파이팅입니다 :)
                    </span>
                </MissionText>
                <Button type="submit">확인</Button>
            </MissionGuideContainer>
        );
    }
    return null;
};

export default ModalInner;

const PersonCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${cvw(40)};
`;

const MissionCardContainer = styled.div`
    margin-top: ${cvh(147)};
    display: flex;
    gap: ${cvw(40)};
`;

const MissionGuideContainer = styled.div`
    margin-top: ${cvh(90)};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${cvh(40)};
`;

const MissionText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${({ theme }) => theme.headingFontSize.h1};

    & > span {
        text-align: center;
        line-height: 1.5;
        & > .highlight {
            color: ${({ theme }) => theme.blue.b500};
        }
    }
`;

const Card = styled.div.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(150)};
    height: ${cvh(237)};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    cursor: pointer;
`;

const Button = styled.button.attrs(() => ({ className: "pixel" }))`
    margin-top: ${cvh(40)};
    width: ${cvw(180)};
    height: ${cvh(70)};
    background-color: ${({ theme }) => theme.red.r500};
    cursor: pointer;
    font-family: "NeoDunggeunmo";
    font-size: ${({ theme }) => theme.headingFontSize.h3};
`;
