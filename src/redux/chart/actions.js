import { ADD_DATA_TO_CHART } from "../types";

export function addDataToOrder(payload) {
  return {
    type: ADD_DATA_TO_CHART,
    payload
  };
}
