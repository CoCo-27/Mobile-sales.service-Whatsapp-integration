import React from "react";
import order from "../../../assets/images/ordermenu.png";

function OrderDangGiao() {
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

export default OrderDangGiao;
