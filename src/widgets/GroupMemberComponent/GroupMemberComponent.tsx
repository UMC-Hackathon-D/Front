import { cvh, cvw } from "@shared/utils/unit";
import React from "react";
import ImgComponent from "@widgets/ImgComponent/ImgComponent";
import styled from "styled-components";
const GroupMemberComponent = ({
    characterImg,
    name,
    width,
    height,
    review,
}: {
    characterImg: string;
    name: string;
    width: number;
    height: number;
    review: string;
}) => {
    return (
        <div>
            <ImgComponent
                key={characterImg}
                img={characterImg}
                width={width}
                height={height}
                review={review}
            ></ImgComponent>
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
