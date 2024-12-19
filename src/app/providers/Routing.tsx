import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TimerComponent from "@widgets/TimerComponent/TimerComponent";

// 예시로 만든 컴포넌트
// pixel border 적용 예시 및 theme 적용 방법 참고하세요

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: (
                    <>
                        <TimerComponent />
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
