import { Link, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import PrivateRoute from "./components/private-route";
import routes from "./routing/routing-config";

function App() {
  return (
    <>
      <Header />
      <nav>
        <ul>
          {routes.map((route) => {
            const { id, path, name } = route;
            if (path === "/login") return;
            return (
              <li key={id}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Switch>
        {routes.map((route) => {
          const { id, isPrivate, ...others } = route;
          return isPrivate ? (
            <PrivateRoute key={id} {...others} />
          ) : (
            <Route key={id} {...others} />
          );
        })}
      </Switch>
    </>
  );
}

export default App;
