import { Link } from "react-router-dom";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "../../constants/navigations";

import "./style.css";

const HomeScreen = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to={`${HOME_SCREEN}`}>Home</Link>
        </li>
        <li className="NavBar__item">
          <Link to={`${STARED_REPOS_SCREEN}`}>Stared repos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeScreen;
