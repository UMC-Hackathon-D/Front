import React from "react";
import Modal from "@shared/ui/Modal";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import CloseButton from "@assets/icon/Close.svg?react";
interface DeleteModalProps {
    id: string;
    open: boolean;
    onClose: () => void;
}
const DeleteModal = ({ id, open, onClose }: DeleteModalProps) => {
    return (
        <>
            <Modal id={id} open={open} onClose={onClose}>
                <CloseButton onClick={onClose} />
                <DeleteModalTitle>그룹 멤버 삭제하기</DeleteModalTitle>
                <UpdateButton>확인</UpdateButton>
            </Modal>
        </>
    );
};
export default DeleteModal;
const DeleteModalTitle = styled.div`
    width: ${cvw(805)};
    height: ${cvh(40)};
`;

const UpdateButton = styled.button.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.red.r500};
`;
