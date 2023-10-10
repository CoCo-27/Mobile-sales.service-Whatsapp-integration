import "../home/Home.css";
import { React, useEffect, useState } from "react";
import axios from "../../axios";
import SeeMore from "../home/homePage/SeeMore";
import ListProduct from "./homePage/ListProduct";
import Advertisement from "../../advertisement/Advertisement";

import { WechatOutlined, ThunderboltFilled } from "@ant-design/icons";
import Header from "../header/Header";
import Slider from "../slider/Slider";
import Footer from "../footer/Footer";
import Categories from "../categories/Categories";

const Home = () => {
  const [productCode, setProductCode] = useState([]);
  const [numberShow, setNumberShow] = useState(20);
  const [Slides, setSlides] = useState([]);
  const [categories, setCategories] = useState([]);
  const [NewIcon, setNewIcon] = useState([]);

  function seeMore() {
    setNumberShow(numberShow + 20);
  }

  // Product Code
  useEffect(() => {
    axios
      .get("/user/list")
      .then(function (res) {
          setProductCode(res.data.dataProductCode);
          setSlides(res.data.listSlide);
          setCategories(res.data.listCategories);
          setNewIcon(res.data.dataProductCode[0].data[0].icon);
      })
      .catch(function (err) {
        console.log(36, err);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <div className="home">
        <div className="home-container">
          <Slider Slides={Slides} />
          <Categories categories={categories} />
          <div className=" box-checkbox">
            <p className="total-product">{productCode.length} Điện Thoại</p>
            <span className="product-item-flash">
              <ThunderboltFilled className="item-flash-icon" />
              GIAO SIÊU NHANH
            </span>
          </div>
          <div className="home_status_container-chat">
            <i title="New messages" id="unread-msg-number">
              <WechatOutlined className="WechatOutlined" />
            </i>
            <a href="#" id="status-icon"></a>
          </div>
          <div className="home-container-filter">
            <div className="home-page-product">
              <ListProduct
                productCode={productCode}
                numberShow={numberShow}
                NewIcon={NewIcon}
              />
            </div>
          </div>
          <SeeMore seeMore={seeMore} />
          <Advertisement />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
