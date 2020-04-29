import { combineReducers } from "redux";
import { tabsReducer } from "./reducers/Tabs/tabs";
import { chartReducer } from "./reducers/Chart/chart";
import { lastOrderReducer } from "./reducers/LastOrders/lastOrders";
import { orderBookReducer } from "./reducers/OrderBook/orderBook";
import { orderReducer } from "./reducers/Order/order";

export const rootReducer = combineReducers({
  tabsReducer,
  chartReducer,
  lastOrderReducer,
  orderBookReducer,
  orderReducer,
});
