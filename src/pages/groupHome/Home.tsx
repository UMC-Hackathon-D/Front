import styled from "styled-components";

import NotAssigned from "@pages/groupHome/components/NotAssigned";
import Assigned from "@pages/groupHome/components/Assigned";
import CharacterCard from "@pages/groupHome/components/CharacterCard";
import { useState } from "react";

const Home = () => {
    const [isAssigned, setIsAssigned] = useState<boolean>(false);
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
