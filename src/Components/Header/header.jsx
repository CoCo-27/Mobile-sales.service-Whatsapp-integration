import "antd/dist/antd.css";
import {
  BellOutlined,
  MailOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import "./style.css";
import React from "react";
import anh1 from "./aaa.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function Header(props) {
  const userInfor = useSelector(function(state){
return state.user
  })
  const userName = userInfor.username?userInfor.username:'hello'
  const avatr = process.env.REACT_APP_CLIENT_URL + userInfor.avatar
 
  console.log(userInfor)
  const navigate = useNavigate();
  var countproduct = 0;
  var countselect = 0;
  var countstaff = 0;
  var countinfor = 0;

  function Home() {
    navigate("/admin/home");
  }
  function QLnhanvien() {
    navigate("/admin/nhanvien");
  }
  function xacnhan() {
    navigate("/admin/Xacnhan");
  }
  function danggiao() {
    navigate("/admin/Danggiao");
  }
  function hoanthanh() {
    navigate("/admin/Hoanthanh");
  }
  function khohang() {
    navigate("/admin/Khohang");
  }
  function spmoi() {
    navigate("/admin/Spmoi");
  }
  function trenke() {
    navigate("/admin/Trenke");
  }

  function onselect() {
    countselect++;
    if (countselect % 2 !== 0) {
      document.querySelector(".select").style.display = "block";
    }
    if (countselect % 2 == 0) {
      document.querySelector(".select").style.display = "none";
    }
  }
  function onproduct() {
    countproduct++;
    if (countproduct % 2 !== 0) {
      document.querySelector(".product").style.display = "block";
    }
    if (countproduct % 2 == 0) {
      document.querySelector(".product").style.display = "none";
    }
  }
  // function onstaff() {
  //   countstaff++;
  //   if (countstaff % 2 !== 0) {
  //     document.querySelector(".staff").style.display = "block";
  //   }
  //   if (countstaff % 2 == 0) {
  //     document.querySelector(".staff").style.display = "none";
  //   }
  // }
  function oninfor() {
    countinfor++;
    console.log(countinfor);
    if (countinfor % 2 !== 0) {
      document.querySelector(".infor").style.display = "block";
    }
    if (countinfor % 2 == 0) {
      document.querySelector(".infor").style.display = "none";
    }
  }
  function onchangecolor() {
    document.querySelector(".changecolor").style.display = "block";
  }
  function coloroff() {
    document.querySelector(".changecolor").style.display = "none";
  }
  function lightpink() {
    document.querySelector(".topside ").style.color = "black";
    document.querySelector(".topside ").style.background = "rgb(255, 101, 155)";
    document.querySelector(".sidebar").style.background = "rgb(255, 140, 180)";
    document.querySelector(".dashbar").style.background = "rgb(255, 61, 129)";
    document.querySelector(".dashbar p").style.color = "white";
    document.querySelector(".iconmail").style.color = "black";
    document.querySelector(".iconcolor").style.color = "black";
    document.querySelector(".iconbell").style.color = "black";
    document.querySelector(".iconuser").style.color = "black";
    document.querySelector(".tv").style.color = "white";
    document.querySelector(".logo ").style.background = "rgb(255, 101, 155)";
    document.querySelector(".mid input").style.background =
      "rgb(255, 227, 231)";
    var x = document.querySelectorAll(".menu1");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "black";
    }
    var y = document.querySelectorAll(".select p");
    var z = document.querySelectorAll(".infor p");
    var a = document.querySelectorAll(".staff p");
    var b = document.querySelectorAll(".product p");
    for (var i = 0; i < y.length; i++) {
      y[i].style.color = "black";
      console.log(y[i]);
    }
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "black";
      console.log(y[i]);
    }
    for (var i = 0; i < b.length; i++) {
      b[i].style.color = "black";
      console.log(y[i]);
    }
    for (var i = 0; i < z.length; i++) {
      z[i].style.color = "black";
      console.log(y[i]);
    }
    document.querySelector(".header ").style.background = "rgb(255, 204, 212)";
  }
  function lightblue() {
    document.querySelector(".topside ").style.color = "black";
    document.querySelector(".topside ").style.background = "rgb(92, 165, 255)";
    document.querySelector(".sidebar").style.background = "rgb(150, 197, 255)";
    document.querySelector(".dashbar").style.background = "rgb(48, 141, 255)";
    document.querySelector(".dashbar p").style.color = "white";
    document.querySelector(".iconmail").style.color = "black";
    document.querySelector(".iconcolor").style.color = "black";
    document.querySelector(".iconbell").style.color = "black";
    document.querySelector(".iconuser").style.color = "black";
    document.querySelector(".tv").style.color = "white";
    document.querySelector(".logo ").style.background = "rgb(92, 165, 255)";
    document.querySelector(".mid input").style.background =
      "rgb(209, 230, 255)";
    var x = document.querySelectorAll(".menu1");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "black";
    }
    var y = document.querySelectorAll(".select p");
    var z = document.querySelectorAll(".infor p");
    var a = document.querySelectorAll(".staff p");
    var b = document.querySelectorAll(".product p");
    for (var i = 0; i < y.length; i++) {
      y[i].style.color = "black";
      console.log(y[i]);
    }
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "black";
      console.log(y[i]);
    }
    for (var i = 0; i < b.length; i++) {
      b[i].style.color = "black";
      console.log(y[i]);
    }
    for (var i = 0; i < z.length; i++) {
      z[i].style.color = "black";
      console.log(y[i]);
    }
    document.querySelector(".header ").style.background = "rgb(171, 209, 255)";
  }
  function lightgrey() {
    document.querySelector(".topside ").style.color = "black";
    document.querySelector(".topside ").style.background = "rgb(143, 143, 143)";
    document.querySelector(".sidebar").style.background = "rgb(195, 195, 195)";
    document.querySelector(".dashbar").style.background = "rgb(143, 143, 143)";
    document.querySelector(".dashbar p").style.color = "black";
    document.querySelector(".iconmail").style.color = "black";
    document.querySelector(".iconcolor").style.color = "black";
    document.querySelector(".iconbell").style.color = "black";
    document.querySelector(".iconuser").style.color = "black";
    document.querySelector(".tv").style.color = "black";
    document.querySelector(".logo ").style.background = "rgb(143, 143, 143)";
    document.querySelector(".mid input").style.background =
      "rgb(226, 226, 226)";
    var x = document.querySelectorAll(".menu1");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "black";
    }
    var y = document.querySelectorAll(".select p");
    var z = document.querySelectorAll(".infor p");
    var a = document.querySelectorAll(".staff p");
    var b = document.querySelectorAll(".product p");
    for (var i = 0; i < y.length; i++) {
      y[i].style.color = "black";
      console.log(y[i]);
    }
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "black";
      console.log(y[i]);
    }
    for (var i = 0; i < b.length; i++) {
      b[i].style.color = "black";
      console.log(y[i]);
    }
    for (var i = 0; i < z.length; i++) {
      z[i].style.color = "black";
      console.log(y[i]);
    }
    document.querySelector(".header ").style.background = "rgb(195, 195, 195)";
  }
  function black() {
    document.querySelector(".topside ").style.color = "white";
    document.querySelector(".topside ").style.background = "black";
    document.querySelector(".sidebar").style.background = "rgb(46, 46, 46)";
    document.querySelector(".dashbar").style.background = "black";
    document.querySelector(".dashbar p").style.color = "white";
    document.querySelector(".iconmail").style.color = "white";
    document.querySelector(".iconcolor").style.color = "white";
    document.querySelector(".iconbell").style.color = "white";
    document.querySelector(".iconuser").style.color = "white";
    document.querySelector(".tv").style.color = "white";
    document.querySelector(".logo ").style.background = "black";
    document.querySelector(".mid input").style.background =
      "rgb(103, 103, 103)";
    var x = document.querySelectorAll(".menu1");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "white";
    }
    var y = document.querySelectorAll(".select p");
    var z = document.querySelectorAll(".infor p");
    var a = document.querySelectorAll(".staff p");
    var b = document.querySelectorAll(".product p");
    for (var i = 0; i < y.length; i++) {
      y[i].style.color = "white";
      console.log(y[i]);
    }
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "white";
      console.log(y[i]);
    }
    for (var i = 0; i < b.length; i++) {
      b[i].style.color = "white";
      console.log(y[i]);
    }
    for (var i = 0; i < z.length; i++) {
      z[i].style.color = "white";
      console.log(y[i]);
    }
    document.querySelector(".header ").style.background = "rgb(46, 46, 46)";
  }
  function purple() {
    document.querySelector(".topside ").style.color = "white";
    document.querySelector(".topside ").style.background = "rgb(196, 0, 196)";
    document.querySelector(".sidebar").style.background = "rgb(104, 0, 104)";
    document.querySelector(".dashbar").style.background = "rgb(196, 0, 196)";
    document.querySelector(".dashbar p").style.color = "white";
    document.querySelector(".iconmail").style.color = "white";
    document.querySelector(".iconcolor").style.color = "white";
    document.querySelector(".iconbell").style.color = "white";
    document.querySelector(".iconuser").style.color = "white";
    document.querySelector(".tv").style.color = "white";
    document.querySelector(".logo ").style.background = "rgb(196, 0, 196)";
    document.querySelector(".mid input").style.background =
      "rgb(218, 127, 218)";
    var x = document.querySelectorAll(".menu1");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "white";
    }
    var y = document.querySelectorAll(".select p");
    var z = document.querySelectorAll(".infor p");
    var a = document.querySelectorAll(".staff p");
    var b = document.querySelectorAll(".product p");
    for (var i = 0; i < y.length; i++) {
      y[i].style.color = "white";
      console.log(y[i]);
    }
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "white";
      console.log(y[i]);
    }
    for (var i = 0; i < b.length; i++) {
      b[i].style.color = "white";
      console.log(y[i]);
    }
    for (var i = 0; i < z.length; i++) {
      z[i].style.color = "white";
      console.log(y[i]);
    }
    document.querySelector(".header ").style.background = "rgb(104, 0, 104)";
  }
  function green() {
    document.querySelector(".topside ").style.color = "white";
    document.querySelector(".topside ").style.background = "rgb(87, 187, 67)";
    document.querySelector(".sidebar").style.background = "rgb(0, 101, 0)";
    document.querySelector(".dashbar").style.background = "rgb(87, 187, 67)";
    document.querySelector(".dashbar p").style.color = "white";
    document.querySelector(".iconmail").style.color = "white";
    document.querySelector(".iconcolor").style.color = "white";
    document.querySelector(".iconbell").style.color = "white";
    document.querySelector(".iconuser").style.color = "white";
    document.querySelector(".tv").style.color = "white";
    document.querySelector(".logo ").style.background = "rgb(87, 187, 67)";
    document.querySelector(".mid input").style.background =
      "rgb(117, 203, 117)";
    var x = document.querySelectorAll(".menu1");
    for (var i = 0; i < x.length; i++) {
      x[i].style.color = "white";
    }
    var y = document.querySelectorAll(".select p");
    var z = document.querySelectorAll(".infor p");
    var a = document.querySelectorAll(".staff p");
    var b = document.querySelectorAll(".product p");
    for (var i = 0; i < y.length; i++) {
      y[i].style.color = "white";
      console.log(y[i]);
    }
    for (var i = 0; i < a.length; i++) {
      a[i].style.color = "white";
      console.log(y[i]);
    }
    for (var i = 0; i < b.length; i++) {
      b[i].style.color = "white";
      console.log(y[i]);
    }
    for (var i = 0; i < z.length; i++) {
      z[i].style.color = "white";
      console.log(y[i]);
    }
    document.querySelector(".header ").style.background = "rgb(0, 101, 0)";
  }
  return (
    <div className="admin">
      <div className="sidebar">
        <div className="topside">
          <div className="img">
            <img className="logo" src={anh1} alt="anh1" />
          </div>
          <div>
            <p>
              Shop <span className="online">online</span>
            </p>
          </div>
        </div>
        <div className="botside">
          <div className="dashbar">
            <i className="fa-solid fa-tv tv "></i>
            <p className="opt" onClick={Home}>
              Dashboard
            </p>
          </div>
          {/* <div onClick={onstaff} className="menu1"> */}
          <div  className="menu1">
            <div>
              <i className="fa-solid fa-users vicon"></i>
              <p className="opt" onClick={QLnhanvien}>Nhan vien</p>
            </div>
            <i className="fa-solid fa-angle-right arrow"></i>
          </div>
          {/* <div className="staff">
            <p>- Cap quyen</p>
            <p onClick={QLnhanvien} className="qlnv">
              - Quan ly nhan vien
            </p>
          </div> */}
          <div onClick={onselect} className="menu1">
            <div>
              <i className="fa-solid fa-truck-ramp-box vicon"></i>
              <p className="opt">Don hang</p>
            </div>
            <i className="fa-solid fa-angle-right arrow"></i>
          </div>
          <div className="select">
            <p onClick={xacnhan}>- Cho xac nhan</p>
            <p onClick={danggiao}>- Dang giao hang</p>
            <p onClick={hoanthanh}>- Da hoan thanh</p>
          </div>
          <div onClick={onproduct} className="menu1">
            <div>
              <i className="fa-solid fa-mobile-screen vicon"></i>
              <p className="opt" style={{ marginLeft: "18px" }}>
                San pham
              </p>
            </div>
            <i className="fa-solid fa-angle-right arrow"></i>
          </div>
          <div className="product">
            <p className="hover" onClick={trenke}>
              - Sản phẩm trên kệ
            </p>
            <p className="hover" onClick={spmoi}>
              - Sản phẩm mới
            </p>

            <p className="hover" onClick={khohang}>
              - Kho hàng
            </p>
          </div>
          <div onClick={oninfor} className="menu1"></div>
        </div>
      </div>
      <div className="headervinh">
        <div className="left">
          <div className="left1">
            <MailOutlined className="iconmail" />
            <BellOutlined className="iconbell" />
            <div className="tb1">1</div>
            <div className="tb2">7</div>
          </div>
        </div>
        <div className="mid">
          <i className="fa-solid fa-magnifying-glass searchvinh"></i>
          <input placeholder="Search..." type="search" />
        </div>
        <div className="right">
          <div className="right1">
            <BgColorsOutlined onClick={onchangecolor} className="iconcolor" />
            {avatr?
            <img src={avatr} alt="img"  className="user_avatar"/>
            :<i className="fa-solid fa-circle-user iconuser"></i>}
          </div>
          <p className="tenuser">{userName}</p>
        </div>
      </div>
      <div className="changecolor">
        <div className="topco">
          <h2 className="gd">Giao dien</h2>
          <i onClick={coloroff} className="fa-solid fa-x"></i>
        </div>
        <div>
          <p>Mau sang</p>
          <div className="light">
            <div className="lightpink">
              <p onClick={lightpink} className="incolor">
                Ap dung
              </p>
            </div>
            <div className="lightblue">
              <p onClick={lightblue} className="incolor">
                Ap dung
              </p>
            </div>
            <div className="lightgrey">
              <p onClick={lightgrey} className="incolor">
                Ap dung
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>Mau toi</p>
          <div className="light">
            <div className="black">
              <p onClick={black} className="incolor">
                Ap dung
              </p>
            </div>
            <div className="purple">
              <p onClick={purple} className="incolor">
                Ap dung
              </p>
            </div>
            <div className="green">
              <p onClick={green} className="incolor">
                Ap dung
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
