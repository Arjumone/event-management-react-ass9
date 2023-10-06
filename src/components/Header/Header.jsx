import Navbar from "../Navbar/Navbar";
import "./Header.css"



const Header = () => {
    const divStyle = {
        height:'600px',
      };
    return (
        <div style={divStyle} className="banner max-w-6xl mx-auto">
            <Navbar></Navbar>

        </div>
    );
};

export default Header;