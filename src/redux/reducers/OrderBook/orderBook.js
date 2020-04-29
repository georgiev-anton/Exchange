import { ADD_DATA_TO_ORDER_BOOK } from "../../consts/orderBook";

const initialState = {
  asks: [["4012.0000000", "0.2070000"]],
  bids: [["4012.0000000", "0.2070000"]]
};
export const orderBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_TO_ORDER_BOOK:
      //   if (state.bids.length > 9) {
      //     return {
      //       ...state,
      //       bids: [...action.payload.bids, ...state.asks.slice(0, 9)],
      //       asks: [...action.payload.asks, ...state.asks.slice(0, 9)]
      //     };
      //   } else {
      //     return {
      //       ...state,
      //       bids: [...action.payload.bids, ...state.asks.slice(0, 9)],
      //       asks: [...action.payload.asks, ...state.asks.slice(0, 9)]
      //     };
      //   }
      return {
        ...state,
        bids: [...action.payload.bids.slice(0, 9)],
        asks: [...action.payload.asks.slice(0, 9)]
      };
    default:
      return state;
  }
};
