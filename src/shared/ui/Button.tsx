// src/components/Button/index.tsx
import React from "react";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";

interface ButtonProps {
    children: React.ReactNode;
    bgColor: string;
    onClick?: () => void;
    className?: string;
}

const Button = ({ children, bgColor, onClick, className }: ButtonProps) => (
        <StyledButton bgColor={bgColor} className={className} onClick={onClick}>
            {children}
        </StyledButton>
);

export default Button;

const StyledButton = styled.button<{ bgColor: string }>`
    font-family: 'NeoDunggeunmo', sans-serif;
    font-size: 28px;
    border-radius: 8px;
    border-style: none;
    cursor: pointer;
    background-color: ${({ bgColor }) => bgColor};
`;

// 예시로 만든 컴포넌트
// pixel border 적용 예시 및 theme 적용 방법 참고하세요
const Example = styled.div.attrs(() => ({ className: "pixel" }))`
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    border-radius: 10px;
    width: ${cvw(450)};
    height: ${cvh(150)};
`;