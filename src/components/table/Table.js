import React, { Component } from "react";
import { addDataToOrder } from "../../redux/table/actions";
import { connect } from "react-redux";
class Table extends Component {
  handleTable() {
    return this.props.dataArray.map((v, index) => {
      if (this.props.type === "b") {
        return (
          <tr key={index}>
            <td>{v.b.sum}</td>
            <td>{v.b.count}</td>
            <td>{v.b.price}</td>
          </tr>
        );
      } else
        return (
          <tr key={index}>
            <td>{v.s.sum}</td>
            <td>{v.s.count}</td>
            <td>{v.s.price}</td>
          </tr>
        );
    });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Сумма(BTC)</th>
              <th>Количество</th>
              <th>Цена(USD)</th>
            </tr>
          </thead>
          <tbody>{this.handleTable()}</tbody>
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Table);
