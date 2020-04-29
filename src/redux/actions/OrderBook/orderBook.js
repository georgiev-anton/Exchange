import { ADD_DATA_TO_ORDER_BOOK } from "../../consts/orderBook";

export function addDataToOrderBook(payload) {
  return {
    type: ADD_DATA_TO_ORDER_BOOK,
    payload
  };
}
