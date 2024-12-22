import Modal from "@shared/ui/Modal";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import CloseButton from "@assets/icon/Close.svg?react";
interface CharacterModalProps {
    id: string;
    open: boolean;
    onClose: () => void;
    reviewImg: string;
    characterImg: string;
    name: string | null;
    content: string | undefined;
    date: string | undefined;
    review: string | null;
}
const MissionReviewModal = ({
    id,
    open,
    onClose,
    reviewImg,
    characterImg,
    name,
    content,
    date,
    review,
}: CharacterModalProps) => {
    return (
        <ModalStyle id={id} open={open} onClose={onClose}>
            <CLoseButton>
                <CloseButton onClick={onClose} />
            </CLoseButton>

            <ReviewImg src={reviewImg}></ReviewImg>

            <PersonReview>
                <CharacterImg src={characterImg}></CharacterImg>
                <div>
                    <DateDiv>{date}</DateDiv>
                    <NameDiv>{name}</NameDiv>
                    <ContentDiv>{content}</ContentDiv>
                </div>
            </PersonReview>
            <PersonReviewContent>
                <ReviewTitle>미션 후기</ReviewTitle>
                <ReviewCommentDiv>{review}</ReviewCommentDiv>
            </PersonReviewContent>
        </ModalStyle>
    );
};
export default MissionReviewModal;
const CLoseButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: ${cvh(15)};
`;

const ReviewImg = styled.img.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(580)};
    height: ${cvh(279)};
    margin-bottom: ${cvh(15)};
`;
const PersonReview = styled.div`
    display: flex;
`;
const PersonReviewContent = styled.div`
    margin-top: 20px;
`;
const CharacterImg = styled.img`
    border-radius: 50px;
    width: ${cvw(104)};
    height: ${cvh(104)};
    margin-right: ${cvw(15)};
`;
const DateDiv = styled.div`
    font-size: ${({ theme }) => theme.captionFontSize.c1};
`;
const NameDiv = styled.div`
    font-size: ${({ theme }) => theme.headingFontSize.h2};
`;
const ContentDiv = styled.div`
    font-size: ${({ theme }) => theme.headingFontSize.h4};
`;
const ReviewTitle = styled.div`
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    margin-bottom: ${cvh(20)};
`;
const ReviewCommentDiv = styled.div.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(588)};
    height: ${cvh(155)};
    padding: ${cvh(15)} ${cvw(15)};
`;

const ModalStyle = styled(Modal)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
