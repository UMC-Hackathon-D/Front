import React from "react";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import { useState } from "react";
import DeleteButton from "@assets/icon/Delete.svg?react";
import Update from "@assets/icon/Update.svg?react";
import DeleteModal from "@widgets/Modal/DeleteModal";
import UpdateModal from "@widgets/Modal/UpdateModal";
import { CharacterImgData } from "@shared/data/CharacterImgData";
const CharacterImgComponent = ({
    id,
    characterId,
    name,
}: {
    id: number;
    characterId: number;
    name: string;
}) => {
    console.log(id);

    const [isMouseOn, setIsMouseOn] = useState(false);
    const [modalType, setModalType] = useState<"delete" | "update" | null>(
        null
    );

    const img = CharacterImgData[characterId - 1]?.photo;

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
                {isMouseOn ? (
                    <PersonalReviewImgDiv key="hovered">
                        <ImgDiv>
                            <ImgStyleImg key="default" src={img}></ImgStyleImg>
                        </ImgDiv>
                        <ButtonSpan>
                            <DeleteButtonDiv
                                onClick={() => handleOpenModal("delete")}
                            />
                            <UpdateButtonDiv
                                onClick={() => handleOpenModal("update")}
                            />
                        </ButtonSpan>
                    </PersonalReviewImgDiv>
                ) : (
                    <PersonalCharacterImg key="default">
                        <ImgStyle key="default" src={img}></ImgStyle>
                    </PersonalCharacterImg>
                )}
                {modalType === "delete" && (
                    <DeleteModal
                        id={id}
                        open={modalType === "delete"}
                        onClose={handleCloseModal}
                        name={name}
                    />
                )}
                {modalType === "update" && (
                    <UpdateModal
                        id={id}
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
const ButtonSpan = styled.span`
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    align-items: center;
    width: 100%;
    margin-right: ${cvw(30)};
    margin-top: ${cvh(30)};
`;

const ImgDiv = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
`;
