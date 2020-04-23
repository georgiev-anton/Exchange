import { combineReducers } from "redux";
import { tableReducer } from "./table/tableReducer";
import { tabsReducer } from "./tabs/tabsReducer";
import { chartReducer } from "./chart/chartReducer";

export const rootReducer = combineReducers({
  tableReducer,
  tabsReducer,
  chartReducer
});
