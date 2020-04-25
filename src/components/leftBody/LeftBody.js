import React from "react";
import Chart from "../chart/Chart";
import Stakan from "./stakan/Stakan";
import { connect } from "react-redux";
import { updateTabsLeftBody } from "../../redux/tabs/actions";
import Order from "./order/Order";

const LeftBody = ({ tabs, updateTabsLeftBody }) => {
  console.log(tabs);

  return (
    <div className="leftBody" >
      <div className="leftBodyNav">
        <div className="leftBodyNavLeft">
          <p
            onClick={() => updateTabsLeftBody("CHART")}
            className={tabs === "CHART" ? "leftBodyTabSelected" : "leftBodyTab"}
          >
            График в реальном времени
          </p>
          <p
            onClick={() => updateTabsLeftBody("STAKAN")}
            className={
              tabs === "STAKAN" ? "leftBodyTabSelected" : "leftBodyTab"
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
      <div>{tabs === "CHART" ? <Chart /> : <Stakan />}</div>
      <Order />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tabs: state.tabsReducer.left
  };
};

const mapDispatchToProps = {
  updateTabsLeftBody
};
export default connect(mapStateToProps, mapDispatchToProps)(LeftBody);
