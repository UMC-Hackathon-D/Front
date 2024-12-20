import React, { useState } from "react";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import DeleteComponet from "@widgets/DeleteComponent/DeleteComponet";
import DeleteButton from "@assets/icon/Delete.svg?react";
import Update from "@assets/icon/Update.svg?react";
const ReviewImgComponent = ({
    img,
    width,
    height,
    review,
}: {
    img: string;
    width: number;
    height: number;
    review: string;
}) => {
    const [isMouseOn, setIsMouseOn] = useState(false);
    console.log(width, height);

    return (
        <PersonalReviewDiv
            onMouseOver={() => {
                setIsMouseOn(true);
            }}
            onMouseOut={() => setIsMouseOn(false)}
        >
            {!isMouseOn ? (
                <PersonalReviewImgDiv
                    key="hovered"
                    width={width}
                    height={height}
                >
                    <MissionReviewTitle>미션 후기</MissionReviewTitle>
                    <MissionReviewContent>{review}</MissionReviewContent>
                    <ButtonDiv>
                        <UpdateButtonDiv />
                        <DeleteButtonDiv />
                    </ButtonDiv>
                </PersonalReviewImgDiv>
            ) : (
                <ImgStyle
                    key="default"
                    src={img}
                    width={width}
                    height={height}
                ></ImgStyle>
            )}
        </PersonalReviewDiv>
    );
};
export default ReviewImgComponent;

const PersonalReviewDiv = styled.div`
    pointer-events: auto;
`;
const PersonalReviewImgDiv = styled.div.attrs(() => ({
    className: "pixel",
}))<{
    width: number;
    height: number;
}>`
    width: ${(props) => cvw(props.width)};
    height: ${(props) => cvh(props.height)};
    background-color: ${({ theme }) => theme.yellow.y100};
    pointer-events: auto;
    cursor: pointer;
`;

const MissionReviewTitle = styled.div`
    width: ${cvw(150)};
    height: ${cvh(20)};
    font-size: ${({ theme }) => theme.bodyFontSize.b1};
    margin-top: ${cvh(24)};
    margin-left: ${cvw(24)};
`;
const MissionReviewContent = styled.div`
    width: ${cvw(150)};
    height: ${cvh(20)};
    font-size: ${({ theme }) => theme.bodyFontSize.b1};
    margin-top: ${cvh(24)};
    margin-left: ${cvw(24)};
`;
const ImgStyle = styled.img.attrs(() => ({ className: "pixel" }))`
    width: ${(props) => cvw(props.width as number)};
    height: ${(props) => cvh(props.width as number)};

    cursor: pointer;
`;
const ButtonDiv = styled.div`
    display: flex;
`;
const DeleteButtonDiv = styled(DeleteButton)`
    width: ${cvw(24)};
    height: ${cvh(24)};
    margin-left: ${cvw(23)};
    margin-top: ${cvh(76)};
`;

const UpdateButtonDiv = styled(Update)`
    width: ${cvw(24)};
    height: ${cvh(24)};
    margin-left: ${cvw(112)};
    margin-top: ${cvh(76)};
`;

const DeleteDiv = styled.div`
    width: 24px;
    height: 23.99px;
    cursor: pointer;
    margin-top: ${cvh(161)};
`;

const UpdateDiv = styled.div`
    width: ${cvw(24)};
    height: ${cvh(24)};
    cursor: pointer;
`;
