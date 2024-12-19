import React, { useState } from "react";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import { useRef } from "react";
const ImgComponent = ({
    img,
    width,
    height,
}: {
    img: string;
    width: number;
    height: number;
}) => {
    const [isMouseOn, setIsMouseOn] = useState(false);
    const a = () => {
        setIsMouseOn(true);
        console.log("호버됨");
    };
    return (
        <A
            onMouseOver={a} // 마우스가 위에 있을 때 상태 업데이트
            onMouseOut={() => setIsMouseOn(false)} // 마우스가 벗어날 때 상태 업데이트
        >
            {isMouseOn ? (
                <ImgContainerDiv
                    key="hovered"
                    width={width}
                    height={height}
                ></ImgContainerDiv>
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
