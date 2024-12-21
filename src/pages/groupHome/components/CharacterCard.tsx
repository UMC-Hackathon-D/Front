import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import Bunny from "@assets/image/character/bunny.svg?react";
const CharacterCard = () => {
    return (

        <Card>
            <Bunny />
            <Name>셰이나</Name>
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
