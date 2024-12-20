import React from "react";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
const ContentComponent = ({
    img,
    date,
    name,
    content,
}: {
    img: string;
    date: string | undefined;
    name: string | null;
    content: string | undefined;
}) => {
    return (
        <AllContentDiv>
            <ImgStyle src={img}></ImgStyle>
            <ContentDiv>
                <div>{date}</div>
                <div>{name}</div>
                <div>{content}</div>
            </ContentDiv>
        </AllContentDiv>
    );
};

export default ContentComponent;

const ImgStyle = styled.img`
    width: ${cvw(47)};
    height: ${cvh(47)};
`;
const AllContentDiv = styled.div`
    display: flex;
`;
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justidfy-content: flex-start;
`;
