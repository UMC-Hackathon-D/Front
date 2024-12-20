import Modal from "@shared/ui/Modal";
import GroupForm from "./GroupForm"; // GroupForm 컴포넌트 임포트
import { cvh, cvw } from "@shared/utils/unit";
import styled from "styled-components";

interface GroupModalProps {
    open: boolean;
    onClose: () => void;
}

const GroupModal = ({ open, onClose }: GroupModalProps) => {
    const onSubmit = (data: any) => {
        console.log(data); // 폼 값 출력
        onClose(); // 폼 제출 후 모달 닫기
    };

    return (
        <Modal open={open} onClose={onClose} width={cvw(996)} height={cvh(720)}>
            <Content>
                <Title>그룹 만들기</Title>
                <GroupForm onSubmit={onSubmit} onClose={onClose} /> {/* onClose 전달 */}
            </Content>
        </Modal>
    );
};

export default GroupModal;

const Content = styled.div`
    padding: ${cvw(32)} ${cvh(90)};
`;

const Title = styled.h2`
    font-size: 32px;
    text-align: center;
    margin-bottom: ${cvw(27)};
`;
