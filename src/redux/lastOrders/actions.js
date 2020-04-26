import { ADD_DATA_TO_LAST_ORDER } from "../types";

export function addDataToLastOrder(payload) {
  return {
    type: ADD_DATA_TO_LAST_ORDER,
    payload
  };
}
