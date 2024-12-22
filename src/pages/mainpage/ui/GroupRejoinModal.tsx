import Modal from "@widgets/Modal/Modal";
import GroupRejoinForm from "./GroupRejoinForm";
import { cvh, cvw } from "@shared/utils/unit";
import styled from "styled-components";
import theme from "@app/styles/theme";

interface GroupRejoinModalProps {
    open: boolean;
    onClose: () => void;
}

const GroupRejoinModal = ({ open, onClose }: GroupRejoinModalProps) => {
    const onSubmit = () => {
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    return (
        <Modal open={open} onClose={onClose} width={cvw(996)} height={cvh(497)}>
            <Content>
                <Title>그룹 다시 들어가기</Title>
                <GroupRejoinForm onSubmit={onSubmit} onClose={onClose} />
            </Content>
        </Modal>
    );
};

export default GroupRejoinModal;

const Content = styled.div`
    padding-right: ${cvw(90)};
    padding-left: ${cvw(90)};
`;

const Title = styled.h2`
    font-size: ${theme.headingFontSize.h1};
    text-align: center;
    margin-top: ${cvh(45)};
    margin-bottom: ${cvh(95)};
`;
