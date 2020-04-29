import React from "react";
import { connect } from "react-redux";
import { updateTabsRightBody } from "../../redux/tabs/actions";
import { ReactComponent as PlusInElipse } from "./assets/plusElipse.svg";

const Exchange = ({ tabs, updateTabsRightBody }) => {
  const css =
    tabs === "BUY"
      ? {
          rightBodyDeposit: "rightBodyDepositBlack p-2",
          rightBodyDepositDiv: "rightBodyDepositDivBlack",
          buttonBTC: "buttonBTCBlack",
        }
      : {
          rightBodyDeposit: "rightBodyDeposit p-2",
          rightBodyDepositDiv: "rightBodyDepositDiv",
          buttonBTC: "buttonBTC",
        };
  console.log(css);

  return (
    <div className="rightBody">
      <div className={css.rightBodyDepositDiv}>
        <div className="rightBodyNav d-flex justify-content-center w-100">
          <p
            onClick={() => updateTabsRightBody("BUY")}
            className={
              tabs === "BUY"
                ? "rightBodyTabSelected pGothamProBold rightBodyTabSelectedBuyBlack"
                : "rightBodyTab pGothamProBold"
            }
          >
            Купить BTC
          </p>
          <p
            onClick={() => updateTabsRightBody("SELL")}
            className={
              tabs === "SELL"
                ? "rightBodyTabSelected pGothamProBold"
                : "rightBodyTab pGothamProBold"
            }
          >
            Продать BTC
          </p>
        </div>
        <div>
          <div className={`rightBodyExchange`}>
            <div className={`${css.rightBodyDeposit}`}>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column align-items-start mr-5">
                  <p className="mb-0">Доступно: </p>
                  <p className="mb-0">2.00023011 USDT</p>
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
                  <p className="w-100 text-left">Цена</p>
                  <input className="w-100" />
                  <p className="w-100">USDT</p>
                </div>

                <div className="d-flex flex-row w-100 ">
                  <p className="w-100 text-left">Количество</p>
                  <input className="w-100" />
                  <p className="w-100">BTC</p>
                </div>
              </div>

              <div className="percentDiv mt-3">
                <p>25%</p>
                <p>50%</p>
                <p>75%</p>
                <p>100%</p>
              </div>
              <div className="d-flex justify-content-between mt-3 mb-1">
                <p>Сумма</p>
                <p>--USDT</p>
              </div>
              <div className={`${css.buttonBTC}`}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tabs: state.tabsReducer.right,
  };
};

const mapDispatchToProps = {
  updateTabsRightBody,
};
export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
