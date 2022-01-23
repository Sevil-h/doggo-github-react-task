import { Link } from "react-router-dom";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "../../constants/navigations";
import "./style.scss";

const HomeScreen = () => {
  return (
    <nav className="navbar">
      <ul className="navbar_items">
        <li className="navbar__item">
          <Link to={`${HOME_SCREEN}`} className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={`${STARED_REPOS_SCREEN}`} className="navbar__link">
            Stared repos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeScreen;
