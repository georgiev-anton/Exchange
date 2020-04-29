import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addDataToOrder } from "../../redux/actions/Order/order";
import Header from "../header/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { addDataToOrderBook } from "../../redux/actions/OrderBook/orderBook";
import Exchange from "../exchange/Exchange";
import TabsChartOrderBook from "../tabsChartOrderBook/TabsChartOrderBook";
import Order from "../order/Order";
import LastOrders from "../lastOrders/LastOrders";

class App extends Component {
  componentDidMount() {
    fetch("http://185.144.29.172:8010/order/")
      .then((v) => v.json())
      .then((v) => this.props.addDataToOrderBook(v));

    setInterval(
      function () {
        //сюда вставить апишку
        this.props.addDataToOrder([
          {
            b: {
              sum: Math.random(123).toFixed(5),
              count: Math.random(123).toFixed(5),
              price: Math.floor(Math.random() * 6000) + 1,
            },
            s: {
              sum: Math.random(123).toFixed(5),
              count: Math.random(123).toFixed(5),
              price: Math.floor(Math.random() * 6000) + 1,
            },
          },
        ]);
      }.bind(this),
      1000
    );
  }
  render() {
    return (
      <div className="App container d-flex justify-content-center w-100 h-100">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/">
              <div className="d-flex flex-column justify-content-between w-100">
                <div className="d-flex flex-row justify-content-between w-100 topBody">
                  <TabsChartOrderBook />
                  <Exchange />
                </div>
                <div className="d-flex flex-row justify-content-between w-100">
                  <Order />
                  <LastOrders />
                </div>
              </div>
            </Route>
            <Route path="*">
              <Redirect to="/chart/buy" />
            </Route>
            <Route path="*/*">
              <Redirect to="/chart/buy" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addDataToOrder,
  addDataToOrderBook,
};

export default connect(null, mapDispatchToProps)(App);
