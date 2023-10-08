import { Outlet } from "react-router-dom";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div className="container">
            
            
            <Outlet></Outlet>
            
           
        </div>
    );
};

export default MainLayout;