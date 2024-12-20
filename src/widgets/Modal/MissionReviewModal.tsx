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
        <>
            <Modal id={id} open={open} onClose={onClose}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <CloseButton onClick={onClose} />
                    <ReviewImg src={reviewImg}></ReviewImg>
                    <div>
                        <div>
                            <CharacterImg src={characterImg}></CharacterImg>
                            <div>
                                <DateDiv>{date}</DateDiv>
                                <NameDiv>{name}</NameDiv>
                                <ContentDiv>{content}</ContentDiv>
                            </div>
                        </div>
                        <div>
                            <ReviewTitle>미션 후기</ReviewTitle>
                            <ReviewCommentDiv>{review}</ReviewCommentDiv>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default MissionReviewModal;

const ReviewImg = styled.img.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(580)};
    height: ${cvh(279)};
`;
const CharacterImg = styled.img`
    border-radius: 50px;
    width: ${cvw(104)};
    height: ${cvh(104)};
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
`;
const ReviewCommentDiv = styled.div.attrs(() => ({ className: "pixel" }))`
    width: ${cvw(588)};
    height: ${cvh(155)};
`;
const AS3 = styled.div.attrs(() => ({ className: "pixel" }))`
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    width: ${cvw(620)};
    height: ${cvh(40)};
`;
