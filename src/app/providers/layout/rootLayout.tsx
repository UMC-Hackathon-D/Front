import { Outlet } from "react-router-dom";
import Header from "../../../pages/Header";
import SideBar from "../../../pages/SideBar";
import styled from "styled-components";
import { cvw, cvh } from "../../../shared/utils/unit";
const RootLayout = () => {
    return (
        <div>
            <Header />
            <FlexBox>
                <SideBar />
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </FlexBox>
        </div>
    );
};

const FlexBox = styled.div`
    display: flex;
`;

const MainContainer = styled.main`
    display: flex;
    align-items: center;
    padding: ${cvh(50)} ${cvw(120)};
`;

export default RootLayout;
