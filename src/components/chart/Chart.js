import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";
import { connect } from "react-redux";
import moment from "moment";
import {
  addDataToChart,
  changeTimeframeInChart,
  updateDataChart,
} from "../../redux/actions/Chart/chart";
import {
  ButtonGroup,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

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
  asdasdupdateDataChart() {
    fetch(
      "http://185.144.29.172:8010/order/chart/?timeframe=" +
        this.props.timeframe
    )
      .then((v) => v.json())
      .then((v) => {
        this.props.addDataToChart(
          v.chart.map((v) => {
            return {
              last: v.last_price.toFixed(2),
              time: v.time_begin,
            };
          })
        );
      });
  }

  componentDidMount() {
    this.props.updateDataChart(this.props.timeframe);
    setInterval(() => {
      this.props.updateDataChart(this.props.timeframe);
    }, 1000);
  }

  render() {
    return (
      <div className="w-100 h-100">
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
        <div className="w-100 h-100">
          <ResponsiveContainer minHeight={100} width="100%" height="70%">
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
                scale="point"
                tickFormatter={(timeStr) => moment(timeStr).format("HH:mm")}
              />
              <YAxis
                allowDecimals={true}
                //domain={["dataMax-100", "dataMax+50"]}
                axisLine={false}
                orientation="right"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="d-flex w-100">
            <ToggleButtonGroup
              defaultValue={"5_min"}
              toggle
              name="times"
              className="w-100"
              aria-label="Basic example"
            >
              <ToggleButton
                onClick={(event) =>
                  this.props.changeTimeframeInChart(event.target.value)
                }
                defaultChecked
                type="radio"
                variant="secondary"
                value="5_min"
              >
                5 мин
              </ToggleButton>
              <ToggleButton
                onClick={(event) =>
                  this.props.changeTimeframeInChart(event.target.value)
                }
                type="radio"
                variant="secondary"
                value="5_hour"
              >
                5 часов
              </ToggleButton>
              <ToggleButton
                onClick={(event) =>
                  this.props.changeTimeframeInChart(event.target.value)
                }
                type="radio"
                variant="secondary"
                value="1_day"
              >
                1 день
              </ToggleButton>
              <ToggleButton
                onClick={(event) =>
                  this.props.changeTimeframeInChart(event.target.value)
                }
                type="radio"
                variant="secondary"
                value="5_day"
              >
                5 дней
              </ToggleButton>
              <ToggleButton
                onClick={(event) =>
                  this.props.changeTimeframeInChart(event.target.value)
                }
                type="radio"
                variant="secondary"
                value="1_week"
              >
                1 неделя
              </ToggleButton>
              <ToggleButton
                onClick={(event) =>
                  this.props.changeTimeframeInChart(event.target.value)
                }
                type="radio"
                variant="secondary"
                value="1_month"
              >
                1 месяц
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.chartReducer.dataArray,
    timeframe: state.chartReducer.timeframe,
  };
};

const mapDipstachToProps = {
  addDataToChart,
  changeTimeframeInChart,
  updateDataChart,
};
export default connect(mapStateToProps, mapDipstachToProps)(Chart);
