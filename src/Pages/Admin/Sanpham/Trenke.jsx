import Header from '../../../Components/Header/header';
import './product.css';
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUserCookie, refreshToken } from "../../../refreshToken";
import {getApi} from '../../../api/config'

var vitri;
var maso;
var vitriup;
var masoup;
var vitrilist;
var masolist;
var vitrifixlist;
var masofixlist;
function Trenke(props) {
  // Bat dau
  const [data, setdata] = useState([]);
  const [brand, setbrand] = useState([]);
  const [sign, setsign] = useState(1);

  // const [triger, setTriger] = useState(1);

  function changesign() {
    setsign(sign + 1);
  }
  useEffect(() => {
    async function getAllUser() {
      let token = getUserCookie("user");
      console.log(147, token);
      try {
        const res = await getApi("/admin/productcode/list");
        setdata(res.data);
      } catch (error) {
        console.log(168, error);
      }
    }
    getAllUser();
    // axios
    //   .get("http://localhost:3150/admin/productcode/list")
    //   .then(function (response) {
    //     setdata(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, [sign]);

  useEffect(() => {
    async function getAllUser() {
      let token = getUserCookie("user");
      console.log(147, token);
      try {
        const res = await getApi("/admin/categories");
        setbrand(res.data);
      } catch (error) {
        console.log(168, error);
      }
    }
    getAllUser();

    // axios
    //   .get("http://localhost:3150/admin/categories")
    //   .then(function (response) {
    //     setbrand(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, [sign]);

  // ket thuc
  var abcarr;
  var cleararr = [];
  var clearcode = [];
  const [hien, sethien] = useState([]);
  const [productlist, setproductlist] = useState([]);
  const [clearao, setclearao] = useState([]);
  const [clearaocode, setclearaocode] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3150/admin/productcode/list")
      .then(function (response) {
        sethien(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  function choosebrand(id) {
    let listBrand = document.querySelectorAll(".brand");
    for (let i = 0; i < listBrand.length; i++) {
      listBrand[i].setAttribute("style", "");
    }
    document.querySelector(`[value="${id}"]`).style.background = "black";
    document.querySelector(`[value="${id}"]`).style.color = "white";
    abcarr = [];
    data.map(function (value, index) {
      if (value.idCategories[0] === id) {
        abcarr.push(value);
        sethien(abcarr);
        axios
          .get(
            `http://localhost:3150/admin/categories/${value.idCategories[0]}`
          )
          .then(function (response) {
            document.querySelector(".sptk").innerHTML =
              response.data.categoriesName;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
    document.querySelector(".boxtable").style.display = "block";
    document.querySelector(".boxlist").style.display = "none";
  }
  function showall() {
    let listBrand = document.querySelectorAll(".brand");
    for (let i = 0; i < listBrand.length; i++) {
      listBrand[i].setAttribute("style", "");
    }
    document.querySelector("#tatca").style.background = "black";
    document.querySelector("#tatca").style.color = "white";
    document.querySelector(".boxtable").style.display = "block";
    document.querySelector(".boxlist").style.display = "none";
    sethien(data);
  }
  function onclear(id, index) {
    vitri = index;
    maso = id;
    axios
      .get(`http://localhost:3150/admin/productcode/${id}`)
      .then(function (response) {
        console.log(response.data);
        clearcode.push(response.data);
        setclearaocode(clearcode);
      })
      .catch(function (error) {
        console.log(error);
      });

    document.querySelector(".boxclear").style.display = "block";
  }
  function accept() {
    console.log(vitri, maso);
    axios
      .delete(`http://localhost:3150/admin/productcode/${maso}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    hien.splice(vitri, 1);
    console.log(hien);
    changesign();
    closeclear();
  }
  function closeclear() {
    document.querySelector(".boxclear").style.display = "none";
  }
  function closeclearlist() {
    document.querySelector(".boxclearlist").style.display = "none";
  }
  function onupdate(id, index) {
    vitriup = index;
    masoup = id;
    document.querySelector(".boxfix").style.display = "block";
    axios
      .get(`http://localhost:3150/admin/productcode/${id}`)
      .then(function (response) {
        document.querySelector(".productName").value =
          response.data.productName;
        document.querySelector(".productType").value =
          response.data.productType;
        document.querySelector(".performanceProduct").value =
          response.data.performanceProduct;
        document.querySelector(".cameraProduct").value =
          response.data.cameraProduct;
        document.querySelector(".specialFeatures").value =
          response.data.specialFeatures;
        document.querySelector(".design").value = response.data.design;
        document.querySelector(".panel").value = response.data.panel;
        document.querySelector(".countSold").value = response.data.countSold;
        document.querySelector(".Sale").value = response.data.Sale;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function closeupdate() {
    document.querySelector(".boxfix").style.display = "none";
    document.querySelector(".boxfixlist").style.display = "none";
  }
  function update() {
    var productName = document.querySelector(".productName").value;
    var productType = document.querySelector(".productType").value;
    var performanceProduct = document.querySelector(
      ".performanceProduct"
    ).value;
    var cameraProduct = document.querySelector(".cameraProduct").value;
    var specialFeatures = document.querySelector(".specialFeatures").value;
    var design = document.querySelector(".design").value;
    var panel = document.querySelector(".panel").value;
    var countSold = document.querySelector(".countSold").value;
    var Sale = document.querySelector(".Sale").value;
    hien[vitriup].productName = document.querySelector(".productName").value;
    hien[vitriup].productType = document.querySelector(".productType").value;
    hien[vitriup].performanceProduct = document.querySelector(
      ".performanceProduct"
    ).value;
    hien[vitriup].cameraProduct =
      document.querySelector(".cameraProduct").value;
    hien[vitriup].specialFeatures =
      document.querySelector(".specialFeatures").value;
    hien[vitriup].design = document.querySelector(".design").value;
    hien[vitriup].panel = document.querySelector(".panel").value;
    hien[vitriup].countSold = document.querySelector(".countSold").value;
    hien[vitriup].Sale = document.querySelector(".Sale").value;
    axios
      .put(`http://localhost:3150/admin/productcode/${masoup}`, {
        productName,
        productType,
        performanceProduct,
        cameraProduct,
        specialFeatures,
        design,
        panel,
        countSold,
        Sale,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    closeupdate();
    changesign();
  }
  function onboxlist(id, index) {
    let listBrand = document.querySelectorAll(".brand");
    for (let i = 0; i < listBrand.length; i++) {
      listBrand[i].setAttribute("style", "");
    }
    document.querySelector(".boxlist").style.display = "block";
    document.querySelector(".boxtable").style.display = "none";
    axios
      .get(`http://localhost:3150/admin/product/product/${id}`)
      .then(function (response) {
        setproductlist(response.data);
        document.querySelector(".sptk").innerHTML =
          response.data[0].idProductCode.productName;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function onclearlist(id, index) {
    vitrilist = index;
    masolist = id;
    axios
      .get(`http://localhost:3150/admin/product/${id}`)
      .then(function (response) {
        cleararr.push(response.data);
        setclearao(cleararr);
      })
      .catch(function (error) {
        console.log(error);
      });
    document.querySelector(".boxclearlist").style.display = "block";
  }
  function acceptlist() {
    axios
      .delete(`http://localhost:3150/admin/product/${masolist}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    productlist.splice(vitrilist, 1);
    changesign();
    closeclearlist();
  }
  function onupdatelist(id, index) {
    document.querySelector(".boxfixlist").style.display = "block";
    vitrifixlist = index;
    masofixlist = id;
    axios
      .get(`http://localhost:3150/admin/product/${id}`)
      .then(function (response) {
        document.querySelector(".pricevinh").value = response.data.price;
        document.querySelector(".priceRange").value = response.data.priceRange;
        document.querySelector(".storage").value = response.data.storage;
        document.querySelector(".ram").value = response.data.ram;
        document.querySelector(".rom").value = response.data.rom;
        document.querySelector(".color").value = response.data.color;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function updatelist() {
    var price = document.querySelector(".pricevinh").value;
    var priceRange = document.querySelector(".priceRange").value;
    var storage = document.querySelector(".storage").value;
    var ram = document.querySelector(".ram").value;
    var rom = document.querySelector(".rom").value;
    var color = document.querySelector(".color").value;
    console.log(productlist[vitrifixlist]);
    productlist[vitrifixlist].price = price;
    productlist[vitrifixlist].priceRange = priceRange;
    productlist[vitrifixlist].storage = storage;
    productlist[vitrifixlist].ram = ram;
    productlist[vitrifixlist].rom = rom;
    productlist[vitrifixlist].color = color;
    axios
      .put(`http://localhost:3150/admin/product/${masofixlist}`, {
        price,
        priceRange,
        storage,
        ram,
        rom,
        color,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
    closeupdate();
    changesign();
  }
  return (
    <div>
      <Header></Header>
      <div className="newproduct">
        <h1 className="sptk">Sản phẩm trên kệ</h1>
        <div className="allbrand">
          <div className="brand tatca123" id="tatca">
            <p id="tatca" className="tatca" onClick={showall}>
              Tất cả
            </p>
          </div>
          {brand.map(function (value, index) {
            return (
              <div
                className="brand"
                value={value._id}
                key={index}
                onClick={() => choosebrand(value._id)}
              >
                <p id="brand">{value.categoriesName}</p>
              </div>
            );
          })}
        </div>
        <div className="boxtable">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Loại sản phẩm</th>
                <th>Thông tin sản phẩm</th>
                <th>Số lượng bán</th>
                <th>Sale</th>
                <th>Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              {hien.map(function (value, index) {
                return (
                  <tr className="codehover" key={index}>
                    <td>{index + 1}</td>
                    <td>{value.productName}</td>
                    <td>
                      <img
                        src={"http://localhost:3150" + value.thumNail}
                        alt=""
                      />
                    </td>
                    <td>{value.productType}</td>
                    <td>
                      {value.performanceProduct} <br />
                      {value.cameraProduct} <br />
                      {value.specialFeatures} <br />
                      {value.design} <br />
                      {value.panel}
                    </td>
                    <td>{value.countSold}</td>
                    <td>{value.Sale}</td>
                    <td>
                      <button
                        onClick={() => onboxlist(value._id, index)}
                        className="stockbut"
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>
                      <button
                        style={{ margin: "0px 5px" }}
                        onClick={() => onupdate(value._id, index)}
                        className="stockbut"
                      >
                        <i className="fa-solid fa-repeat"></i>
                      </button>
                      <button
                        onClick={() => onclear(value._id, index)}
                        className="stockbut"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="boxlist">
          <table className="onetable">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Giá</th>
                <th>Khoảng giá</th>
                <th>Kho</th>
                <th>Màu sắc</th>
                <th>Cấu hình</th>
                <th>Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody className="onetbody">
              {productlist.map(function (value, index) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.idProductCode.productName}</td>
                    <td>
                      <img
                        src={"http://localhost:3150" + value.productPic[0]}
                        alt=""
                      />
                    </td>
                    <td>{value.price.toLocaleString()}</td>
                    <td>{value.priceRange}</td>
                    <td>{value.storage}</td>
                    <td>{value.color}</td>
                    <td>
                      <p>Ram: {value.ram}</p>
                      <p>Rom: {value.rom}</p>
                    </td>
                    <td>
                      <button
                        onClick={() => onupdatelist(value._id, index)}
                        className="butlist"
                      >
                        <i className="fa-solid fa-repeat"></i>
                      </button>
                      <button
                        onClick={() => onclearlist(value._id, index)}
                        style={{ marginLeft: "15px" }}
                        className="butlist"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="boxclear">
          <h1>Chắc chắn muốn xóa</h1>
          <div>
            <table className="tableclear">
              {clearaocode.map(function (value, index) {
                return (
                  <tr key={index}>
                    <td>{value.productName}</td>
                    <td>
                      <img src={"http://localhost:3150" + value.thumNail} />
                    </td>
                    <td>{value.productType}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="boxaccept">
            <button onClick={accept}>Accept</button>
            <button onClick={closeclear}>Close</button>
          </div>
        </div>
        <div className="boxclearlist">
          <h1>Chắc chắn muốn xóa</h1>
          <div>
            <table className="tableclear">
              {clearao.map(function (value, index) {
                return (
                  <tr key={index}>
                    <td>{value.idProductCode.productName}</td>
                    <td>
                      <img
                        src={"http://localhost:3150" + value.productPic[0]}
                        alt=""
                      />
                    </td>
                    <td>{value.color}</td>
                    <td>Ram: {value.ram}</td>
                    <td>Rom: {value.rom}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="boxaccept">
            <button onClick={acceptlist}>Accept</button>
            <button onClick={closeclearlist}>Close</button>
          </div>
        </div>
        <div className="boxfix">
          <h3>Bảng thông tin chỉnh sửa</h3>
          <div className="inboxfix">
            <span>productName:</span>{" "}
            <input className="productName" type="text" />
          </div>
          <div className="inboxfix">
            <span>productType:</span>{" "}
            <input className="productType" type="text" />
          </div>
          <div className="inboxfix">
            <span>performanceProduct:</span>{" "}
            <input className="performanceProduct" type="text" />
          </div>
          <div className="inboxfix">
            <span>cameraProduct:</span>{" "}
            <input className="cameraProduct" type="text" />
          </div>
          <div className="inboxfix">
            <span>specialFeatures:</span>{" "}
            <input className="specialFeatures" type="text" />
          </div>
          <div className="inboxfix">
            <span>design:</span> <input className="design" type="text" />
          </div>
          <div className="inboxfix">
            <span>panel:</span> <input className="panel" type="text" />
          </div>
          <div className="inboxfix">
            <span>countSold:</span> <input className="countSold" type="text" />
          </div>
          <div className="inboxfix">
            <span>Sale:</span> <input className="Sale" type="text" />
          </div>
          <div className="boxfixbut">
            <button onClick={update}>Update</button>
            <button onClick={closeupdate}>Close</button>
          </div>
        </div>
        <div className="boxfixlist">
          <h3>Bảng thông tin chỉnh sửa</h3>
          <div className="inboxfix">
            <span>price:</span> <input className="pricevinh" type="text" />
          </div>
          <div className="inboxfix">
            <span>priceRange:</span>{" "}
            <input className="priceRange" type="text" />
          </div>
          <div className="inboxfix">
            <span>storage:</span> <input className="storage" type="text" />
          </div>
          <div className="inboxfix">
            <span>ram:</span> <input className="ram" type="text" />
          </div>
          <div className="inboxfix">
            <span>rom:</span> <input className="rom" type="text" />
          </div>
          <div className="inboxfix">
            <span>color:</span> <input className="color" type="text" />
          </div>
          <div className="boxfixbut">
            <button onClick={updatelist}>Update</button>
            <button onClick={closeupdate}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trenke;
