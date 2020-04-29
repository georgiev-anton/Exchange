import { ADD_DATA_TO_LAST_ORDER } from "../../consts/lastOrders";

export function addDataToLastOrder(payload) {
  return {
    type: ADD_DATA_TO_LAST_ORDER,
    payload,
  };
}
