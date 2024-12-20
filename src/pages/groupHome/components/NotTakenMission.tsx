import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import Modal3 from "@widgets/Modal/Modal3";
// 모달 안에 들어갈 컴포넌트들
import PersonCard from "./ModalInner/PersonCard";
import Mission from "./ModalInner/Mission";
import MissionGuide from "./ModalInner/MissionGuide";

const componentArr = [
    { title: "인물 선택하기", comp: <PersonCard /> },
    { title: "미션 선택하기", comp: <Mission /> },
    { title: "미션 선택 완료", comp: <MissionGuide /> },
];

// useForm 이용해서 제출할 수 있게 만들어야 됨
// 클릭시 카드 뒤집히게

const NotTakenMission = () => {
    // modal 총 4개
    return (
        <>
            <Container>
                <span>오늘의 미션을 달성해봐요 !</span>
                <button className="pixel-timer">미션 하기</button>
            </Container>
            <Modal3 title={"인물 선택하기"} isOpened={false}>
                <Mission></Mission>
            </Modal3>
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
