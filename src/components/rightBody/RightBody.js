import React from "react";
import { connect } from "react-redux";
import { updateTabsRightBody } from "../../redux/tabs/actions";
import { ReactComponent as PlusInElipse } from "./assets/plusElipse.svg";
import LastOrders from "./lastOrders/LastOrders";

const RightBody = ({ tabs, updateTabsRightBody }) => {
  return (
    <div className="rightBody">
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
        <div className="d-flex">
          <p className="mt-2 mb-2">Лимит</p>
        </div>

        <div className="d-flex flex-column justify-content-between limit">
          <div className="d-flex flex-row align-items-start w-100">
            <p className="w-100" >Цена</p>
            <input className="w-100" />
            <p className="w-100" >USDT</p>
          </div>

          <div className="d-flex flex-row w-100 ">
            <p className="w-100">Количество</p>
            <input className="w-100" />
            <p className="w-100">BTC</p>
          </div>
        </div>

        <div className="percentDiv d-flex flex-row justify-content-between mt-3">
          <p>25%</p>
          <p>50%</p>
          <p>75%</p>
          <p>100%</p>
        </div>
        <div className="d-flex justify-content-between mt-3 mb-1">
          <p>Сумма</p>
          <p>--USDT</p>
        </div>
        <p className="buttonBTC">
          {tabs === "BUY" ? (
            <div>
              <p>Купить BTC</p>
              <div className="yellowCircle" />
            </div>
          ) : (
            <div>
              <p>Продать BTC</p>
              <div className="yellowCircle" />
            </div>
          )}
        </p>
      </div>
      <LastOrders/>
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
