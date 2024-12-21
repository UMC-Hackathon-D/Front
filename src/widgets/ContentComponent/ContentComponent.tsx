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
                <Date>{date}</Date>
                <Name>{name}</Name>
                <Content>{content}</Content>
            </ContentDiv>
        </AllContentDiv>
    );
};

export default ContentComponent;

const ImgStyle = styled.img`
    width: ${cvw(30)};
    height: ${cvh(32)};
`;
const AllContentDiv = styled.div`
    display: flex;
    width: ${cvw(215)};
    height: ${cvh(55)};
`;
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justidfy-content: flex-start;
`;

const Date = styled.div`
    height: ${cvh(16)};
    font-size: ${({ theme }) => theme.captionFontSize.c2};
    margin-bottom: ${cvh(11)};
`;

const Name = styled.div`
    height: ${cvh(20)};
    font-size: ${({ theme }) => theme.bodyFontSize.b1};
    margin-bottom: ${cvh(25)};
`;

const Content = styled.div`
    height: ${cvh(14)};
    font-size: ${({ theme }) => theme.captionFontSize.c1};
`;
