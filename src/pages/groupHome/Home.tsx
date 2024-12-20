import styled from "styled-components";
import NotTakenMission from "@pages/groupHome/components/NotTakenMission";
import CharacterCard from "@pages/groupHome/components/CharacterCard";

const Home = () => {
    return (
        <HomeContainer>
            <NotTakenMission />
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
`;

export default Home;
