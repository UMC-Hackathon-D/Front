import { Outlet } from "react-router-dom";
import Header from "@widgets/Header/Header";
import SideBar from "@widgets/SideBar/SideBar";
import styled from "styled-components";
import { cvw, cvh } from "../../../shared/utils/unit";

import { useRecoilValue } from "recoil";
import { loginState } from "@shared/recoil/recoil";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RootLayout = () => {
    const isLoggedIn = useRecoilValue(loginState);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn.id && !isLoggedIn.partyId) {
            alert("그룹 입장하기를 통해 입장해주세요 !");
            navigate("/");
        }
    }, [isLoggedIn]);

    return isLoggedIn.id && isLoggedIn.partyId ? (
        <>
            <Header />
            <FlexBox>
                <SideBar />
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </FlexBox>
        </>
    ) : null;
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
