import { Outlet } from "react-router-dom";
import Header from "@widgets/Header/Header";
import SideBar from "@widgets/SideBar/SideBar";
import styled from "styled-components";
import { cvw, cvh } from "../../../shared/utils/unit";
const RootLayout = () => {
    return (
        <>
            <Header />
            <FlexBox>
                <SideBar />
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </FlexBox>
        </>
    );
};

const FlexBox = styled.div`
    display: flex;
`;

const MainContainer = styled.main`
    width: 100%;
    height: ${cvh(874)};
    display: flex;
    align-items: center;
    padding: ${cvh(50)} ${cvw(120)};
`;

export default RootLayout;
