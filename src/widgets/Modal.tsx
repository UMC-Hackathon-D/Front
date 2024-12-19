import React, { useRef } from "react";
import styled from "styled-components";
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    width: number;
    height: number;
};
import { ChoosenDivProps } from "../pages/Home";
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    width,
    height,
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    console.log(width, height);

    React.useEffect(() => {
        const dialog = dialogRef.current;

        if (isOpen) {
            dialog?.showModal();
        } else {
            dialog?.close();
        }
    }, [isOpen]);

    const handleClose = () => {
        onClose();
        dialogRef.current?.close();
    };

    return (
        <ModalStyleDialog
            ref={dialogRef}
            onCancel={handleClose}
            width={width}
            height={height}
        >
            <ModalDiv>{children}</ModalDiv>
        </ModalStyleDialog>
    );
};

export default Modal;

const ModalStyleDialog = styled.dialog.attrs(() => ({ className: "pixel" }))`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    position: fixed;
`;

const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
