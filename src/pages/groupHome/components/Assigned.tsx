import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import Modal2 from "@widgets/Modal/Modal2";
import { useState } from "react";
import MissionCertificate from "./ModalInner/MissionCertificate";
const Assigned = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const onClose = () => {
        setIsOpened(false);
    };
    return (
        <>
            <Container>
                <span>오늘의 미션</span>
                <div className="mission pixel">
                    어릴 적 먹었던 불량식품 사먹기
                </div>
                <button
                    className="pixel"
                    onClick={() => setIsOpened((prev) => !prev)}
                >
                    인증하기
                </button>
            </Container>

            <Modal2
                isOpened={isOpened}
                text={"미션 인증하기"}
                onClose={onClose}
            >
                <MissionCertificate />
            </Modal2>
        </>
    );
};

export default Assigned;

const Container = styled.div`
    margin-top: ${cvh(250)};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${cvh(25)};

    & > span {
        color: ${({ theme }) => theme.black.b900};
        font-size: ${({ theme }) => theme.headingFontSize.h1};
    }

    & > .mission {
        width: ${cvw(690)};
        height: ${cvh(80)};
        background-color: ${({ theme }) => theme.black.b100};
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${({ theme }) => theme.headingFontSize.h4};
    }

    & > button {
        margin-top: ${cvh(85)};
        font-size: ${({ theme }) => theme.headingFontSize.h2};
        padding: ${cvw(21)} ${cvh(60)};
        background-color: ${({ theme }) => theme.blue.b500};
        cursor: pointer;
    }
`;
