import { ADD_DATA_TO_ORDER } from "../../consts/order";

export function addDataToOrder(payload) {
  return {
    type: ADD_DATA_TO_ORDER,
    payload
  };
}
