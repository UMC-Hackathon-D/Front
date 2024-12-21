import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import Close from "@assets/icon/Close.svg?react";

const Modal3 = ({
    isOpened,
    children,
    setIsModalOpened,
}: {
    isOpened: boolean;
    setIsModalOpened: (prev: boolean) => void;
    children: React.ReactNode;
}) => {
    if (!isOpened) return null;

    console.log(children);

    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (isOpened) {
            if (!dialog?.open) {
                dialog?.showModal(); // 모달을 열기
            }
        } else {
            if (dialog?.open) {
                dialog?.close(); // 모달을 닫기
            }
        }
    }, [isOpened]);

    return (
        <Container ref={dialogRef}>
            <StyledClose onClick={() => setIsModalOpened((prev) => !prev)} />
            <Title></Title>
            {children}
        </Container>
    );
};

const Container = styled.dialog.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(996)};
    height: ${cvh(800)};
    padding: ${cvw(34)} ${cvh(34)};
    gap: ${cvh(36)};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    margin-top: ${cvh(66)};
`;

const StyledClose = styled(Close)`
    position: absolute;
    right: ${cvh(34)};
    width: ${cvw(44)};
    height: ${cvh(44)};
    cursor: pointer;
`;

export default Modal3;
