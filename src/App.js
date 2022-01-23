import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "./constants/navigations";
import { HomeScreen, StaredReposScreen } from "./screens";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <div className="container">
          <NavBar />
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
    </GlobalProvider>
  );
};

export default App;
