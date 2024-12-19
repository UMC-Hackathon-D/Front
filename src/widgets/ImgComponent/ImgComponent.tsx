import React from "react";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
const ImgComponent = ({
    img,
    width,
    height,
}: {
    img: string;
    width: number;
    height: number;
}) => {
    return (
        <div>
            <ImgStyle src={img} width={width} height={height}></ImgStyle>
        </div>
    );
};
export default ImgComponent;

const ImgStyle = styled.img.attrs(() => ({ className: "pixel" }))`
    width: ${(props) => cvw(props.width as number)};
    height: ${(props) => cvh(props.width as number)};
`;
