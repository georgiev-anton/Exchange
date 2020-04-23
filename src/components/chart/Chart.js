import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { connect } from "react-redux";
import moment from "moment";
import { addDataToChart } from "../../redux/chart/actions";

class Chart extends Component {
  componentDidMount() {
    setInterval(
      (() => {
        fetch("https://blockchain.info/ru/ticker")
          .then(v => v.json())
          .then(v =>
            this.props.addDataToChart([
              {
                last: v.USD.last,
                time: new Date().getTime()
              }
            ])
          );
      }).bind(this),
      2000
    );
  }
  render() {
    return (
      <div>
        <div className="d-flex flex-column align-items-start">
          <p className="mb-0 ml-1">
            Bitcoin <span className="badge badge-primary">Main</span>
          </p>
          <div className="d-flex flex-row">
            <h1>BTC/USDT</h1>
            <div className="ml-2">
              <p className="m-0 colorGray">Последняя цена</p>
              <p>{this.props.data[this.props.data.length - 1].last}</p>
            </div>
            <div>
              <div className="ml-2">
                <p className="m-0 colorGray">23ч Объем сделок</p>
                <p>47,280,342.1232 USDT</p>
              </div>
            </div>
          </div>
        </div>
        <LineChart
          width={600}
          height={300}
          data={this.props.data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="last" stroke="red" />
          <CartesianGrid stroke="#ccc" />
          <XAxis
            dataKey="time"
            tickFormatter={timeStr => moment(timeStr).format("HH:mm")}
          />
          <YAxis orientation="right" />
        </LineChart>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.chartReducer.dataArray
  };
};

const mapDipstachToProps = {
  addDataToChart
};
export default connect(mapStateToProps, mapDipstachToProps)(Chart);
