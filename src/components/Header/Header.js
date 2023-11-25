import "./Header.scss"
import { Link } from "react-router-dom";
function Header (){
    return(
        <main>
            <div className="header-container">
            <p className="header-container__title">Service Dog</p>
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