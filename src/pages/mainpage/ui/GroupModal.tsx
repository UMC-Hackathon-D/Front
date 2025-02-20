import { useState } from "react";
import Modal from "@widgets/Modal/Modal";
import GroupForm from "./GroupForm"; // GroupForm 컴포넌트 임포트
import { cvh, cvw } from "@shared/utils/unit";
import styled from "styled-components";
import theme from "@app/styles/theme";
import CharacterModal from "@pages/mainpage/ui/CharacterModal";

interface GroupModalProps {
    open: boolean;
    onClose: () => void;
}

interface FormData {
    partyName: string;
    name: string;
    password: string;
}

const GroupModal = ({ open, onClose }: GroupModalProps) => {
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
                    <Title>그룹 만들기</Title>
                    <GroupForm onSubmit={handleConfirm} onClose={onClose} />
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

export default GroupModal;

const Content = styled.div`
    padding-right: ${cvw(90)};
    padding-left: ${cvw(90)};
`;

const Title = styled.h2`
    font-size: ${theme.headingFontSize.h1};
    text-align: center;
    margin-top: ${cvh(45)};
    margin-bottom: ${cvh(27)};
`;
