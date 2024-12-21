import React from "react";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import { useState } from "react";
import DeleteButton from "@assets/icon/Delete.svg?react";
import Update from "@assets/icon/Update.svg?react";
import DeleteModal from "@widgets/Modal/DeleteModal";
import UpdateModal from "@widgets/Modal/UpdateModal";
const CharacterImgComponent = ({
    img,
    name,
}: {
    img: string;
    name: string;
}) => {
    const [isMouseOn, setIsMouseOn] = useState(false);
    const [modalType, setModalType] = useState<"delete" | "update" | null>(
        null
    );

    const handleOpenModal = (type: "delete" | "update") => {
        setModalType(type);
    };

    const handleCloseModal = () => {
        setModalType(null);
    };
    return (
        <>
            <PersonalCharacter
                onMouseOver={() => {
                    setIsMouseOn(true);
                }}
                onMouseOut={() => setIsMouseOn(false)}
            >
                {!isMouseOn ? (
                    <PersonalReviewImgDiv key="hovered">
                        <ImgDiv>
                            <ImgStyleImg key="default" src={img}></ImgStyleImg>
                        </ImgDiv>
                        <ButtonDiv>
                            <DeleteButtonDiv
                                onClick={() => handleOpenModal("delete")}
                            />
                            <UpdateButtonDiv
                                onClick={() => handleOpenModal("update")}
                            />
                        </ButtonDiv>
                    </PersonalReviewImgDiv>
                ) : (
                    <PersonalCharacterImg key="default">
                        <ImgStyle key="default" src={img}></ImgStyle>
                    </PersonalCharacterImg>
                )}
                {modalType === "delete" && (
                    <DeleteModal
                        id={img}
                        open={modalType === "delete"}
                        onClose={handleCloseModal}
                        name={name}
                    />
                )}
                {modalType === "update" && (
                    <UpdateModal
                        id={img}
                        open={modalType === "update"}
                        onClose={handleCloseModal}
                        name={name}
                    />
                )}
            </PersonalCharacter>
        </>
    );
};
export default CharacterImgComponent;

const PersonalCharacter = styled.div`
    pointer-events: auto;
    width: ${cvw(273)};
    height: ${cvh(270)};
`;
const ImgStyleImg = styled.img`
    width: ${cvw(172)};
    height: ${cvh(172)};
    display: flex;
    border: 1px solid black;
    margin: 0;
`;
const PersonalReviewImgDiv = styled.div.attrs(() => ({
    className: "pixel",
}))`
    width: ${cvw(273)};
    height: ${cvh(270)};
    background-color: ${({ theme }) => theme.yellow.y100};
    pointer-events: auto;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;
const PersonalCharacterImg = styled.div.attrs(() => ({
    className: "pixel",
}))`
    width: ${cvw(273)};
    height: ${cvh(270)};
    pointer-events: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ImgStyle = styled.img`
    width: ${cvw(172)};
    height: ${cvh(172)};
    cursor: pointer;
`;

const DeleteButtonDiv = styled(DeleteButton)`
    width: ${cvw(24)};
    height: ${cvh(23.99)};
`;

const UpdateButtonDiv = styled(Update)`
    width: ${cvw(24)};
    height: ${cvh(23.99)};
`;
const ButtonDiv = styled.span`
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    align-items: center;
    width: 100%;
    margin-right: ${cvw(30)};
`;

const ImgDiv = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
`;
