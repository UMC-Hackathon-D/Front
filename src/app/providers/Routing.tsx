import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LeftLogo from "@assets/icon/LeftLogo.svg?react";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";

// 예시로 만든 컴포넌트
// pixel border 적용 예시 및 theme 적용 방법 참고하세요
const Example = styled.div.attrs(() => ({ className: "pixel" }))`
    color: ${({ theme }) => theme.black.b900};
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    // border-color: ${({ theme }) => theme.black.b900};
    border-radius: 10px;
    width: 996px;
    height: 571px;
    width: ${cvw(996)};
    height: ${cvh(571)};
`;

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: (
                    <>
                        <LeftLogo width={572} height={196} />
                        <Example>"zzzzzzzzㅇㄴㅁㅇㅁㄴㅇㅁㅇㅁㄴ</Example>
                    </>
                ),
            },
        ],
    },
]);

const Routing = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default Routing;
