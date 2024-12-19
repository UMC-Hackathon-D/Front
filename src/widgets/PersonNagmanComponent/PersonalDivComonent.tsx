import React from "react";
import ContentComponent from "@widgets/ContentComponent/ContentComponent";
import ImgComponent from "@widgets/ImgComponent/ImgComponent";
// import DeleteLogo from "@assets/icon/Delete.svg?react";
// import Update from "@assets/icon/Update.svg?react";
const PersonalDivComonent = ({
    img,
    date,
    name,
    content,
    width,
    height,
}: {
    img: string;
    date: string | undefined;
    name: string | null;
    content: string | undefined;
    width: number;
    height: number;
}) => {
    return (
        <div>
            <ImgComponent
                img={img}
                width={width}
                height={height}
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
export default PersonalDivComonent;
