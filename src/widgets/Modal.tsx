import React, { useRef } from "react";
import styled from "styled-components";
import { cvw, cvh } from "../shared/utils/unit";
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    width: number;
    height: number;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    width,
    height,
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

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
        <ModalStyleDialog ref={dialogRef} onCancel={handleClose}>
            <ModalDiv>{children}</ModalDiv>
        </ModalStyleDialog>
    );
};

export default Modal;

const ModalStyleDialog = styled.dialog.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(370)};
    height: ${cvh(277)};
    position: fixed;
    flex-shrink: 0;
`;

const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
