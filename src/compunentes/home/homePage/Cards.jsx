import { PlusCircleOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { ExceptionMap } from "antd/lib/result";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
import Rate from "./Rate";

const Cards = ({ item, keyId }) => {
  let navigate = useNavigate();
  // console.log(10,item,searchTitle, keyId)
  if (!item.data.length > 0) {
    item.data = [{ minPrice: "chua set gia" }];
    item.minPrice = "chưa set giá ";
  }
  if (item.data[0].icon == null) {
    item.data[0].icon = [{ iconName: "not icon" }];
    item.data[0].icon.iconName = "not icon";
  }

  console.log(item.data[0].icon.iconPic);
  // test
  // if (Object.keys(item.data[0]).length > 1) {
  //     item.data = [{ iconName: 'not icon' }];
  //     item.data[0].icon.iconName = 'not icon';
  // }

  function RemoveAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }
  const NewSale = item.Sale.replace("%", "") * 1;
  const NewPrice = item.minPrice - (NewSale * item.minPrice) / 100;

  function moveToProduct(Name) {
    navigate(`/product/filter/${Name}`);
  }
  return (
    <div
      key={keyId}
      onClick={() => {
        moveToProduct(RemoveAccents(item.productName).split(" ").join(""));
      }}
      className="home_cards-itm"
    >
      <div className="cards-container">
        <div className="cards">
          <div className="item_image-box">
            <div className="image_box">
              <img
                className="image_box-image"
                src={"http://localhost:3150" + item.thumNail}
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="details">
              {item.data[0].icon.iconName !== "not icon" ? (
                <p className="VNPayIcon">
                  <img
                    className="VNPayIcon-icon"
                    src={"http://localhost:3150" + item.data[0].icon.iconPic}
                  />
                  {item.data[0].icon.iconName}
                </p>
              ) : null}
            </div>
            <p className="ProductName">{item.productName}</p>
          </div>

          <div>
            {typeof item.minPrice === "number" ? (
              <span className="price">
                {item.minPrice.toLocaleString()} <span className="đ">₫</span>
              </span>
            ) : null}

            {NewPrice ? <span className="NewSale"> -{NewSale}%</span> : null}

            {isNaN(NewPrice) ? null : (
              <p className="NewPrice">
                {NewPrice.toLocaleString()} <span className="đ">₫</span>
              </p>
            )}
          </div>
          <div className="cards-info">
            <p className="design">{item.design}</p>
            <p className="panel">{item.panel}</p>
            <p className="cameraProduct">{item.cameraProduct}</p>
            <p>
              <Rate />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
