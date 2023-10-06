import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const MainLayout = () => {
    return (
        <div className="container">
            <Header></Header>
            <div className=" ">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;