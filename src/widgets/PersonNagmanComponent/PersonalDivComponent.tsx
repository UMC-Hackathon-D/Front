import React from "react";
import ContentComponent from "@widgets/ContentComponent/ContentComponent";
import ImgComponent from "@widgets/ImgComponent/ReviewImgComponent";
// import DeleteLogo from "@assets/icon/Delete.svg?react";
// import Update from "@assets/icon/Update.svg?react";
const PersonalDivComponent = ({
    img,
    date,
    name,
    content,
    width,
    height,
    review,
}: {
    img: string;
    date: string | undefined;
    name: string | null;
    content: string | undefined;
    width: number;
    height: number;
    review: string;
}) => {
    return (
        <div>
            <ImgComponent
                key={img}
                img={img}
                width={width}
                height={height}
                review={review}
            ></ImgComponent>
            <ContentComponent
                img={img}
                date={date}
                name={name}
                content={content}
            ></ContentComponent>
        </div>
    );
};
export default PersonalDivComponent;
