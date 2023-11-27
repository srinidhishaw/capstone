import "./Header.scss"
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Logo from "../../assets/Images/Service_Dog.jpg"
function Header (){
    function handleClick() {
        
        window.location.reload();
        <Navigate to="/"/>
      };
    
    return(
        <main>
            <div className="header-container">
            <Link
    to={`/`}
    className="header-container__title"
  > 
            <p className="header-container__title">Service Dog</p>
            {/* <img src="../../assets/Images/Service_Dog.jpg" alt="Logo Image"/> */}
            </Link>
            <Link
    to={`/conditions/diary`}
    className="header-container__link"
  > 
            <p className="header-container__link">Diary</p>
            </Link>
            </div>
        </main>
    )
}

export default Header;