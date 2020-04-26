import { combineReducers } from "redux";
import { tabsReducer } from "./tabs/tabsReducer";
import { chartReducer } from "./chart/chartReducer";
import { lastOrderReducer } from "./lastOrders/lastOrdersReducer";
import { orderBookReducer } from "./orderBook/orderBookReducer";
import { orderReducer } from "./order/orderReducer";
export const rootReducer = combineReducers({
  tabsReducer,
  chartReducer,
  lastOrderReducer,
  orderBookReducer,
  orderReducer
});
