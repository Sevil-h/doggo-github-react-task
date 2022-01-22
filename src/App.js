import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "./constants/navigations";
import { HomeScreen, StaredReposScreen } from "./screens";
import FetchingGHProfile from "./fetch/FetchingGHProfile";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <FetchingGHProfile />
        <Switch>
          <Route exact path={`${STARED_REPOS_SCREEN}`}>
            <StaredReposScreen />
          </Route>

          <Route exact path={`${HOME_SCREEN}`}>
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
