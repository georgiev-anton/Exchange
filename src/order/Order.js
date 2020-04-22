import React from "react";
import Table from "../components/table/Table";
const Order = () => {
  return (
    <div className="order">
      <p>Ордер</p>
      <div>
        <Table type={"b"}></Table>
        <Table type={"s"}></Table>
      </div>
    </div>
  );
};

export default Order;
