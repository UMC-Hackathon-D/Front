import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LeftLogo from "@assets/icon/LeftLogo.svg?react";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import MainPage from "@pages/mainpage/MainPage";


// 예시로 만든 컴포넌트
// pixel border 적용 예시 및 theme 적용 방법 참고하세요

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <MainPage />,
            },
        ],
    },
]);

const Routing = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default Routing;
