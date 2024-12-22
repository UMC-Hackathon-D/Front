import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import Modal3 from "@widgets/Modal/Modal3";
// 모달 안에 들어갈 컴포넌트들
import PersonCard from "./ModalInner/PersonCard";
import Mission from "./ModalInner/Mission";
import MissionGuide from "./ModalInner/MissionGuide";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { missionRegistercSchema } from "@shared/schemas";
import { useState } from "react";

const textArr = ["인물 선택하기", "미션 선택하기", "미션 선택 완료"];

type MissionRegisterType = z.infer<typeof missionRegistercSchema>;
const NotTakenMission = () => {
    // targetUserID
    // missionID 두 api 다 여기서 받아오기
    const [isModalOpen, setIsModalOpened] = useState<boolean>(false);
    const [modalIdx, setModalIdx] = useState<number>(0);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<MissionRegisterType>({
        resolver: zodResolver(missionRegistercSchema),
        mode: "onChange",
    });
    return (
        <>
            <Container>
                <span>오늘의 미션을 달성해봐요 !</span>
                <button
                    className="pixel-timer"
                    onClick={() => setIsModalOpened((prev) => !prev)}
                >
                    미션 하기
                </button>
            </Container>
            <form action="">
                <Modal3
                    isOpened={isModalOpen}
                    setIsModalOpened={setIsModalOpened}
                >
                    {modalIdx === 0 && (
                        <>
                            {textArr[modalIdx]}
                            <PersonCard setModalIdx={setModalIdx} />
                        </>
                    )}
                    {modalIdx === 1 && (
                        <>
                            {textArr[modalIdx]}
                            <Mission setModalIdx={setModalIdx} />
                        </>
                    )}
                    {modalIdx === 2 && (
                        <>
                            {textArr[modalIdx]}
                            <MissionGuide
                                setIsModalOpened={setIsModalOpened}
                                setModalIdx={setModalIdx}
                            />
                        </>
                    )}
                </Modal3>
            </form>
        </>
    );
};

const Container = styled.div`
    margin-top: ${cvh(250)};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${cvh(35)};

    & > span {
        color: ${({ theme }) => theme.black.b700};
        font-size: ${({ theme }) => theme.headingFontSize.h1};
    }

    & > button {
        font-size: ${({ theme }) => theme.headingFontSize.h2};
        padding: ${cvw(21)} ${cvh(60)};
        background-color: ${({ theme }) => theme.blue.b500};
        cursor: pointer;
    }
`;

export default NotTakenMission;
