import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import Modal3 from "@widgets/Modal/Modal3";
import { useState } from "react";
import ModalInner from "./ModalInner/ModalInner";
import { useRecoilState } from "recoil";
import { loginState } from "@shared/recoil/recoil";
import { serverInstance } from "@shared/apiInstance";
import { useQuery } from "@tanstack/react-query";

interface DataState {
    targetUserId: number | undefined;
    targetUserName: string;
    missionId: number | undefined;
    missionName: string;
}

const textArr = ["인물 선택하기", undefined, "미션 선택하기", "미션 선택 완료"];

const NotAssigned = ({
    setIsAssigned,
}: {
    setIsAssigned: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    // targetUserID
    // missionID 두 api 다 여기서 받아오기
    const [data, setData] = useState<DataState>({
        targetUserName: "",
        targetUserId: undefined,
        missionId: undefined,
        missionName: "",
    });
    const [isModalOpen, setIsModalOpened] = useState<boolean>(false);
    const [modalIdx, setModalIdx] = useState<number>(0);

    const [login, setLogin] = useRecoilState(loginState);

    const { data: personData, refetch } = useQuery({
        queryKey: ["personData"],
        queryFn: async () => {
            const res = await serverInstance.get(
                `/api/v1/parties/${login.partyId}/users/${login.id}/available-targets`
            );
            return res.data.success;
        },
    });

    const { data: missionData } = useQuery({
        queryKey: ["missionData"],
        queryFn: async () => {
            const res = await serverInstance.get(`/api/v1/missions/random`);
            return res.data.success;
        },
    });

    // 중간에 X 버튼 누를 때
    const onClose = () => {
        setIsModalOpened(false);
        setModalIdx(0);
    };

    // 카드 클릭했을 때
    const onClick = (data: unknown) => {
        if (modalIdx === 0 || modalIdx === 2) {
            setData((prev) =>
                modalIdx === 0
                    ? {
                          ...prev,
                          targetUserId: data.id,
                          targetUserName: data.name,
                      }
                    : { ...prev, missionId: data.id, missionName: data.mission }
            );
        }
        modalIdx < 3 ? setModalIdx((prev) => prev + 1) : setModalIdx(0);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAssigned(true);
        onClose();
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

export default NotAssigned;
