import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import Modal3 from "@widgets/Modal/Modal3";
import { useState } from "react";
import ModalInner from "./ModalInner/ModalInner";

interface DataState {
    targetUserID: number | undefined;
    targetUserName: string;
    missionID: number | undefined;
    missionName: string;
}

const textArr = ["인물 선택하기", undefined, "미션 선택하기", "미션 선택 완료"];

const personData = [
    { id: 1, name: "무랫" },
    { id: 2, name: "미니" },
    { id: 3, name: "미니" },
    { id: 4, name: "미니" },
    { id: 5, name: "미니" },
    { id: 6, name: "미니" },
];

const missionData = [
    { mission: "미션 1", id: 1 },
    { mission: "미션 2", id: 2 },
    { mission: "미션 3", id: 3 },
];

const NotTakenMission = () => {
    // targetUserID
    // missionID 두 api 다 여기서 받아오기
    const [data, setData] = useState<DataState>({
        targetUserName: "",
        targetUserID: undefined,
        missionID: undefined,
        missionName: "",
    });
    const [isModalOpen, setIsModalOpened] = useState<boolean>(false);
    const [modalIdx, setModalIdx] = useState<number>(0);

    // 중간에 X 버튼 누를 때
    const onClose = () => {
        setIsModalOpened(false);
        setModalIdx(0);
    };

    // 카드 클릭했을 때
    const onClick = (data: unknown) => {
        if (modalIdx === 1 || modalIdx === 2) {
            setData((prev) =>
                modalIdx === 1
                    ? {
                          ...prev,
                          targetUserID: data.id,
                          targetUserName: data.name,
                      }
                    : { ...prev, missionID: data.id, missionName: data.mission }
            );
        }
        modalIdx < 3 ? setModalIdx((prev) => prev + 1) : setModalIdx(0);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onClose();
        alert(data);
    };
    return (
        <>
            <Container>
                <span>오늘의 미션을 달성해봐요 !</span>
                <button
                    className="pixel"
                    onClick={() => setIsModalOpened((prev) => !prev)}
                >
                    미션 하기
                </button>
            </Container>
            <form onSubmit={handleSubmit}>
                <Modal3
                    isOpened={isModalOpen}
                    onClose={onClose}
                    text={textArr[modalIdx]}
                >
                    <ModalInner
                        data={data}
                        modalIdx={modalIdx}
                        personData={personData}
                        missionData={missionData}
                        onClick={onClick}
                        onClose={onClose}
                        setModalIdx={setModalIdx}
                    />
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
