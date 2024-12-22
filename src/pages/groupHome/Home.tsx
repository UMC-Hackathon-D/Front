import styled from "styled-components";
import NotAssigned from "@pages/groupHome/components/NotAssigned";
import Assigned from "@pages/groupHome/components/Assigned";
import CharacterCard from "@pages/groupHome/components/CharacterCard";
import { useRecoilValue } from "recoil";
import { loginState } from "@shared/recoil/recoil";
import { useQuery } from "@tanstack/react-query";
import { serverInstance } from "@shared/apiInstance";

const Home = () => {
    const groupData = useRecoilValue(loginState);

    const { data: isAssigned, refetch } = useQuery({
        queryKey: ["isAssigned"],
        queryFn: async () => {
            const res = await serverInstance.get(
                `/api/v1/parties/${groupData.partyId}/users/${groupData.id}/mission/status`
            );
            return res.data.success;
        },
    });
    console.log("해당 그룹원들 api", groupData);
    console.log("배정받은 미션이 있는지 없는지에 대한 api", isAssigned);

    return (
        <HomeContainer>
            {isAssigned && isAssigned.status !== "null" ? (
                <Assigned
                    data={isAssigned}
                    refetch={refetch}
                    missionId={isAssigned.missionDetails.userMissionId}
                />
            ) : (
                <NotAssigned refetch={refetch} />
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
