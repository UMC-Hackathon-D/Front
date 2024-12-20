import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "@pages/mainpage/MainPage";
import RootLayout from "@app/providers/layout/RootLayout";
import Home from "@pages/groupHome/Home";
import Collection from "@pages/collection/Collection";
import GroupMember from "@pages/groupMember/groupMember";
import PersonalNangMan from "@pages/collection/:id/personalNangMan";

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
    {
        path: "/groupHome",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "collection", element: <Collection /> },
            { path: "collection/:id", element: <PersonalNangMan /> },
            { path: "groupMember", element: <GroupMember /> },
        ],
    },
]);

const Routing = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default Routing;
