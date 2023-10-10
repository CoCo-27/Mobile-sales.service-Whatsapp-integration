import { ToastContainer } from "react-toastify";
import Cart from "./Cart/Cart";
import Comment1 from "./Comment/Comment";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Admin/Home/home";
import Xacnhan from "./Pages/Admin/DonhangFolder/Xacnhan";
import Hoanthanh from "./Pages/Admin/DonhangFolder/Hoanthanh";
import Danggiao from "./Pages/Admin/DonhangFolder/Danggiao"
import Khohang from "./Pages/Admin/Sanpham/Khohang";
import Spmoi from "./Pages/Admin/Sanpham/Spmoi";
import Trenke from "./Pages/Admin/Sanpham/Trenke";
import Nhanvien from './Pages/Admin/Nhanvien/Nhanvien'
import React, { useState, useEffect } from "react";
import axios from "./axios";
import Login from "./Pages/Admin/Login/login";
import UserLogin from "./User/UserLogin";
import UserSingIn from "./User/UserSingIn";
import UserPase from "./User/UserPase";
import ContextProvider from "./Conter/ContextProvider";
import Home1 from "./compunentes/home/Home";
// import CreateOrder from "./Pages/CreateOrder";
import "./App.css";
import ProductChild from "./Pages/ProductChild";
import FilterProduct from "./Pages/FilterProduct";
import "antd/dist/antd.css"; //ở trong nodemodum
// ==============================================
// ===============================================
//data
import productList from "./data-tinh/dataold";
import listProductCode from "./data-tinh/dataNewMix";
import CreateOrder from "./Pages/CreateOrder";
import SearchProduct from "./Pages/SearchProduct";
const App = (props) => {
  const [count1, setCount1] = useState(0);
  const [dataFilter, setDataFilter] = useState([]);

  const filterProduct = {
    brand: [
      "Iphone",
      "Samsung",
      "Oppo",
      "Vivo",
      "Xiaomi",
      "Realmi",
      "Nokia",
      "Itel",
      "Masstel",
    ],
    price: [
      "dưới 2tr",
      "từ 2- 4tr",
      "từ 4-7tr",
      "từ 7-13tr",
      "từ 13-20tr",
      "trên 20tr",
    ],
    productType: ["android", "Iphone(iOS)", "Điện thoại phổ thông"],
    performanceProduct: [
      "chơi game/cấu hình cao",
      "Pin khủng trên 5000 mAh",
      "Sạc pin nhanh",
    ],
    ram: ["2GB", "3GB", "4GB", "6GB", "8GB", "12GB"],
    rom: ["8GB", "16GB", "32GB", "64GB", "128GB", "256GB"],
    cameraProduct: [
      "chụp cận cảnh(macro)",
      "chụp góc rộng",
      "chụp xóa phông",
      "chụp zoom xa",
    ],
    specialFeatures: [
      "Hỗ trợ 5g",
      "Bảo mật khuôn mặt",
      "bảo mật vân tay",
      "Sạc không dây",
      "Kháng nước , bụi",
    ],
    design: ["Tràn viền", "Mỏng nhẹ", "Mặt lưng kính"],
    panel: ["nhỏ gọn dễ cầm", "Từ 6inch trở lên", "Màn hình gập"],
  };
  // color: Xanh , Đỏ , Tím , Hồng, Đen
  let productCode = [];
  // const [ProductList, setProductList] = useState(listProductCode.listProductCode)
  const [ProductList, setProductList] = useState(productList);
  //---------------------------
  // axious project sellMobilePhone
  useEffect(() => {
    // cái này của cường nhé ae - header_search-input
    window.addEventListener("click", function (e) {
      let listLi = this.document.querySelectorAll(
        ".header_search-history-heading-text-list-item"
      );
      let check = false;
      for (let i = 0; i < listLi.length; i++) {
        if (listLi[i] == e.target) {
          check = true;
        }
      }
      if (!check) {
        document.querySelector(".header_search-input").value = "";
      } else {
      }
    });

    // const axiosrequest1 = axios.get('http://localhost:3150/user/fillter?idCategories=628c8b29e8654d960a5c8983');
    // const axiosrequest2 = axios.get('http://localhost:3150/user/fillter?idCategories=628c8b40e8654d960a5c898b');
    // // you could also use destructuring to have an array of responses
    // await axios.all([axiosrequest1, axiosrequest2]).then(axios.spread(function(res1, res2) {
    //   console.log(110,res1.data.listData);
    //   console.log(111,res2res.data.listData);
    //    // setDataDuy(res.data.product)
    //     // setShow(res.data.product.slice(0, 2))
    //     console.log(45, res.data.listData);
    //     const ListData = res.data.listProductCode.map((val) => {
    //       val.storage = Math.floor(Math.random() * 100);
    //       val.ram = val.ramRange[0];
    //       val.rom = val.romRange[0];
    //       return val;
    //     });
    //     // console.log(4556, ListData);
    //     setProductList(ListData);
    //     setDataFilter(ListData);
    // }));






    // let endpoints = [
    //   'http://localhost:3150/user/fillter?idCategories=628c8b29e8654d960a5c8983',
    //   'http://localhost:3150/user/fillter?idCategories=628c8b40e8654d960a5c898b',    

    // ];

    // axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    //   .then((res) => {
    //     // setDataDuy(res.data.product)
    //     // setShow(res.data.product.slice(0, 2))
    //     console.log(45, res.data.listData);
    //     const ListData = res.data.listProductCode.map((val) => {
    //       val.storage = Math.floor(Math.random() * 100);
    //       val.ram = val.ramRange[0];
    //       val.rom = val.romRange[0];
    //       return val;
    //     });
    //     // console.log(4556, ListData);
    //     setProductList(ListData);
    //     setDataFilter(ListData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });


    let URL1 = "http://localhost:3150/user/fillter?idCategories=628c8b29e8654d960a5c8983"
    let URL2 = "http://localhost:3150/user/fillter?idCategories=628c8b40e8654d960a5c898b"

    const promise1 = axios.get(URL1);
    const promise2 = axios.get(URL2);

    Promise.all([promise1, promise2]).then(function (values) {
      let a, b;
      [a, b] = values
      let dataProductCode = [...a.data.listProductCode, ...b.data.listProductCode]
      const ListData = dataProductCode.map((val) => {
        val.storage = Math.floor(Math.random() * 100);
        val.ram = val.ramRange[0];
        val.rom = val.romRange[0];

        return val;
      });
      setProductList(ListData);
      setDataFilter(ListData);

    });




    // axios
    //   .get(
    //     "http://localhost:3150/user/fillter?idCategories=628c8b29e8654d960a5c8983"
    //     // "http://localhost:3150//admin/productcode/list"
    //   )
    //   .then(function (res) {
    //     console.log(178,res.data.listProductCode)
    //     // setDataDuy(res.data.product)
    //     // setShow(res.data.product.slice(0, 2))
    //     // console.log(45, res.data.listData);
    //     const ListData = res.data.listProductCode.map((val) => {
    //       val.storage = Math.floor(Math.random() * 100);
    //       val.ram = val.ramRange[0];
    //       val.rom = val.romRange[0];

    //       return val;
    //     });
    //     console.log(4556, ListData);
    //     setProductList(ListData);
    //     setDataFilter(ListData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  const [dataProduct, setDataProduce] = useState(productCode);
  const [count, setCount] = useState(0);
  const [filter, setFilterProduct] = useState(filterProduct);
  function changeStateProduct(newData, i) {
    dataProduct[i].ProductList = newData;
    setDataProduce(dataProduct);
  }
  function changeFilterData(dataFilter) {
    setDataFilter(dataFilter);
  }
  // -------------------function biến đổi tiếng việt có dấu thành không dấu.
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

  const [name, setName] = useState("");
  function changedata(newdata) {
    setName(newdata);
  }
  const [data, setdata] = useState([]);
  const [showdata, setshowdata] = useState([]);
  const [brand, setbrand] = useState([]);
  const [sign, setsign] = useState(0);
  const [model, setmodel] = useState([]);
  const [listdt, setlistdt] = useState([]);
  const [Payment, SetPayment] = useState([]);
  const [ChangeCart, SetChangeCart] = useState(0);
  function ChangedataCart() {
    SetChangeCart(ChangeCart + 1);
  }
  function Change(newData) {
    SetPayment(newData);
  }
  function Store(newData) {
    setCount(newData);
  }

  function changesign() {
    setsign(sign + 1);
  }

  function changesign() {
    setsign(sign + 1);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            {dataFilter.map((val, i) => {
              return (
                <Route
                  path={`/product/filter/${RemoveAccents(val.productName)
                    .split(" ")
                    .join("")}`}
                  element={
                    <ProductChild
                      dataFilter={dataFilter}
                      chimuc={i}
                      dataval={ProductList}
                      changeStateProduct={changeStateProduct}
                    />
                  }
                />
              );
            })}


            //route search
            <Route
              path={`/product/filter/search`}
              element={
                <SearchProduct
                  referent="brand"
                  dataval={ProductList}
                  chimuc={'Iphone'}
                  filter={filter}
                  data={dataProduct}
                  changeFilterData={changeFilterData}
                />
              }
            />





            {/* route for filter brand */}
            {filterProduct.brand.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="brand"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            {/* route for filter giá */}
            {filterProduct.price.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="price"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            {/* route for filter loại điện thoại */}
            {filterProduct.productType.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="typePhone"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            {/* route for filter hiệu năng và pin */}
            {filterProduct.performanceProduct.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="performanceProduct"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            {/* route for filter ram */}
            {filterProduct.ram.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="ram"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            {/* route for filter bộ nhớ trong */}
            {filterProduct.rom.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="rom"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            {/* route for filter bộ nhớ cameraProduct */}
            {filterProduct.cameraProduct.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="cameraProduct"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            {/* route for filter special feature */}
            {filterProduct.specialFeatures.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="special"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            {/* route for filter design  */}
            {filterProduct.design.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="design"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            {/* route for filter panel */}
            {filterProduct.panel.map((val, i) => {
              return (
                <Route
                  path={`/product/filter`}
                  element={
                    <FilterProduct
                      referent="panel"
                      chimuc={val}
                      dataval={ProductList}
                      filter={filter}
                      data={dataProduct}
                      changeFilterData={changeFilterData}
                    />
                  }
                />
              );
            })}
            <Route path="*" element={<>Error</>} />
            <Route path="/" element={<Home1 />} />
            <Route path="/compunentes/home/Home" element={<Home1></Home1>} />
            <Route
              path="/admin/login"
              element={<Login changedata={changedata} />}
            />
            <Route path="/admin/home" element={<Home name={name} />} />
            <Route path="/admin/nhanvien" element={<Nhanvien name={name} />} />
            <Route path="/admin/Xacnhan" element={<Xacnhan name={name} />} />
            <Route
              path="/admin/Hoanthanh"
              element={<Hoanthanh name={name} />}
            />
            <Route path="/admin/Danggiao" element={<Danggiao></Danggiao>} />
            <Route
              path="/Cart"
              element={
                <Cart
                  ChangedataCart={ChangedataCart}
                  Store={Store}
                  Change={Change}
                />
              }
            />
            <Route path="/Comment" element={<Comment1 />} />
            <Route
              path="/admin/Chinhsua"
              element={
                <Cart
                  ChangedataCart={ChangedataCart}
                  Store={Store}
                  Change={Change}
                />
              }
            />
            <Route path="/Comment" element={<Comment1 />} />
            <Route path="/admin/Khohang" element={<Khohang name={name} />} />
            <Route path="/admin/Spmoi" element={<Spmoi name={name} />} />
            <Route
              path="/admin/Trenke"
              element={
                <Trenke
                  data={data}
                  brand={brand}
                  sign={sign}
                  changesign={changesign}
                  setdata={setdata}
                  showdata={showdata}
                  setshowdata={setshowdata}
                  name={name}
                />
              }
            />
            <Route path="/User/UserLogin" element={<UserLogin></UserLogin>} />
            <Route
              path="/User/UserSingIn"
              element={<UserSingIn></UserSingIn>}
            />
            <Route path="/User/UserPase" element={<UserPase></UserPase>} />
            <Route path="/User/order" element={<CreateOrder />} />
          </Routes>
          <ToastContainer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;