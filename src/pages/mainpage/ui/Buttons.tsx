import { useState } from "react";
import Button from "@shared/ui/Button";
import theme from "@app/styles/theme";
import styled from "styled-components";
import GroupModal from "@pages/mainpage/ui/GroupModal";
import InviteModal from "@pages/mainpage/ui/InviteModal";
import GroupRejoinModal from "@pages/mainpage/ui/GroupRejoinModal";
import { cvh, cvw } from "@shared/utils/unit";

const Buttons = () => {
    const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
    const [isRejoinModalOpen, setIsRejoinModalOpen] = useState(false);

    return (
        <>
            <ButtonWrapper>
                <Button
                    bgColor={theme.yellow.y500}
                    fontSize={theme.headingFontSize.h2}
                    onClick={() => setIsGroupModalOpen(true)}
                    width={cvw(200)}
                    height={cvh(100)}
                >
                    그룹 만들기
                </Button>

                <Button
                    bgColor={theme.red.r500}
                    fontSize={theme.headingFontSize.h2}
                    onClick={() => setIsInviteModalOpen(true)}
                    width={cvw(320)}
                    height={cvh(100)}
                >
                    그룹 코드로 들어가기
                </Button>

                <Button
                    bgColor={theme.blue.b500}
                    fontSize={theme.headingFontSize.h2}
                    onClick={() => setIsRejoinModalOpen(true)}
                    width={cvw(320)}
                    height={cvh(100)}
                >
                    그룹 다시 들어가기
                </Button>
            </ButtonWrapper>

            <GroupModal
                open={isGroupModalOpen}
                onClose={() => setIsGroupModalOpen(false)}
            />
            <InviteModal
                open={isInviteModalOpen}
                onClose={() => setIsInviteModalOpen(false)}
            />
            <GroupRejoinModal
                open={isRejoinModalOpen}
                onClose={() => setIsRejoinModalOpen(false)}
            />
        </>
    );
};

export default Buttons;

// 컨테이너 스타일
const ButtonWrapper = styled.div`
    display: flex;
    gap: ${cvw(58)};
    position: relative;
`;
