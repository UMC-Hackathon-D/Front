import { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "@app/styles/theme";

interface CustomAlertProps {
    message: string;
    duration?: number;
    onClose?: () => void;
}

const CustomAlert = ({
    message,
    duration = 3000,
    onClose,
}: CustomAlertProps) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onClose) onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    return <AlertBox>{message}</AlertBox>;
};

export default CustomAlert;

const AlertBox = styled.div.attrs(() => ({ className: "pixel" }))`
    position: fixed;
    background: ${theme.red.r100};
    padding: 12px 24px;
    z-index: 1000;
    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
