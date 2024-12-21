import styled from "styled-components";
import NotAssigned from "@pages/groupHome/components/NotAssigned";
import Assigned from "@pages/groupHome/components/Assigned";
import CharacterCard from "@pages/groupHome/components/CharacterCard";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "@shared/recoil/recoil";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [isAssigned, setIsAssigned] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

    const navigate = useNavigate();

    console.log(isLoggedIn);

    if (isLoggedIn.success === null && !isLoggedIn.isLoggedIn) {
        alert("그룹 입장하기를 통해 입장해주세요 !");
        navigate("/");
        return null; // 화면 렌더링 차단
    }

    // useEffect(() => {
    //     if (isLoggedIn.success === null && !isLoggedIn.isLoggedIn) {
    //         alert("그룹 입장하기를 통해 입장해주세요 !");
    //         navigate("/");
    //     }
    // }, [isLoggedIn, navigate]);

    return (
        <HomeContainer>
            {isAssigned ? (
                <Assigned />
            ) : (
                <NotAssigned setIsAssigned={setIsAssigned} />
            )}
            <CharacterCard />
        </HomeContainer>
    );
};

const HomeContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    position: relative;
`;

export default Home;
