import React, { Component } from "react";
import { addDataToOrder } from "../../redux/order/actions";
import { connect } from "react-redux";
import { addDataToOrderBook } from "../../redux/orderBook/actions";
class OrderBook extends Component {
  componentDidMount() {
    setInterval(() => {
      fetch("http://185.144.29.172:8010/order/")
        .then(v => v.json())
        .then(v => this.props.addDataToOrderBook(v));
    }, 500);
  }
  render() {
    return (
      <div className="orderBook w-100 h-100 mt-5">
        <p className="orderTitle">Стакан</p>
        <div className="w-100">
          <table className="w-100 mr-2">
            <thead>
              <tr>
                <th className="bidsItem">Количество</th>
                <th className="bidsItem">Цена(BTC)</th>
                <th className="asksItem">Цена(BTC)</th>
                <th className="asksItem">Количество</th>
              </tr>
            </thead>
            <tbody>
              {this.props.orderBookReducer.bids.map((v, index) => {
                const asks = this.props.orderBookReducer.asks[index];
                console.log(asks);
                return (
                  <tr key={index}>
                    <td className="bidsItem">{v[1]}</td>
                    <td className="bidsItem">{v[0]}</td>
                    <td className="asksItem">{asks[0]}</td>
                    <td className="asksItem">{asks[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = {
  addDataToOrder,
  addDataToOrderBook
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook);
