import React from "react";
import order from "../../../assets/images/ordermenu.png";

function OrderAll(props) {
  const allOrder = props.userOder
  let sumOrder = []
  let sumStatus=0
for(let a = 0; a < allOrder.length; a++){
  let list = allOrder[a].listProduct
  sumStatus = allOrder[a].status
  sumOrder=[...sumOrder,...list]
}
  return (
    <div>
      <div className="order_seach">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Tìm kiếm theo Tên Shop, ID đơn hàng hoặc Tên Sản Phẩm"
        />
      </div>
      {sumOrder?
     ( <table>
       <thead>
        <tr>
          <th>STT</th>
          <th>Sản phẩm</th>
          <th>avatar</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>status</th>
        </tr>
       </thead>
       <tbody>
        {sumOrder.map(function(value, index){
            if(value.idProduct !== null){
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{value.idProduct.productType}</td>
              <td><img src={process.env.REACT_APP_CLIENT_URL+value.idProduct.idProductCode.thumNail} alt="img" className="order_conter_img"/></td>
              <td>{(value.idProduct.price)}</td>
              <td>{(value.quantity)}</td>
              <td>{sumStatus}</td>
            </tr>
          )}
         
        })}
       </tbody>
        </table>):
     ( <div className="order_conter">
      <div className="order_conter_null">
        <img src={order} alt="" />
        <p>Chưa có đơn hàng</p>
      </div>
      <div className="order_conter_file"></div>
    </div>
    )
    }
  </div>
  );
}

export default OrderAll;
