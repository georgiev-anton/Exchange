import { ADD_DATA_TO_ORDER_BOOK } from "../types";

export function addDataToOrderBook(payload) {
  return {
    type: ADD_DATA_TO_ORDER_BOOK,
    payload
  };
}
