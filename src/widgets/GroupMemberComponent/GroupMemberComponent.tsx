import { cvh, cvw } from "@shared/utils/unit";
import React from "react";
import styled from "styled-components";
const GroupMemberComponent = ({
    characterImg,
    name,
}: {
    characterImg: string;
    name: string;
}) => {
    return (
        <div>
            <CharacterImg src={characterImg}></CharacterImg>
            <div>{name}</div>
        </div>
    );
};
export default GroupMemberComponent;

const CharacterImg = styled.img.attrs(() => ({
    className: "pixel",
}))`
    width: ${cvw(273)};
    height: ${cvh(270)};
`;
