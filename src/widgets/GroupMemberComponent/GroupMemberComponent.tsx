import { cvh, cvw } from "@shared/utils/unit";
import React from "react";
import ImgComponent from "@widgets/ImgComponent/ReviewImgComponent";
import styled from "styled-components";
import CharacterImgComponent from "@widgets/ImgComponent/CharacterImgComponent";
const GroupMemberComponent = ({
    characterImg,
    name,
}: {
    characterImg: string;
    name: string;
}) => {
    return (
        <div>
            <CharacterImgComponent
                key={characterImg}
                img={characterImg}
            ></CharacterImgComponent>
            <div>{name}</div>
        </div>
    );
};
export default GroupMemberComponent;

const GroupMemberComponentDiv = styled.div.attrs(() => ({
    className: "pixel",
}))`
    width: ${cvw(273)};
    height: ${cvh(270)};
`;
