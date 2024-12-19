import React from "react";
import theme from "../app/styles/theme";
import styled from "styled-components";
import { cvw, cvh } from "../shared/utils/unit";
import Bar from "./bar";
import { Navigate, useNavigate } from "react-router-dom";
export default function sideBar() {
    const navigate = useNavigate();
    return (
        <SideBarDiv>
            <HomeSideBarDiv
                onClick={() => {
                    navigate("/home");
                }}
            >
                홈
            </HomeSideBarDiv>
            <NangManCollectionSideBarDiv
                onClick={() => {
                    navigate("Collection");
                }}
            >
                낭만 모음집
            </NangManCollectionSideBarDiv>
            <MemberSideBarDiv
                onClick={() => {
                    navigate("GroupMember");
                }}
                style={{}}
            >
                그룹 멤버 보기
            </MemberSideBarDiv>
        </SideBarDiv>
    );
}

const SideBarDiv = styled.div`
    background-color: ${({ theme }) => theme.black.b100};
    width: 280px;
    height: 874px;
`;

const HomeSideBarDiv = styled.div.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.yellow.y500};
    display: flex;
    width: 190px;
    height: 60px;
    margin-bottom: 5px;
    justify-content: flex-end;
    align-items: center;
    margin-top: 80px;
    cursor: pointer;
`;

const NangManCollectionSideBarDiv = styled.div.attrs(() => ({
    className: "pixel",
}))`
    background-color: ${({ theme }) => theme.red.r500};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 190px;
    height: 60px;
    margin-top: 20px;
    cursor: pointer;
`;
const MemberSideBarDiv = styled.div.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.blue.b500};
    width: 190px;
    height: 60px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
