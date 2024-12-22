// src/components/Button/index.tsx
import React from "react";
import styled from "styled-components";

interface ButtonProps {
    children: React.ReactNode;
    fontSize: string;
    bgColor: string;
    width: string;
    height: string;
    onClick?: () => void;
    className?: string;
    type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({ children, bgColor, fontSize, width, height, onClick, className, type }: ButtonProps) => (
        <StyledButton bgColor={bgColor} fontSize={fontSize} width={width} height={height} className={className} onClick={onClick} type={type}>
            {children}
        </StyledButton>
);

export default Button;

const StyledButton = styled.button.attrs(() => ({ className: "pixel" }))<{ bgColor: string; fontSize: string; width: string; height: string;}>`
    font-family: 'NeoDunggeunmo', sans-serif;
    font-size: ${({ fontSize }) => fontSize};
    cursor: pointer;
    background-color: ${({ bgColor }) => bgColor};
    width: ${({width}) => width};
    height: ${({height}) => height};
`;