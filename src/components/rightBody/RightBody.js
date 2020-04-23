import React from "react";
import { connect } from "react-redux";
import { updateTabsRightBody } from "../../redux/tabs/actions";
import { ReactComponent as PlusInElipse } from "./assets/plusElipse.svg";

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
      <div className="rightBodyDeposit p-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-start mr-5">
            <p className="mb-0">Доступно: USDT</p>
            <p className="mb-0">2.00023011</p>
          </div>
          <div>
            <p>
              <PlusInElipse className="plusInElipse" /> Депозит
            </p>
          </div>
        </div>
      </div>
      <div>
        <span>Лимит</span>
        <div>
          <span>Цена</span> <input /> <span>USDT</span>
        </div>
        <div>
          <span>Количество</span> <input /> <span>BTC</span>
        </div>
      </div>
      {tabs === "BUY" ? <p>BUY</p> : <p>SELL</p>}
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
