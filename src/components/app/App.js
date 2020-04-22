import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addDataToOrder } from "../../redux/table/actions";
import Header from "../header/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../table/Table";
import Exchange from "../exchange/Exchange";
import Chart from "../chart/Chart";
import LeftBody from "../leftBody/LeftBody";
import RightBody from "../rightBody/RightBody";
import Order from "../../order/Order";

class App extends Component {
  componentDidMount() {
    setInterval(
      function() {
        //сюда вставить апишку
        this.props.addDataToOrder([
          {
            b: {
              sum: Math.random(123).toFixed(5),
              count: Math.random(123).toFixed(5),
              price: Math.floor(Math.random() * 6000) + 1
            },
            s: {
              sum: Math.random(123).toFixed(5),
              count: Math.random(123).toFixed(5),
              price: Math.floor(Math.random() * 6000) + 1
            }
          }
        ]);
      }.bind(this),
      1000
    );
  }
  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/:leftBody/:rightBody">
              <LeftBody />
              <RightBody />
            </Route>
            <Route path="*">
              <Redirect to="/chart/buy" />
            </Route>
            <Route path="*/*">
              <Redirect to="/chart/buy" />
            </Route>
          </Switch>
        </BrowserRouter>
        <Order />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addDataToOrder
};

export default connect(null, mapDispatchToProps)(App);
