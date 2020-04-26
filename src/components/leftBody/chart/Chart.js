import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label
} from "recharts";
import { connect } from "react-redux";
import moment from "moment";
import { addDataToChart } from "../../../redux/chart/actions";

class CustomizedLabel extends Component {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={14} fill={stroke} fontSize={14} textAnchor="bold">
        {value}
      </text>
    );
  }
}

class Chart extends Component {
  componentDidMount() {
    setInterval(() => {
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
    }, 2000);
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
        <ResponsiveContainer width="100%" height={235}>
          <LineChart data={this.props.data}>
            <Line
            isAnimationActive={false}
                          activeDot={{ r: 8 }}
              type="monotone"
              dataKey="last"
              stroke="red"
              label={<CustomizedLabel />}
            />
            {/* <Tooltip /> */}

            <CartesianGrid stroke="#ccc" />
            <XAxis
              axisLine={false}
              dataKey="time"
              tickFormatter={timeStr => moment(timeStr).format("HH:mm")}
            />
            <YAxis
              allowDecimals={true}
              //domain={["dataMax-100", "dataMax+50"]}
              axisLine={false}
              orientation="right"
            />
          </LineChart>
        </ResponsiveContainer>
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
