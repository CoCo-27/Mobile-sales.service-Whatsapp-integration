import React from "react";
import Header from "../../../Components/Header/header";
import "./khohangchinhsua.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "./product.css";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import { getApi } from "../../../api/config";
import { ConstructionOutlined } from "@mui/icons-material";
// import { Doughnut } from "react-chartjs-2";

var allcode;
var alllist;
var count = 0;
function Khohang(props) {
  const [money, setmoney] = useState([]);
  const [statis, setstatis] = useState([]);
  


  // useEffect(() => {
  //   async function getAllUser() {
  //     let token = getUserCookie("user");
  //     console.log(147, token);
  //     try {
  //       const res = await getApi("/admin/user");
  //       setstate(res.data);
  //     } catch (error) {
  //       console.log(168, error);
  //     }
  //   }
  //   getAllUser();
  // }, [isin]);





  useEffect(() => {
    
    getApi(`/admin/productcode/list`)
      .then(function (response) {
         allcode = response.data.length;
        console.log(43,allcode)

      })
      .catch(function (error) {
          console.log(error);
      });
      getApi(`/admin/product/list`)
      .then(function (response) {
        alllist = response.data.length;
        console.log(52,response)
        setmoney(response.data);
        console.log(56,response.data)
        setstatis(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(60, money)
  money.length > 0 ? count = money.reduce((sum,cur)=>{
    

    return sum + (cur.price *cur.storage ) },0): count =0 ;
  return (
    <div>
      <Header></Header>
      <div className="khohang">
        <div className="statisbox">
          <div className="statis">
            <div
              className="statisicon"
              style={{ background: "rgb(255, 217, 223)" }}
            >
              <p style={{ color: "rgb(19, 129, 255)" }}>
                <i className="fa-solid fa-mobile-screen-button"></i>
              </p>
            </div>
            <div className="statistext">
              <h3>All Code</h3>
              <p>{allcode}</p>
            </div>
          </div>
          <div className="statis">
            <div
              className="statisicon"
              style={{ background: "rgb(147, 255, 147)" }}
            >
              <p>
                <i className="fa-solid fa-clipboard-list"></i>
              </p>
            </div>
            <div className="statistext">
              <h3>All List</h3>
              <p>{alllist}</p>
            </div>
          </div>
          <div className="statis">
            <div
              className="statisicon"
              style={{ background: "rgb(169, 209, 255)" }}
            >
              <p style={{ color: "rgb(255, 255, 0)" }}>
                <i className="fa-solid fa-sack-dollar"></i>
              </p>
            </div>
            <div className="statistext">
              <h3>All Money</h3>
              {}
              <p>{count.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="statismid">
          <table id="statistable">
            <thead>
              <tr>
                <th id="stt">STT</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Giá</th>
                <th>Tồn kho</th>
              </tr>
            </thead>
            <tbody>
              {statis.length==0? null:  statis.map(function (value, index) {
                return (
                  <tr key={index}>
                    <td id="stt-td">{index + 1}</td>
                    {console.log(133,value,index + 1)}
                    <td >{value.idProductCode.productName}</td>
                    <td>
                      <img 
                        src={"http://localhost:3150" + value.productPic[0]}
                        alt=""
                      />
                    </td>
                    <td>{value.price.toLocaleString()}</td>
                    <td>{value.storage}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>


        {/* <Doughnut
          data={{
            labels: [
              "Africa",
              "Asia",
              "Europe",
              "Latin America",
              "North America",
            ],
            datasets: [
              {
                label: "Population (millions)",
                backgroundColor: [
                  "#3e95cd",
                  "#8e5ea2",
                  "#3cba9f",
                  "#e8c3b9",
                  "#c45850",
                ],
                data: [2478, 5267, 734, 784, 433],
              },
            ],
          }}
          option={{
            title: {
              display: true,
              text: "Predicted world population (millions) in 2050",
            },
          }}
        /> */}
      </div>
    </div>
  );
}

export default Khohang;
