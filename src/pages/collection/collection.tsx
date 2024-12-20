import styled from "styled-components";
import { useState } from "react";
import { example } from "@pages/groupMember/groupMember";
import PersonalDivComonent from "@widgets/PersonNagmanComponent/PersonalDiv";
import MissionReviewModal from "@widgets/Modal/MissionReviewModal";
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

    const handleOpenModal = (data: data) => {
        setSelectedData(data);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedData(null);
        setIsModalOpen(false);
    };
    return (
        <>
            <GroupCharacterTitleDiv>낭만 모음집</GroupCharacterTitleDiv>
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
        </>
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
