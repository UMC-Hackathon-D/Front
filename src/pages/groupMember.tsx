import React, { useState } from "react";
import styled from "styled-components";
import DeleteLogo from "@assets/icon/Delete.svg?react";
import Update from "@assets/icon/Update.svg?react";
import Modal from "../widgets/Modal";
export const example = [
    { img: "", name: "셰이나", id: 1 },
    { img: "", name: "미니", id: 2 },
    { img: "", name: "무랫", id: 3 },
    { img: "", name: "옌찌", id: 4 },
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
                        <CharacterDiv key={data.id}>
                            <EachCharacterDiv>
                                <DeleteDiv
                                    onClick={(e) => {
                                        setDeleteModalOpen(true);
                                        e.stopPropagation();
                                    }}
                                >
                                    {isDeleteModalOpen && (
                                        <Modal
                                            isOpen={isDeleteModalOpen}
                                            onClose={() =>
                                                setDeleteModalOpen(false)
                                            }
                                            width={996}
                                            height={441}
                                        >
                                            <DetailModalDiv>
                                                <ModalTitleDiv>
                                                    그룹 멤버 삭제하기
                                                </ModalTitleDiv>
                                                <DeleteModalContentDiv>
                                                    {data.name}님을 삭제
                                                    하시겠습니까?
                                                </DeleteModalContentDiv>
                                                <DeleteModalAccessButton
                                                    onClick={(e) => {
                                                        setDeleteModalOpen(
                                                            false
                                                        );
                                                        e.stopPropagation();
                                                    }}
                                                >
                                                    확인
                                                </DeleteModalAccessButton>
                                            </DetailModalDiv>
                                        </Modal>
                                    )}

                                    <DeleteLogo />
                                </DeleteDiv>
                                <UpdateDiv
                                    onClick={() => {
                                        setUpdateModalOpen(true);
                                    }}
                                >
                                    {isUpdateModalOpen && (
                                        <Modal
                                            isOpen={isUpdateModalOpen}
                                            onClose={() =>
                                                setUpdateModalOpen(false)
                                            }
                                            width={996}
                                            height={441}
                                        >
                                            <DetailModalDiv>
                                                <ModalTitleDiv>
                                                    닉네임 수정하기
                                                </ModalTitleDiv>
                                                <UpdateModalContentDiv>
                                                    <UpdateModalNameDiv>
                                                        닉네임
                                                    </UpdateModalNameDiv>
                                                    <UpdateNameInput type="text"></UpdateNameInput>
                                                </UpdateModalContentDiv>
                                                <DeleteModalAccessButton
                                                    onClick={(e) => {
                                                        setUpdateModalOpen(
                                                            false
                                                        );
                                                        e.stopPropagation();
                                                    }}
                                                >
                                                    수정하기
                                                </DeleteModalAccessButton>
                                            </DetailModalDiv>
                                        </Modal>
                                    )}
                                    <Update />
                                </UpdateDiv>
                            </EachCharacterDiv>

                            <EachUserNameDiv>{data?.name}</EachUserNameDiv>
                        </CharacterDiv>
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
