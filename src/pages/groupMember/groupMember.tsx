import React from "react";
import styled from "styled-components";
import DeleteLogo from "@assets/icon/Delete.svg?react";
import Update from "@assets/icon/Update.svg?react";
import Modal from "@widgets/Modal";
import ImgComponent from "@widgets/ImgComponent/ImgComponent";
import ContentComponent from "@widgets/ContentComponent/ContentComponent";
import { date } from "zod";
import GroupMemberComponent from "@widgets/GroupMemberComponent/GroupMemberComponent";
export const example = [
    {
        img: "https://image.bugsm.co.kr/album/images/500/40752/4075248.jpg",
        name: "셰이나",
        id: 1,
        review: "자고 싶다",
    },
    {
        img: "https://image.bugsm.co.kr/album/images/200/193874/19387484.jpg?version=20230503022513.0",
        name: "미니",
        id: 2,
        date: "2024.12.20",
        content: "친구에게 사랑한다 말하기",
        review: "자고 싶다",
    },
    {
        img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8d/d7/0f/8dd70fba-0a8f-b7ce-a2d2-f0d32dad2837/8809912894132.jpg/1200x1200bf-60.jpg",
        name: "무랫",
        id: 3,
        date: "2024.12.20",
        review: "자고 싶다",
    },
    {
        img: "https://image.bugsm.co.kr/album/images/200/7222/722272.jpg?version=20220514022202.0",
        name: "옌찌",
        id: 4,
        date: "2024.12.20",
        review: "자고 싶다",
    },
    // { img: "", name: "나나", id: 5 },
    // { img: "", name: "강림", id: 6 },
];
const GroupMember = () => {
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div>
            <GroupCharacterTitleDiv>그룹 멤버 보기</GroupCharacterTitleDiv>
            <GroupCharacterDiv>
                {example.map((data) => {
                    const [isDeleteModalOpen, setDeleteModalOpen] =
                        React.useState(false);
                    const [isUpdateModalOpen, setUpdateModalOpen] =
                        React.useState(false);
                    return (
                        <GroupMemberComponent
                            characterImg={data.img}
                            name={data.name}
                        ></GroupMemberComponent>
                    );
                })}
            </GroupCharacterDiv>
        </div>
    );
};
export default GroupMember;

//css
const GroupCharacterTitleDiv = styled.div`
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.headingFontSize.h1};
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
const DeleteDiv = styled.div`
    width: 24px;
    height: 23.99px;
    cursor: pointer;
`;
const UpdateDiv = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
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
