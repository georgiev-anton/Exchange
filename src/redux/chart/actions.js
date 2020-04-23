import { ADD_DATA_TO_CHART } from "../types";

export function addDataToChart(payload) {
  return {
    type: ADD_DATA_TO_CHART,
    payload
  };
}
