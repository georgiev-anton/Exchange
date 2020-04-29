import {
  ADD_DATA_TO_CHART,
  CHANGE_TIMEFRAME_IN_CHART,
} from "../../consts/chart";

export function addDataToChart(payload) {
  return {
    type: ADD_DATA_TO_CHART,
    payload,
  };
}

export function changeTimeframeInChart(payload) {
  return {
    type: CHANGE_TIMEFRAME_IN_CHART,
    payload,
  };
}

export function updateDataChart(timeframe) {
  return (dispatch) => {
    fetch("http://185.144.29.172:8010/order/chart/?timeframe=" + timeframe)
      .then((v) => v.json())
      .then((v) => {
        dispatch(
          addDataToChart(
            v.chart.map((v) => {
              return {
                last: v.last_price.toFixed(2),
                time: v.time_begin,
              };
            })
          )
        );
      });
  };
}
