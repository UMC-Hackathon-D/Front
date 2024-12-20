import React from "react";
import ContentComponent from "@widgets/ContentComponent/ContentComponent";
import ReviewImgComponent from "@widgets/ImgComponent/ReviewImg";
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
            <ReviewImgComponent
                key={img}
                img={img}
                width={width}
                height={height}
                review={review}
            ></ReviewImgComponent>
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
