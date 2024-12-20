import React from "react";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import { useState } from "react";
import DeleteButton from "@assets/icon/Delete.svg?react";
import Update from "@assets/icon/Update.svg?react";
const CharacterImgComponent = ({ img }: { img: string }) => {
    const [isMouseOn, setIsMouseOn] = useState(false);
    return (
        <PersonalCharacterDiv
            onMouseOver={() => {
                setIsMouseOn(true);
            }}
            onMouseOut={() => setIsMouseOn(false)}
        >
            {isMouseOn ? (
                <PersonalReviewImgDiv key="hovered">
                    <ImgStyleImg key="default" src={img}></ImgStyleImg>
                    <DeleteButtonDiv />
                    <UpdateButtonDiv />
                </PersonalReviewImgDiv>
            ) : (
                <ImgStyle key="default" src={img}></ImgStyle>
            )}
        </PersonalCharacterDiv>
    );
};
export default CharacterImgComponent;

const PersonalCharacterDiv = styled.div`
    pointer-events: auto;
    width: ${cvw(273)};
    height: ${cvh(270)};
`;
const ImgStyleImg = styled.img`
    width: ${cvw(273)};
    height: ${cvh(270)};
`;
const PersonalReviewImgDiv = styled.div.attrs(() => ({
    className: "pixel",
}))`
    width: ${cvw(273)};
    height: ${cvh(270)};
    background-color: ${({ theme }) => theme.yellow.y100};
    pointer-events: auto;
    cursor: pointer;
`;
const ImgStyle = styled.img.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(273)};
    height: ${cvw(270)};

    cursor: pointer;
`;

const ButtonDiv = styled.div`
    display: flex;
`;

const DeleteButtonDiv = styled(DeleteButton)`
    width: ${cvw(24)};
    height: ${cvh(23.99)};
`;

const UpdateButtonDiv = styled(Update)`
    width: ${cvw(24)};
    height: ${cvh(23.99)};
`;
