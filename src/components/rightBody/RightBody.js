import React from "react";
import { connect } from "react-redux";
import { updateTabsRightBody } from "../../redux/tabs/actions";

const RightBody = ({ tabs, updateTabsRightBody }) => {
  return (
    <div>
      <div className="rightBodyNav">
        <p
          onClick={() => updateTabsRightBody("BUY")}
          className={tabs === "BUY" ? "rightBodyTabSelected" : "rightBodyTab"}
        >
          Купить BTC
        </p>
        <p
          onClick={() => updateTabsRightBody("SELL")}
          className={tabs === "SELL" ? "rightBodyTabSelected" : "rightBodyTab"}
        >
          Продать BTC
        </p>
      </div>
      <div>{tabs === "BUY" ? <p>BUY</p> : <p>SELL</p>}</div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    tabs: state.tabsReducer.right
  };
};

const mapDispatchToProps = {
  updateTabsRightBody
};
export default connect(mapStateToProps, mapDispatchToProps)(RightBody);
