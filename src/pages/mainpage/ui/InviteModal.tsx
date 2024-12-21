import { useState } from "react";
import Modal from "@widgets/Modal/Modal";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import CharacterModal from "@pages/mainpage/ui/CharacterModal";
import InviteForm from "@pages/mainpage/ui/InviteForm";

interface GroupModalProps {
    open: boolean;
    onClose: () => void;
}

const InviteModal = ({ open, onClose }: GroupModalProps) => {
    const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);

    const handleConfirm = (data: {
        groupName: string;
        nickname: string;
        groupCode: string;
    }) => {
        onClose();
        setIsCharacterModalOpen(true);
    };

    const handleCloseCharacterModal = () => {
        setIsCharacterModalOpen(false);
    };

    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                width={cvw(996)}
                height={cvh(720)}
            >
                <Content>
                    <Title>초대 코드로 들어가기</Title>

                    <InviteForm onSubmit={handleConfirm} />
                </Content>
            </Modal>

            <CharacterModal
                open={isCharacterModalOpen}
                onClose={handleCloseCharacterModal}
            />
        </>
    );
};

export default InviteModal;

const Content = styled.div`
    padding: ${cvw(32)} ${cvh(90)};
`;

const Title = styled.h2`
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    text-align: center;
    margin-bottom: ${cvw(60)};
`;
