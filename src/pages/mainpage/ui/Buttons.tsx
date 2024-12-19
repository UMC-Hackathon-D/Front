import { useState } from "react";
import Button from "@shared/ui/Button";
import theme from "@app/styles/theme";
import styled from "styled-components";
import GroupModal from "@pages/mainpage/ui/GroupModal";
import InviteModal from "@pages/mainpage/ui/InviteModal";
import { cvh, cvw } from "@shared/utils/unit";

const Buttons = () => {
    const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

    return (
        <>
            <ButtonWrapper>
                <Example1>
                    <ButtonWrapperInner>
                        <Button
                            bgColor={theme.yellow.y500}
                            onClick={() => setIsGroupModalOpen(true)}
                        >
                            그룹 만들기
                        </Button>
                    </ButtonWrapperInner>
                </Example1>

                <Example2>
                    <ButtonWrapperInner>
                        <Button
                            bgColor={theme.red.r500}
                            onClick={() => setIsInviteModalOpen(true)}
                        >
                            그룹 코드로 들어가기
                        </Button>
                    </ButtonWrapperInner>
                </Example2>
            </ButtonWrapper>

            <GroupModal
                open={isGroupModalOpen}
                onClose={() => setIsGroupModalOpen(false)}
            />
            <InviteModal
                open={isInviteModalOpen}
                onClose={() => setIsInviteModalOpen(false)}
            />
        </>
    );
};

export default Buttons;

// 컨테이너 스타일
const ButtonWrapper = styled.div`
    display: flex;
    gap: 40px;
    position: relative;
`;

// 픽셀 보더 스타일
const Example1 = styled.div.attrs(() => ({ className: "pixel" }))`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h2};
    width: ${cvw(204)};
    height: ${cvh(110)};
    background-color: ${({ theme }) => theme.yellow.y500};
`;

// 픽셀 보더 스타일
const Example2 = styled.div.attrs(() => ({ className: "pixel" }))`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h2};
    width: ${cvw(320)};
    height: ${cvh(110)};
    background-color: ${({ theme }) => theme.red.r500};
`;

// 픽셀 보더 내부 버튼 정렬
const ButtonWrapperInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
