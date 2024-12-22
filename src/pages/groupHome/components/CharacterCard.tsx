import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import { useRecoilValue } from "recoil";
import { loginState } from "@shared/recoil/recoil";

const CharacterCard = () => {
    const groupData = useRecoilValue(loginState);
    return (
        <Card>
            <img src={groupData.character.photo} />
            <Name>{groupData.name}</Name>
        </Card>
    );
};

const Card = styled.div.attrs({ className: "pixel" })`
    position: absolute;
    bottom: 0;
    right: -70px;
    width: ${cvw(220)};
    height: ${cvh(360)};
    display: flex;
    flex-direction: column;
    gap: ${cvh(46)};
    justify-content: center;
    align-items: center;
`;

const Name = styled.div``;
export default CharacterCard;
