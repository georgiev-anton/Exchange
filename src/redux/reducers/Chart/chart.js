import {
  ADD_DATA_TO_CHART,
  CHANGE_TIMEFRAME_IN_CHART,
} from "../../consts/chart";

const initialState = {
  timeframe: "5_min",
  dataArray: [
    {
      last: 0,
      time: 1503617297689,
    },
  ],
};

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TIMEFRAME_IN_CHART:
      return { ...state, timeframe: action.payload };
    case ADD_DATA_TO_CHART:
      // if (
      //   state.dataArray[state.dataArray.length - 1].last ===
      //   action.payload[0].last
      // ) {
      //   return state;
      // }
      if (action.payload.length > 10) {
        return {
          ...state,
          dataArray: action.payload.slice(0, 9),
        };
      }
      // if (state.dataArray.length > 9) {
      //   return {
      //     ...state,
      //     dataArray: [...state.dataArray.slice(0, 9), ...action.payload],
      //   };
      // }
      else {
        console.log(action.payload);
        return { ...state, dataArray: [state.dataArray, ...action.payload] };
      }
    default:
      return state;
  }
};

export default chartReducer;
