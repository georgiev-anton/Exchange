import { ADD_DATA_TO_LAST_ORDER } from "../types";

const initialState = {
  dataArray: [
    { time: 1503617297689, price: 6950.3, count: 0.00023442 },
    { time: 1503617297689, price: 6950.3, count: 0.00023442 },
    { time: 1503617297689, price: 6950.3, count: 0.00023442 },
    { time: 1503617297689, price: 6950.3, count: 0.00023442 },
    { time: 1503617297689, price: 6950.3, count: 0.00023442 },
    { time: 1503617297689, price: 6950.3, count: 0.00023442 }
  ]
};

export const lastOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_TO_LAST_ORDER:
      if (state.dataArray.length > 4) {
        return {
          ...state,
          dataArray: [...action.payload, ...state.dataArray.slice(0, 4)]
        };
      } else {
        return { ...state, dataArray: [...action.payload, ...state.dataArray] };
      }
    default:
      return state;
  }
};
