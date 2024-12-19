import styled from "styled-components";
import CloseButton from "@assets/icon/CloseButton.svg?react";
import { cvh, cvw } from "@shared/utils/unit";
import { useState, useEffect } from "react";
import Modal from "../../widgets/Modal";
import { example } from "@pages/groupMember/groupMember";
import { useNavigate } from "react-router-dom";

const mission = [{ id: 1 }, { id: 2 }, { id: 3 }];

export type ChoosenDivProps = {
    width: number;
    height: number;
};
const Home = () => {
    const navigate = useNavigate();
    const [id, setId] = useState<string>("");
    const [CertifyModalOpen, setCertifyModalOpen] = useState<boolean>(false);
    const [MissionModalOpen, setMissionModalOpen] = useState<boolean>(false);
    const [MissionChooseModalOpen, setMissionChooseModalOpen] =
        useState<boolean>(false);
    const [FinalMissionModalOpen, setFinalMissionModalOpen] =
        useState<boolean>(false);
    useEffect(() => {}, [id]);
    return (
        <div>
            <div>
                {id === "" ? (
                    <HomeDiv>
                        <TodayMissionDiv width={382} height={40}>
                            오늘의 미션을 달성해보세요
                        </TodayMissionDiv>
                        <MissionButton
                            onClick={() => {
                                setMissionModalOpen(true);
                            }}
                        >
                            미션하기
                        </MissionButton>
                        {
                            <Modal
                                isOpen={MissionModalOpen}
                                onClose={() => setMissionModalOpen(false)}
                                width={790}
                                height={817.17}
                            >
                                <CloseButtonDiv
                                    onClick={(e) => {
                                        setMissionModalOpen(false);
                                        e.stopPropagation();
                                        navigate("/home");
                                    }}
                                >
                                    <CloseButton />
                                </CloseButtonDiv>

                                <CertificateTitleDiv>
                                    인물선택하기
                                </CertificateTitleDiv>
                                <ChooseCharacterDiv>
                                    {example?.map((data) => {
                                        return (
                                            <EachCharacterDiv>
                                                <div
                                                    onClick={() => {
                                                        setMissionChooseModalOpen(
                                                            true
                                                        );
                                                    }}
                                                    style={{
                                                        width: "180px",
                                                        height: "237px",
                                                    }}
                                                >
                                                    <img
                                                        src={data.img}
                                                        style={{
                                                            width: "180px",
                                                            height: "237px",
                                                        }}
                                                    ></img>
                                                </div>

                                                <div>
                                                    {
                                                        <Modal
                                                            isOpen={
                                                                MissionChooseModalOpen
                                                            }
                                                            onClose={() =>
                                                                setMissionChooseModalOpen(
                                                                    false
                                                                )
                                                            }
                                                            width={790}
                                                            height={817.17}
                                                        >
                                                            <CloseButtonDiv
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    setMissionModalOpen(
                                                                        false
                                                                    );
                                                                    e.stopPropagation();
                                                                    navigate(
                                                                        "/home"
                                                                    );
                                                                }}
                                                            >
                                                                <CloseButton />
                                                            </CloseButtonDiv>
                                                            <div
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    gap: "20px",
                                                                    flexDirection:
                                                                        "column",
                                                                }}
                                                            >
                                                                <div>
                                                                    미션
                                                                    선택하기
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                    }}
                                                                >
                                                                    {mission.map(
                                                                        (
                                                                            data
                                                                        ) => {
                                                                            return (
                                                                                <EachCharacterDiv>
                                                                                    <div
                                                                                        style={{
                                                                                            width: "180px",
                                                                                            height: "237px",
                                                                                        }}
                                                                                        onClick={() => {
                                                                                            setFinalMissionModalOpen(
                                                                                                true
                                                                                            );
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            data.id
                                                                                        }
                                                                                    </div>
                                                                                    <div>
                                                                                        {
                                                                                            <Modal
                                                                                                isOpen={
                                                                                                    FinalMissionModalOpen
                                                                                                }
                                                                                                onClose={() =>
                                                                                                    setFinalMissionModalOpen(
                                                                                                        false
                                                                                                    )
                                                                                                }
                                                                                                width={
                                                                                                    790
                                                                                                }
                                                                                                height={
                                                                                                    817.17
                                                                                                }
                                                                                            >
                                                                                                <CloseButtonDiv
                                                                                                    onClick={(
                                                                                                        e
                                                                                                    ) => {
                                                                                                        setMissionModalOpen(
                                                                                                            false
                                                                                                        );
                                                                                                        e.stopPropagation();
                                                                                                        navigate(
                                                                                                            "/home"
                                                                                                        );
                                                                                                    }}
                                                                                                >
                                                                                                    <CloseButton />
                                                                                                </CloseButtonDiv>
                                                                                                <div
                                                                                                    style={{
                                                                                                        display:
                                                                                                            "flex",
                                                                                                        flexDirection:
                                                                                                            "column",
                                                                                                    }}
                                                                                                >
                                                                                                    <div
                                                                                                        style={{
                                                                                                            width: "620px",
                                                                                                            height: "40px",
                                                                                                        }}
                                                                                                    >
                                                                                                        미션
                                                                                                        선택
                                                                                                        완료
                                                                                                    </div>
                                                                                                    <div
                                                                                                        style={{
                                                                                                            width: "562px",
                                                                                                            height: "80px",
                                                                                                        }}
                                                                                                    >
                                                                                                        오늘의
                                                                                                        미션은
                                                                                                        {
                                                                                                            data.id
                                                                                                        }
                                                                                                        입니다.
                                                                                                    </div>
                                                                                                    <ChoosenDiv
                                                                                                        width={
                                                                                                            498
                                                                                                        }
                                                                                                        height={
                                                                                                            80
                                                                                                        }
                                                                                                    >
                                                                                                        미션
                                                                                                        완료
                                                                                                        후
                                                                                                        미션을
                                                                                                        인증해주세요!그럼
                                                                                                        파이팅!
                                                                                                    </ChoosenDiv>

                                                                                                    <CertificateButton
                                                                                                        onClick={(
                                                                                                            e
                                                                                                        ) => {
                                                                                                            setFinalMissionModalOpen(
                                                                                                                false
                                                                                                            );
                                                                                                            setMissionModalOpen(
                                                                                                                false
                                                                                                            );
                                                                                                            setMissionModalOpen(
                                                                                                                false
                                                                                                            );
                                                                                                        }}
                                                                                                    >
                                                                                                        확인
                                                                                                    </CertificateButton>
                                                                                                </div>
                                                                                            </Modal>
                                                                                        }
                                                                                    </div>
                                                                                </EachCharacterDiv>
                                                                            );
                                                                        }
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </Modal>
                                                    }
                                                </div>
                                            </EachCharacterDiv>
                                        );
                                    })}
                                </ChooseCharacterDiv>
                            </Modal>
                        }
                    </HomeDiv>
                ) : (
                    <HomeDiv>
                        <TodayMissionDiv width={170} height={40}>
                            오늘의 미션
                        </TodayMissionDiv>
                        <MissionButton
                            onClick={() => {
                                setCertifyModalOpen(true);
                            }}
                        >
                            인증하기
                        </MissionButton>
                        {
                            <Modal
                                isOpen={CertifyModalOpen}
                                onClose={() => setCertifyModalOpen(false)}
                                width={790}
                                height={817.17}
                            >
                                <CloseButtonDiv
                                    onClick={(e) => {
                                        setCertifyModalOpen(false);
                                        e.stopPropagation();
                                    }}
                                >
                                    <CloseButton />
                                </CloseButtonDiv>
                                <CertificateDiv>
                                    <CertificateTitleDiv>
                                        후기를 작성 해주세요
                                    </CertificateTitleDiv>
                                    <CertificateTitleInput></CertificateTitleInput>
                                </CertificateDiv>
                                <CertificateImgDiv>
                                    <CertificateContentDiv>
                                        사진을 등록하여 미션을 인증해주세요
                                    </CertificateContentDiv>
                                    <CertificateContentInput></CertificateContentInput>
                                </CertificateImgDiv>
                                <CertificateButton>확인</CertificateButton>
                            </Modal>
                        }
                    </HomeDiv>
                )}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "20px",
                    width: "1160px",
                }}
            >
                <MyCharacterDiv>이름</MyCharacterDiv>
            </div>
        </div>
    );
};

export default Home;

const Example = styled.div.attrs(() => ({ className: "pixel" }))`
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    // border-color: ${({ theme }) => theme.black.b900};
    background-color: ${({ theme }) => theme.black.b100};
    border-radius: 10px;
    width: 787px;
    height: 811px;
    // width: ${cvw(787)};
    // height: ${cvh(811)};
`;
const Example2 = styled.input.attrs(() => ({ className: "pixel" }))`
    color: ${({ theme }) => theme.black.b900};
    // font-size: ${({ theme }) => theme.headingFontSize.h2};
    // border-color: ${({ theme }) => theme.black.b900};
    border-radius: 10px;
    width: 637px;
    height: 155px;
    background-color: ${({ theme }) => theme.black.b100};
    // width: ${cvw(637)};
    // height: ${cvh(155)};
`;
// const AS = styled.div.attrs(() => ({ className: "pixel" }))`
//     color: ${({ theme }) => theme.black.b900};
//     font-size: ${({ theme }) => theme.headingFontSize.h3};
//     // font-size: 18px;

//     width: ${cvw(637)};
//     height: ${cvh(470)};
//     // width: 637px;
//     // height: 400px;
// `;
const AS = styled.div`
    width: ${cvw(637)};
    height: ${cvh(470)};
`;
const AS2 = styled.div.attrs(() => ({ className: "pixel" }))`
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    // border: 0;
    width: 620px;
    height: 40px;
    // width: ${cvw(620)};
    // height: ${cvh(40)};
    border: 0;
`;
const AS3 = styled.div.attrs(() => ({ className: "pixel" }))`
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    width: ${cvw(620)};
    height: ${cvh(40)};
`;
const AS4 = styled.button.attrs(() => ({ className: "pixel" }))`
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    width: 180px;
    height: 70px;
    padding: 2px;
    background-color: ${({ theme }) => theme.red.r500};
`;
const AS5 = styled.button.attrs(() => ({ className: "pixel" }))`
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    width: 180px;
    height: 70px;
    background-color: ${({ theme }) => theme.red.r500};
    border: 0;
`;
const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
//${(props) => props.width}
const TodayMissionDiv = styled.div<ChoosenDivProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    font-size: 22pt;
`;
// ${({ theme }) => theme.headingFontSize.h1}
const MissionButton = styled.button.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.blue.b500};
    width: 240px;
    height: 70px;
    font-size: ${({ theme }) => theme.headingFontSize.h2};
    cursor: pointer;
`;

const MyCharacterDiv = styled.div.attrs(() => ({ className: "pixel" }))`
    width: 300px;
    height: 360px;
    align-items: center;
    text-align: center;
    align-content: center;

    margin-top: 20px;
`;

const CloseButtonDiv = styled.div`
    width: 750px;
    height: 44px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
`;

const CertificateDiv = styled.div`
    width: 637px;
    height: 180px;
`;
const CertificateTitleDiv = styled.div`
    width: 239px;
    height: 24px;
    font-size: ${({ theme }) => theme.bodyFontSize.b1};
`;
// 이거 div 태그안에 글자가 다 안들어가서 내가 바꿈
const CertificateTitleInput = styled.input.attrs(() => ({
    className: "pixel",
}))`
    width: 637px;
    height: 155px;
`;
const CertificateImgDiv = styled.div`
    width: 637px;
    height: 270px;
`;

const CertificateContentDiv = styled.div`
    width: 414px;
    height: 24px;
    font-size: ${({ theme }) => theme.bodyFontSize.b1};
`;
// 이거 div 태그안에 글자가 다 안들어가서 내가 바꿈
const CertificateContentInput = styled.input.attrs(() => ({
    className: "pixel",
}))`
    width: 637px;
    height: 240px;
`;
const CertificateButton = styled.button.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.red.r500};
    font-size: ${({ theme }) => theme.headingFontSize.h2};
    width: 180px;
    height: 70px;
`;
const EachCharacterDiv = styled.div.attrs(() => ({ className: "pixel" }))`
    width: 180px;
    height: 237px;
    background-color: ${({ theme }) => theme.black.b100};
`;

const ChooseCharacterDiv = styled.div`
    width: 620px;
    height: 501px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const ChoosenDiv = styled.div<ChoosenDivProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`;
