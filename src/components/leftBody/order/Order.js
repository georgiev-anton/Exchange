import React, { Component } from "react";
import { addDataToOrder } from "../../../redux/table/actions";
import { connect } from "react-redux";
class Order extends Component {
  render() {
    return (
      <div className="order w-100">
        <p>Ордер</p>
        <div className="w-100">
          <table className="w-100 mr-2">
            <thead>
              <tr>
                <th>Сумма(BTC)</th>
                <th>Количество</th>
                <th>Цена(USD)</th>
                <th>Сумма(BTC)</th>
                <th>Количество</th>
                <th>Цена(USD)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.dataArray.map((v, index) => {
                return (
                  <tr key={index}>
                    <td>{v.b.sum}</td>
                    <td>{v.b.count}</td>
                    <td>{v.b.price}</td>
                    <td>{v.s.sum}</td>
                    <td>{v.s.count}</td>
                    <td>{v.s.price}</td>
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
    dataArray: state.tableReducer.dataArray
  };
};

const mapDispatchToProps = {
  addDataToOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
