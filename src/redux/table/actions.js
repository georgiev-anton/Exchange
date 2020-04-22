import { ADD_DATA_TO_ORDER } from "../types";

export function addDataToOrder(payload) {
  return {
    type: ADD_DATA_TO_ORDER,
    payload
  };
}
