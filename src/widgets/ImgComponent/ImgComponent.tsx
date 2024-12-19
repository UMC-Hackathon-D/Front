import React from "react";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
const ImgComponent = ({ img }: { img: string }) => {
    return (
        <div>
            <ImgStyle src={img}></ImgStyle>
        </div>
    );
};
export default ImgComponent;

const ImgStyle = styled.img`
    width: ${cvw(206)};
    height: ${cvh(206)};
`;
