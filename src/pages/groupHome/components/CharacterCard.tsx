import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import Bunny from "@assets/image/character/bunny.svg?react";
const CharacterCard = () => {
    return (
        <Container>
            <Card>
                <Bunny />
                <Name>셰이나</Name>
            </Card>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Card = styled.div.attrs({ className: "pixel-timer" })`
    width: ${cvw(300)};
    height: ${cvh(360)};
    display: flex;
    flex-direction: column;
    gap: ${cvh(46)};
    justify-content: center;
    align-items: center;
`;

const Name = styled.div``;
export default CharacterCard;
