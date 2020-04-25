import { ADD_DATA_TO_CHART } from "../types";

const initialState = {
  dataArray: [
    {
      last: 0,
      time: 1503617297689
    }
  ]
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_TO_CHART:
      console.log(state.dataArray[state.dataArray.length - 1]);
      console.log(action.payload[0]);

      if (state.dataArray[state.dataArray.length - 1].last === action.payload[0].last) {
        return state;
      }
      if (state.dataArray.length > 20) {
        return {
          ...state,
          dataArray: [...state.dataArray.slice(0, 19), ...action.payload]
        };
      } else {
        return { ...state, dataArray: [...state.dataArray, ...action.payload] };
      }
    default:
      return state;
  }
};

export default chartReducer;
