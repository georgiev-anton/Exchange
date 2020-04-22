import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  Link,
  matchPath,
  useParams
} from "react-router-dom";
import Chart from "../chart/Chart";
import Exchange from "../exchange/Exchange";

const LeftBody = () => {
  const { rightBody } = useParams();

  return (
    <BrowserRouter>
      <div>
        <Link to={`/chart/${rightBody}`}>График в реальном времени</Link>
        <Link to={`/stakan/${rightBody}`}>Стакан</Link>
      </div>
      <Switch>
        <Route path={`/chart/*`}>
          <Chart />
        </Route>
        <Route path={`/stakan/*`}>
          <h1>Stakan</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default LeftBody;
