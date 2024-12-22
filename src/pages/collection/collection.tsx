import styled from "styled-components";
import { useState } from "react";
import PersonalDivComonent from "@widgets/PersonNagmanComponent/PersonalDiv";
import MissionReviewModal from "@widgets/Modal/MissionReviewModal";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "@shared/recoil/recoil";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@shared/Apis/Apis";
import { example } from "@pages/groupMember/groupMember";
import { serverInstance } from "@shared/apiInstance";
type data = {
    id: number;
    name: string;
    review: string;
    date: string;
    img?: undefined | string;
    content: string;
};

const Collection = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedData, setSelectedData] = useState<any>(null);
    const location = useLocation();
    const pagePath = location.state?.path;
    console.log(pagePath);

    const loginData = useRecoilValue(loginState);
    console.log(loginData);
    const partyId = loginData?.partyId;
    console.log(partyId);
    const id = loginData?.id;
    console.log(id);
    console.log(loginData);
    const { data } = useQuery({
        queryKey: ["getNangManCollection"],
        queryFn: async () => {
            const res = await serverInstance.get(
                `/api/v1/parties/${loginData.partyId}/collection`
            );
            console.log("낭만 컬렉션 api", res);
        },
    });
    console.log(data);

    const handleOpenModal = (data: data) => {
        setSelectedData(data);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedData(null);
        setIsModalOpen(false);
    };
    return (
        <CollectionDiv>
            {isModalOpen && selectedData && (
                <MissionReviewModal
                    id={selectedData.id}
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    reviewImg={selectedData.img}
                    characterImg={selectedData.img}
                    name={selectedData.name}
                    content={selectedData.content}
                    date={selectedData.date}
                    review={selectedData.review}
                />
            )}
            <GroupCharacterTitleDiv>낭만 모음집</GroupCharacterTitleDiv>
            // example 자리를 다르게 바꾸고
            <GroupCharacterDiv>
                {example.map((data) => {
                    return (
                        <div
                            key={data.id}
                            onClick={() => handleOpenModal(data)}
                        >
                            <PersonalDivComonent
                                img={data.img}
                                width={206}
                                height={206}
                                date={data.date}
                                name={data.name}
                                content={data.content}
                                review={data.review}
                            ></PersonalDivComonent>
                        </div>
                    );
                })}
            </GroupCharacterDiv>
        </CollectionDiv>
    );
};
export default Collection;

const GroupCharacterTitleDiv = styled.div`
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.headingFontSize.h1};
`;

const GroupCharacterDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
`;
const CollectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
