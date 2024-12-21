import styled from "styled-components";
import NotTakenMission from "@pages/groupHome/components/NotTakenMission";
import CharacterCard from "@pages/groupHome/components/CharacterCard";
const Home = () => {
    // const getMission = async () => {
    //     const res = await serverInstance.post("/api/v1/parties/create", {
    //         partyName: "zz",
    //         name: "깡태",
    //         numMember: 3,
    //         password: "asdf",
    //     });
    //     console.log(res.data);
    // };
    // getMission();
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
