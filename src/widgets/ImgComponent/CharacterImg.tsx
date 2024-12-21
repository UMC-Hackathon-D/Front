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
    console.log(name);

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
                        <ImgStyleImg key="default" src={img}></ImgStyleImg>
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
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ImgStyleImg = styled.img`
    width: ${cvw(172)};
    height: ${cvh(172)};
    display: flex;
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
const ButtonDiv = styled.div`
    padding: 0px ${cvw(24)};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${cvw(16)};
    margin-top: ${cvh(23.99)};
`;
