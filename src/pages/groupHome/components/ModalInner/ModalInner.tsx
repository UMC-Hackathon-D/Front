import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import Timer from "./Timer";
import { useState, useEffect } from "react";
import { serverInstance } from "@shared/apiInstance";
interface DataState {
    targetUserId: number | undefined;
    targetUserName: string;
    missionId: number | undefined;
    missionName: string;
}

interface PersonData {
    character: {
        id: number | null; // character가 null일 수도 있으므로 | null 추가
        photo?: string; // photo가 없는 경우도 있으므로 optional로 설정
    } | null; // character가 null일 수도 있음
    characterId: number | null; // null 가능
    id: number; // 항상 존재
    name: string; // 항상 존재
}

interface Mission {
    id: number; // 항상 존재
    missionContent: string; // 문자열 값
    missionName: string | null; // null 가능
}

interface ModalInnerProps {
    data: DataState;
    modalIdx: number;
    personData: PersonData[];
    missionData: Mission[];
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
    const [flippedCardId, setFlippedCardId] = useState<{
        [key: string]: number | null;
    }>({});

    const [previewMission, setPreviewMission] = useState<Mission | null>(null);

    const handleCardClick = (container: string, data: unknown) => {
        setFlippedCardId((prev) => ({
            ...prev,
            [container]: data.id, // 해당 컨테이너의 카드 ID만 업데이트
        }));
        setTimeout(() => {
            onClick(data); // 1초 뒤에 onClick 호출
        }, 1000);
    };

    useEffect(() => {
        const getPreviewMission = async () => {
            try {
                const res = await serverInstance.get(
                    `/api/v1/missions/preview?missionId=${data.missionId}&targetUserId=${data.targetUserId}}`
                );
                console.log("미션 미리보기 api", res);
                setPreviewMission(res.data.success.previewMessage[1]);
            } catch (err) {
                console.log(err);
            }
        };
        if (modalIdx === 3) {
            getPreviewMission();
        }
    }, [modalIdx]);

    // todo : PersonCardContainer, MissionCardContainer 하나의 컴포넌트로 묶기
    if (modalIdx === 0) {
        return (
            <PersonCardContainer>
                {personData.map((data) => (
                    <CardWrapper
                        key={data.id}
                        onClick={() => handleCardClick("person", data)}
                    >
                        <div
                            className={`card ${
                                flippedCardId.person === data.id
                                    ? "flipped"
                                    : ""
                            }`}
                        >
                            <Card>{data.id}</Card>
                            <FlippedCard>
                                <img
                                    className="icon"
                                    src={data.character?.photo}
                                    alt={data.id.toString()}
                                ></img>
                                <span>{data.name}</span>
                            </FlippedCard>
                        </div>
                    </CardWrapper>
                ))}
            </PersonCardContainer>
        );
    } else if (modalIdx === 1) {
        return <Timer name={data.targetUserName} setModalIdx={setModalIdx} />;
    } else if (modalIdx === 2) {
        return (
            <MissionCardContainer>
                {missionData.map((data) => (
                    <CardWrapper
                        key={data.id}
                        onClick={() => handleCardClick("mission", data)}
                    >
                        <div
                            className={`card ${
                                flippedCardId.mission === data.id
                                    ? "flipped"
                                    : ""
                            }`}
                        >
                            <Card>{data.id}</Card>
                            <FlippedCard>
                                <span>{data.missionContent}</span>
                            </FlippedCard>
                        </div>
                    </CardWrapper>
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
                        <span className="highlight">{previewMission} </span>
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

const CardWrapper = styled.div`
    width: ${cvw(150)};
    height: ${cvh(237)};
    perspective: 1000px;
    cursor: pointer;

    & > .card {
        width: 100%;
        height: 100%;
        position: relative;
        transition: all 0.5s;
        perspective-origin: center;
        transform-style: preserve-3d;
    }

    .flipped {
        transform: rotateY(180deg);
    }
`;

const Card = styled.div.attrs(() => ({ className: "pixel" }))`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    z-index: 2;
    position: absolute;
    backface-visibility: hidden;
`;

const FlippedCard = styled.div.attrs(() => ({ className: "pixel" }))`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${cvh(30)};
    font-size: ${({ theme }) => theme.bodyFontSize.b1};
    z-index: 1;
    transform: rotateY(180deg);

    & > .icon {
        width: ${cvw(120)};
        height: ${cvh(120)};
    }
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
