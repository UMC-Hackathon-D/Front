import React from "react";
import styled from "styled-components";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    width: string;
    height: string;
}

const Modal = ({open, onClose, children, width, height }: ModalProps) => {
    return (
        <>
            <StyledDialog open={open} onClick={onClose}>

                <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </StyledDialog>
        </>
    );
};

export default Modal;

const StyledDialog = styled.dialog.attrs(() => ({ className: "pixel" }))<{
    open: boolean;
}>`

`;
