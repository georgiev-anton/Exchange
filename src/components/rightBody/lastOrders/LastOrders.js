import React, { Component } from "react";
import { addDataToLastOrder } from "../../../redux/lastOrders/actions";
import { connect } from "react-redux";
import moment from "moment";

class LastOrders extends Component {
  
  render() {
    return (
      <table className="w-100 mt-5">
        <thead>
          <tr>
            <th>Время</th>
            <th>Цена</th>
            <th>Количество(BTC)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.dataArray.map((v, index) => {
            return (
              <tr key={index}>
                <td>{moment(v.time).format("HH:mm")}</td>
                <td>{v.price}</td>
                <td>{v.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataArray: state.lastOrderReducer.dataArray
  };
};

const mapDispatchToProps = {
  addDataToLastOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(LastOrders);
