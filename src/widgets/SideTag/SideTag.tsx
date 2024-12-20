import styled from "styled-components";
import { cvw, cvh } from "../../shared/utils/unit";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface SideTagProps {
    color: string;
    text: string;
    path: string;
}

const SideTag = ({ color, text, path }: SideTagProps) => {
    const navigate = useNavigate();
    const { pathname: pathName } = useLocation();

    return (
        <SideTagContainer
            onClick={() => navigate(`${path}`)}
            $color={color}
            $isMatch={pathName === path}
        >
            {text}
        </SideTagContainer>
    );
};

interface SideTagContainerProps {
    $color: string;
    $isMatch: boolean;
}

const SideTagContainer = styled.div.attrs(() => ({
    className: "pixel-timer",
}))<SideTagContainerProps>`
    width: ${(props) => (props.$isMatch ? cvw(232) : cvw(180))};
    height: ${cvh(60)};
    border-left: none;
    cursor: pointer;
    background-color: ${(props) => props.$color};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: ${cvw(18)};
`;

export default SideTag;
