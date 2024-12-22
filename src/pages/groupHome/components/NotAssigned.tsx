import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import Modal3 from "@widgets/Modal/Modal3";
import { useState, useEffect } from "react";
import ModalInner from "./ModalInner/ModalInner";
import { useRecoilValue } from "recoil";
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

const NotAssigned = ({
    refetch,
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

    const groupData = useRecoilValue(loginState);

    const { data: personData } = useQuery({
        queryKey: ["personData", groupData.partyId, groupData.id],
        queryFn: async () => {
            const res = await serverInstance.get(
                `/api/v1/parties/${groupData.partyId}/users/${groupData.id}/available-targets`
            );
            return res.data.success;
        },
    });

    const { data: missionData } = useQuery({
        queryKey: ["missionData"],
        queryFn: async () => {
            const res = await serverInstance.get("/api/v1/missions/random");
            return res.data.success;
        },
    });

    // 중간에 X 버튼 누를 때
    const onClose = () => {
        setIsModalOpened(false);
        setModalIdx(0);
    };

    // 카드 클릭했을 때
    const onClick = (data: PersonData | Mission) => {
        if (modalIdx === 0 || modalIdx === 2) {
            setData((prev) =>
                modalIdx === 0
                    ? {
                          ...prev,
                          targetUserId: data.id,
                          targetUserName: data.name,
                      }
                    : {
                          ...prev,
                          missionId: data.id,
                          missionName: data.missionContent,
                      }
            );
        }
        modalIdx < 3 ? setModalIdx((prev) => prev + 1) : setModalIdx(0);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await serverInstance.post(
                `/api/v1/parties/${groupData.partyId}/users/${groupData.id}/missions`,
                {
                    targetUserId: data.targetUserId,
                    missionId: data.missionId,
                }
            );
            if (res.status === 200) {
                refetch();
                onClose();
            }
        } catch (err) {
            alert("비정상적인 접근입니다.");
            onClose();
        }
    };
    return personData ? (
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
    ) : (
        <NoFriend>미션을 할 친구가 없어요😢</NoFriend>
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

const NoFriend = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.headingFontSize.h1};
`;
export default NotAssigned;
