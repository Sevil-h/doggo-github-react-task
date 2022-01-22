import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "./constants/navigations";
import { HomeScreen, StaredReposScreen } from "./screens";

const App = () => {
  function fetchGithubProfil(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        const name = data.name;
        const location = data.location;
        const company = data.company;
        const avatar = data.avatar_url;
        const repos = data.public_repos;
        const followers = data.followers;
        const following = data.following;
        console.log(
          name,
          location,
          company,
          avatar,
          repos,
          followers,
          following
        );
      });
  }

  function fetchGithubRepository(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((repo) => {
          const name = repo.name;
          const createdAt = repo.created_at;
          const url = repo.url;
          const languages = repo.language;
          const visibility = repo.visibility;
          console.log(name, createdAt, url, languages, visibility);
        });
      });
  }

  fetchGithubProfil("Sevil-h");
  fetchGithubRepository("Sevil-h");
  return (
    <Router>
      <div>
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
  );
};

export default App;
