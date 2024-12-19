import LeftLogo2 from "@assets/icon/LeftLogo2.svg?react";
import styled from "styled-components";
import { cvh, cvw } from "../shared/utils/unit";
import TimerComponent from "../widgets/TimerComponent/TimerComponent";
import { useNavigate } from "react-router-dom";
export default function Header() {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <StyledLeftLogo2 onClick={() => navigate("/groupHome")} />
            <TimerComponent></TimerComponent>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: ${cvw(1440)};
    height: ${cvh(150)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${cvh(39)} ${cvw(52)} ${cvh(39)} 0px;
`;

const StyledLeftLogo2 = styled(LeftLogo2)`
    width: ${cvw(452)};
    height: ${cvh(72)};
    cursor: pointer;
`;
