import React from "react";
import Modal from "@widgets/Modal";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
interface UpdateModalProps {
    id: string;
    open: boolean;
    onClose: () => void;
    name: string;
}
const UpdateModal = ({ id, open, onClose, name }: UpdateModalProps) => {
    return (
        <Modal id={id} open={open} onClose={onClose}>
            <div>
                <DeleteModalTitle>닉네임 수정하기</DeleteModalTitle>
                <div>
                    <NickNameDiv>닉네임</NickNameDiv>
                    <NickNameInput
                        type="text"
                        defaultValue={name}
                    ></NickNameInput>
                </div>
                <UpdateButton>수정하기</UpdateButton>
            </div>
        </Modal>
    );
};
export default UpdateModal;

const DeleteModalTitle = styled.div.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(805)};
    height: ${cvh(40)};
`;

const NickNameDiv = styled.div`
    font-size: ${({ theme }) => theme.headingFontSize.h3};
`;

const NickNameInput = styled.input.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.black.b100};
`;

const UpdateButton = styled.button.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.blue.b500};
`;
