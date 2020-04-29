import React, { Component } from "react";
import { addDataToLastOrder } from "../../redux/actions/LastOrders/lastOrders";
import { connect } from "react-redux";
import moment from "moment";

class LastOrders extends Component {
  render() {
    return (
      <div className="w-25">
        <p className="orderTitle mt-5">Последние сделки</p>
        <table className="w-100">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataArray: state.lastOrderReducer.dataArray,
  };
};

const mapDispatchToProps = {
  addDataToLastOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(LastOrders);
