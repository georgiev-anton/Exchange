import React from "react";
import Chart from "../chart/Chart";
import OrderBook from "../OrderBook/OrderBook";
import { connect } from "react-redux";
import { updateTabsLeftBody } from "../../redux/actions/Tabs/tabs";

const TabsChartOrderBook = ({ tabs, updateTabsLeftBody }) => {
  console.log(tabs);

  return (
    <div className="tabsChartOrderBook w-75 h-100">
      <div className="leftBodyNav">
        <div className="leftBodyNavLeft">
          <p
            onClick={() => updateTabsLeftBody("CHART")}
            className={tabs === "CHART" ? "leftBodyTabSelected" : "leftBodyTab"}
          >
            График в реальном времени
          </p>
          <p
            onClick={() => updateTabsLeftBody("ORDERBOOK")}
            className={
              tabs === "ORDERBOOK" ? "leftBodyTabSelected" : "leftBodyTab"
            }
          >
            Стакан
          </p>
        </div>
        <div className="leftBodyNavRight">
          <p>Профессиональная версия</p>
          <p>Полноэкранный режим</p>
        </div>
      </div>
      <div className="h-100">
        {tabs === "CHART" ? <Chart /> : <OrderBook />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tabs: state.tabsReducer.left,
  };
};

const mapDispatchToProps = {
  updateTabsLeftBody,
};
export default connect(mapStateToProps, mapDispatchToProps)(TabsChartOrderBook);
