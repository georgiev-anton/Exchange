import { UPDATE_TABS_RIGHT_BODY, UPDATE_TABS_LEFT_BODY } from "../types";

const initialState = {
  left: "CHART",
  right: "BUY"
};

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TABS_LEFT_BODY:
      return { ...state, left: action.payload };
    case UPDATE_TABS_RIGHT_BODY:
      return { ...state, right: action.payload };
    default:
      return state;
  }
};
