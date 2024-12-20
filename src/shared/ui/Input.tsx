import React, { forwardRef } from "react";
import styled from "styled-components";

interface InputProps {
    value?: string | number;
    type?: string;
    width?: string;
    fontSize?: string;
    height?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ value, type = "text", width = "100%", fontSize = "20px", height = "40px" }, ref) => {
        return (
            <StyledInput
                ref={ref}  // ref 전달
                value={value}  // value 전달
                type={type}
                width={width}
                fontSize={fontSize}
                height={height}
            />
        );
    }
);

Input.displayName = "Input"; // forwardRef 사용 시 displayName 설정

export default Input;

const StyledInput = styled.input.attrs(() => ({ className: "pixel" }))<{
    width: string;
    fontSize: string;
    height: string;
}>`
    font-family: 'NeoDunggeunmo', sans-serif;
    font-size: ${({ fontSize }) => fontSize};
    padding: 20px 15px;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    box-sizing: border-box;
`;
