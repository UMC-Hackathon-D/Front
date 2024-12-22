import React, { forwardRef } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string | number;
    width?: string;
    fontSize?: string;
    height?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            value,
            type = "text",
            width = "100%",
            fontSize = "20px",
            height = "40px",
            onChange,
            ...props
        },
        ref
    ) => {
        return (
            <StyledInput
                ref={ref}
                value={value}
                type={type}
                width={width}
                fontSize={fontSize}
                height={height}
                onChange={onChange}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

export default Input;

const StyledInput = styled.input.attrs(() => ({ className: "pixel" }))<{
    width: string;
    fontSize: string;
    height: string;
}>`
    font-family: "NeoDunggeunmo", sans-serif;
    font-size: ${({ fontSize }) => fontSize};
    padding: 20px 15px;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    box-sizing: border-box;
    outline: none;
`;
