import { combineReducers } from "redux";
import { tabsReducer } from "./reducers/Tabs";
import { chartReducer } from "./reducers/Chart/chart";
import { lastOrderReducer } from "./reducers/LastOrders/lastOrders";
import { orderBookReducer } from "./orderBook/orderBookReducer";
import { orderReducer } from "./order/orderReducer";

export const rootReducer = combineReducers({
  tabsReducer,
  chartReducer,
  lastOrderReducer,
  orderBookReducer,
  orderReducer,
});
