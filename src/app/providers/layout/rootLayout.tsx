import { Outlet } from "react-router-dom";
import NavBar from "../../../pages/navBar";
import SideBar from "../../../pages/sideBar";
const RootLayout = () => {
    return (
        <div style={{ width: "1440px", height: "1024px" }}>
            <NavBar />
            <div style={{ display: "flex" }}>
                <SideBar />

                <div
                    style={{
                        display: "flex",
                        // flexDirection: "column",
                        // flexWrap: "wrap",
                        width: "1160px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default RootLayout;
