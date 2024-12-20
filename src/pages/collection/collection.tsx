import styled from "styled-components";
import { useState } from "react";
import Modal from "../../widgets/Modal";
import CloseButton from "@assets/icon/CloseButton.svg?react";
import { example } from "@pages/groupMember/groupMember";
import React from "react";
import PersonalDivComonent from "@widgets/PersonNagmanComponent/PersonalDivComponent";
type data = {
    id: string;
    title: string;
    price: string;
    img?: undefined | string;
    singer: string;
    amout?: number;
};
const Collection = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [selectedData, setSelectedData] = useState<data>();
    return (
        <div>
            <GroupCharacterTitleDiv>낭만 모음집</GroupCharacterTitleDiv>
            <GroupCharacterDiv>
                {example.map((data) => {
                    const [isDeleteModalOpen, setDeleteModalOpen] =
                        React.useState(false);
                    const [isUpdateModalOpen, setUpdateModalOpen] =
                        React.useState(false);
                    return (
                        <PersonalDivComonent
                            img={data.img}
                            width={206}
                            height={206}
                            date={data.date}
                            name={data.name}
                            content={data.content}
                            review={data.review}
                        ></PersonalDivComonent>
                    );
                })}
            </GroupCharacterDiv>
        </div>
    );
};
export default Collection;

const GroupCharacterTitleDiv = styled.div`
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.headingFontSize.h1};
`;
const CharacterDiv = styled.div`
    width: 273px;
    height: 320px;
`;
const GroupCharacterDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
`;
const EachCharacterDiv = styled.div.attrs(() => ({ className: "pixel" }))`
    width: 273px;
    height: 270px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px;
    column-gap: 10px;
    background-color: ${({ theme }) => theme.black.b100};
`;

const EachUserNameDiv = styled.div`
    width: 96px;
    height: 40px;
    margin-top: 5px;
    font-size: ${({ theme }) => theme.headingFontSize.h3};
`;

const DetailModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;
const ModalTitleDiv = styled.div`
    width: 805px;
    height: 40px;
    text-align: center;
    align-content: center;
`;
const DeleteModalContentDiv = styled.div`
    width: 805px;
    height: 40px;
    text-align: center;
`;

const DeleteModalAccessButton = styled.button.attrs(() => ({
    className: "pixel",
}))`
    width: 180px;
    height: 70px;
    font-size: ${({ theme }) => theme.headingFontSize.h2};
    background-color: ${({ theme }) => theme.red.r500};
    cursor: pointer;
`;

const UpdateModalContentDiv = styled.div`
    width: 805px;
    height: 55px;
    display: flex;
    text-align: center;
`;
const UpdateModalNameDiv = styled.div`
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-right: 5px;
`;
const UpdateNameInput = styled.input.attrs(() => ({
    className: "pixel",
}))`
    width: 690px;
    height: 55px;
`;
// 만약 이미지를 넣을거면 이거 쓰셈
// const EachCharacterImg = styled.img`
//     width: 150px;
//     height: 150px;
// `;

{
    /* <EachCharacterImg
                                    src={data?.img}
                                    width="150px"
                                    height="150px"
                                ></EachCharacterImg> */
}

const NagManDataDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const ImgStyle = styled.img.attrs(() => ({ className: "pixel" }))`
    text-align: center;
    margin-top: 50px;
    justify-content: center;
`;
const TitleStyle = styled.div.attrs(() => ({ className: "pixel" }))`
    text-align: center;
    margin-top: 50px;
    width: 580px;
    height: 104px;
    align-content: center;
`;

const PriceStyle = styled.div.attrs(() => ({ className: "pixel" }))`
    text-align: center;
    margin-top: 50px;
    width: 580px;
    height: 155px;
    align-content: center;
`;

const CloseButtonDiv = styled.div`
    width: 750px;
    height: 44px;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`;
