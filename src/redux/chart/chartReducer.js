import { ADD_DATA_TO_CHART } from "../types";

const initialState = {
  dataArray: [
    {
      last: 6915.1,
      time: 1503617297689
    }
  ]
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_TO_CHART:
      if (state.dataArray.length > 30) {
        return {
          ...state,
          dataArray: [...state.dataArray.slice(0, 29), ...action.payload]
        };
      } else {
        return { ...state, dataArray: [...state.dataArray, ...action.payload] };
      }
    default:
      return state;
  }
};

export default chartReducer;
