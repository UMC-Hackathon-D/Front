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

interface FormData {
    partyName: string;
    name: string;
    password: string;
}

const InviteModal = ({ open, onClose }: GroupModalProps) => {
    const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);
    const [data, setData] = useState<FormData | undefined>();

    const handleConfirm = (data: FormData) => {
        onClose();
        setData(data);
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
                height={cvh(571)}
            >
                <Content>
                    <Title>초대 코드로 들어가기</Title>

                    <InviteForm onSubmit={handleConfirm} />
                </Content>
            </Modal>

            <CharacterModal
                open={isCharacterModalOpen}
                inputData={data}
                onClose={handleCloseCharacterModal}
            />
        </>
    );
};

export default InviteModal;

const Content = styled.div`
    padding-right: ${cvw(90)};
    padding-left: ${cvw(90)};
`;

const Title = styled.h2`
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    text-align: center;
    margin-bottom: ${cvh(95)};
    margin-top: ${cvh(45)};
`;
