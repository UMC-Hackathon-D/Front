import React, { useState } from "react";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import { useRef } from "react";
import DeleteComponet from "@widgets/DeleteComponent/DeleteComponet";
import DeleteButton from "@assets/icon/Delete.svg?react";
import Update from "@assets/icon/Update.svg?react";
const ImgComponent = ({
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

    return (
        <A
            onMouseOver={() => {
                setIsMouseOn(true);
            }} // 마우스가 위에 있을 때 상태 업데이트
            onMouseOut={() => setIsMouseOn(false)} // 마우스가 벗어날 때 상태 업데이트
        >
            {isMouseOn ? (
                <ImgContainerDiv key="hovered" width={width} height={height}>
                    <div>{review}</div>
                    <div>하이</div>
                    {/* 여기에 deletebutton 컴포넌트만 만들면 되는데 거기서 오류남 */}
                    <ButtonDiv>
                        <DeleteDiv>
                            <DeleteButtonDiv />
                        </DeleteDiv>
                        <UpdateDiv>
                            <UpdateButtonDiv />
                        </UpdateDiv>
                    </ButtonDiv>
                </ImgContainerDiv>
            ) : (
                <ImgStyle
                    key="default"
                    src={img}
                    width={width}
                    height={height}
                ></ImgStyle>
            )}
        </A>
    );
};
export default ImgComponent;

const A = styled.div`
    pointer-events: auto;
`;
const ImgContainerDiv = styled.div.attrs(() => ({ className: "pixel" }))<{
    width: number;
    height: number;
}>`
    width: ${(props) => cvw(props.width)};
    height: ${(props) => cvh(props.height)};
    background-color: ${({ theme }) => theme.yellow.y100};
    pointer-events: auto;
    cursor: pointer;
`;
const ImgStyle = styled.img.attrs(() => ({ className: "pixel" }))`
    width: ${(props) => cvw(props.width as number)};
    height: ${(props) => cvh(props.width as number)};

    cursor: pointer;
`;
const DeleteButtonDiv = styled(DeleteButton)`
    width: ${cvw(24)};
    height: ${cvh(24)};
`;

const UpdateButtonDiv = styled(Update)`
    width: ${cvw(24)};
    height: ${cvh(24)};
`;
const ButtonDiv = styled.div`
    display: flex;
`;
const DeleteDiv = styled.div`
    width: 24px;
    height: 23.99px;
    cursor: pointer;
`;

const UpdateDiv = styled.div`
    width: ${cvw(24)};
    height: ${cvh(24)};
    cursor: pointer;
`;
