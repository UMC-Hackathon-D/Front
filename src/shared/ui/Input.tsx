import React from "react";
import styled from "styled-components";

interface InputProps {
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    min?: number;
    width?: string;  // 너비를 커스터마이징할 수 있도록 추가
}

const Input = ({ value, onChange, type = "text", min, width = "100%" }: InputProps) => (
    <StyledInput
        value={value}
        onChange={onChange}
        type={type}
        min={min}
        width={width}
    />
);

export default Input;

const StyledInput = styled.input.attrs(() => ({ className: "pixel" }))`
    font-family: 'NeoDunggeunmo', sans-serif;
    font-size: 20px;
    padding: 20px 15px;
    width: ${({ width }) => width || "100%"};
    box-sizing: border-box;
`;
