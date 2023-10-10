import React, { useEffect, useState } from 'react';
import logo1 from "../../../assets/images/logoShopee1.png";
import {getApi} from '../../../api/config'

function CapNhat() {
  const [userCart,setUserCart]=useState([])
  function upCart(arr){
    setUserCart(arr)
  }
 
useEffect(() => {
  getApi('/user/orders')
  .then(function(data){
    // console.log(24, data.data[data.data.length-1])
    const newCart =data.data[data.data.length-1] ? data.data[data.data.length-1] : []
   
    upCart(newCart)
  })
 .catch(function(orr){
  console.log(34,orr)
  })
}, [])
  return (
    <div>
      <div className="capnhat_">
        <img src={logo1} alt="" />
        <span>Chưa có cập nhật đơn hàng</span>
      </div>
    </div>
  );
}

export default CapNhat;
