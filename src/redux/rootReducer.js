import { combineReducers } from "redux";
import { tableReducer } from "./table/tableReducer";
import { tabsReducer } from "./tabs/tabsReducer";
import { chartReducer } from "./chart/chartReducer";
import { lastOrderReducer } from "./lastOrders/lastOrdersReducer";
import { orderBookReducer } from "./orderBook/orderBookReducer";

export const rootReducer = combineReducers({
  tableReducer,
  tabsReducer,
  chartReducer,
  lastOrderReducer,
  orderBookReducer
});
