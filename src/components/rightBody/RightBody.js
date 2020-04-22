import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  Link,
  useParams
} from "react-router-dom";
import Chart from "../chart/Chart";
import Exchange from "../exchange/Exchange";

const RightBody = () => {
  const { leftBody } = useParams();
  return (
    <BrowserRouter>
      <div>
        <Link to={`/${leftBody}/buy`}>Купить</Link>
        <Link to={`/${leftBody}/sell`}>Продать</Link>
      </div>
      <Switch>
        <Route path={`*/buy`}>
          <h1>BUY</h1>
        </Route>
        <Route path={`*/sell`}>
          <h1>SELL</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RightBody;
