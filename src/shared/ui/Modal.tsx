import React from "react";
import styled from "styled-components";

interface ModalProps {
    id: string;
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ id, open, onClose, children }: ModalProps) => {
    return (
        <>
            <StyledDialog id={id} open={open} onClick={onClose}>
                <div onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </StyledDialog>
        </>
    );
};

export default Modal;

const StyledDialog = styled.dialog.attrs(() => ({ className: "pixel" }))<{ open: boolean }>`
`;
