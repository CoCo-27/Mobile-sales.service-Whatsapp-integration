import React from "react";
import order from "../../../assets/images/ordermenu.png";

function OrderCheck(props) {
  //  console.log(5,props)
  return (
    <div>
      <div className="order_conter">
        <div className="order_conter_null">
          <img src={order} alt="" />
          <p>Chưa có đơn hàng</p>
        </div>
        <div className="order_conter_file"></div>
      </div>
    </div>
  );
}

export default OrderCheck;
