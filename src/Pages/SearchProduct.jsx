import React, { useEffect, useState } from "react";
import "../App.css";
import "../asset/css/base.css";
import "../asset/css/main.css";
import "../asset/css/grid.css";
import "../asset/css/responsive.css";

import { useNavigate, useSearchParams } from "react-router-dom";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import Header from "../compunentes/header/Header";
import Footer from "../compunentes/footer/Footer";
import axios from "../axios";

let trig = 0;
let trig1 = 0;
let trig2 = 0;
let trig3 = 0;
let trig4 = 0;
let trig5 = 0;
let commonButton;
let newstButton;
let salestButton;
function SearchProduct(props) {
  console.log(20, props.dataval.length);
  let getLocattion = window.location.href.replace('http://localhost:3000/product/filter/search?','')
  console.log(26,getLocattion)
  const [trig, setTrig] = useState('')
  const [resetPage, setResetPage] = useState(props.dataval);
  useEffect(() => {
    // axios.get(`http://localhost:3150/user/fillter?productName=${getLocattion}`)
    axios.get(`http://localhost:3150/user/fillter?productName=${getLocattion}`)
      .then(function(res){
        console.log(58,res)
        setResetPage([...res.data.listProductCode]);
      })
      .catch((error)=>{
        console.log(error)
      })




    // setResetPage([...props.dataval]);
  }, [getLocattion]);
  //giữ lại các chõ đã choose khi load lại trang.
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    let searchBrand = searchParams.get("brand");
    let searchPrice = searchParams.get("price");
    let searchTypePhone = searchParams.get("productType");
    let searchPerfomance = searchParams.get("performanceProduct");
    let searchRam = searchParams.get("ram");
    let searchRom = searchParams.get("rom");
    let searchCamera = searchParams.get("cameraProduct");
    let searchFearture = searchParams.get("specialFeatures");
    let searchDesign = searchParams.get("design");
    let searchPanel = searchParams.get("panel");
    let arrSearchFiterItem = [
      searchBrand,
      searchPrice,
      searchTypePhone,
      searchPerfomance,
      searchRam,
      searchRom,
      searchCamera,
      searchFearture,
      searchDesign,
      searchPanel,
    ];
    for (let i = 0; i < arrSearchFiterItem.length; i++) {
      if (arrSearchFiterItem[i]) {
        let listBrand = arrSearchFiterItem[i].split(",");
        listBrand.map((brand) => {
          document
            .querySelector(`.category-item-detail[index="${brand}"]`)
            .classList.add("myStyle");
        });
      }
    }
  }, []);
  // -------------------function biến đổi tiếng việt có dấu thành không dấu.
  function removeAccents(str) {
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
  let navigate = useNavigate();
  function movePage(i, val) {
    console.log(79, val);
    navigate(`/product/filter/${i}`);
    // navigate(`/product/filter?id=${val._id}`)
  }
  function filterPages(i, key, e) {
    e.target.classList.toggle("myStyle");
    let link = window.location.href.replace("http://localhost:3000", "");
    if (!link.includes("?")) {
      link += `?${key}=${i.split(" ").join("")}`;
    } else {
      const checkLink = link.split("?")[1].split("&");
      if (link.includes(`${key}=`)) {
        const listKey = checkLink.map((value) => {
          const keyItem = value.split("=")[0];
          if (
            key === keyItem &&
            !value.split("%20").join("").includes(i.split(" ").join(""))
          ) {
            value += `,${i.split(" ").join("")}`;
          } else if (
            key === keyItem &&
            value.split("%20").join("").includes(i.split(" ").join(""))
          ) {
            if (value.includes(`,${i}`) || value.includes(`,`)) {
              let a = value
                .split("%20")
                .join("")
                .replace(`,${i.split(" ").join("")}`, ``);
              value = a;
              let b = value
                .split("%20")
                .join("")
                .replace(`${i.split(" ").join("")},`, ``);
              value = b;
            } else {
              return 0;
            }
          }
          return value;
        });
        if (listKey[0] === 0) {
          link = "/product/filter";
        } else {
          link = "/product/filter?" + listKey.join("&");
          let l = link.replace("&0", "");
          link = l;
        }
      } else {
        link += `&${key}=${i.split(" ").join("")}`;
      }
    }
    navigate(link);
  }
  //---------------------------------------------------------phân tích và lọc  diomain để tạo ra trường lọc object với các giá trị được choose
  let a1 = window.location.href.replace(
    "http://localhost:3000/product/filter/search?",
    ""
  );
  let examine = window.location.href.replace(
    "http://localhost:3000/product/filter/search?",
    ""
  );
  if (examine === "") {
    var a3 = [
      {
        brand: [
          "Iphone",
          "Samsung",
          "Oppo",
          "Vivo",
          "Xiaomi",
          "Realmi",
          "Nokia",
          "Itel",
          "masstel",
        ],
      },
    ];
  } else {
    // let a2 = a1.split("&");
    // var a3 = a2.map((val, i) => {
    //   let a4 = val.split("=");
    //   let a6 = a4[0];
    //   a4.shift();
    //   let a7 = a4[0].split(",");
    //   let a5 = { [a6]: a7 };
    //   return a5;
    // });
    var a3 =[{ brand: [
      "Iphone",
      "Samsung",
      "Oppo",
      "Vivo",
      "Xiaomi",
      "Realmi",
      "Nokia",
      "Itel",
      "masstel",
    ]}]
  }
  //----------------------------------------------------function xử lí lọc qua chỉ mục truyền vào các chỉ mục lọc và lọc trong data những dữ liệu thỏa mãn dk
  function handleDataFollowFiler(data, ref) {
    let containerFilter = [];
    for (var item of ref) {
      var keyprime;
      for (let key in item) {
        keyprime = key;
      }
      let temp = item[Object.keys(item)[0]];

      temp.forEach((val, i) => {
        let newArray = data.filter((vallll) => {
          let param1 = removeAccents(vallll[keyprime]);
          let param2 = val;
          return param1.split(" ").join("") === param2;
        });
        containerFilter.push(...newArray);
      });
    }
    const uniqueSet = new Set(containerFilter);
    const backToArray = [...uniqueSet];
    return backToArray;
  }
  useEffect(() => {
    newstButton = document.querySelector(".newestButton");
    salestButton = document.querySelector(".salestButton");
    commonButton = document.querySelector(".commonButton");
    commonButton.classList.add("btn--primary");
  }, []);
  // ---------------------------------------------------xử lí sau khi lọc xong thì  sort lại. trình tự là lọc xong các chỉ mục và đối chiếu sang sort
  // var myJSON = JSON.parse(JSON.stringify(handleDataFollowFiler(props.dataval, a3))); //sao chép
  var myJSON = JSON.parse(JSON.stringify(handleDataFollowFiler(resetPage, a3))); //sao chép
  console.log(229,resetPage,a3)
  console.log(168, myJSON);
  myJSON.sort((a, b) => {
    return a.storage - b.storage; // tạm thời sort theo storage vì chưa có trường PHỔ BIẾN
  });
  //-----------------------------------------------------check xem nút ở bên sort có đc on hay không để thay đổi dữ liệu render theo đúng tính chất
  useEffect(() => {
    if (newstButton.classList.contains("btn--primary")) {
      myJSON.sort((a, b) => {
        return (
          new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
        );
      });
    }
    if (salestButton.classList.contains("btn--primary")) {
      myJSON.sort((a, b) => {
        return b.countSold - a.countSold;
      });
    }
  }, [window.location.href]);
  //--------------------------------------- sử dụng useState và useEffect để lắng nghe thay đổi phía đường dẫn rồi từ đó render lại theo trường đc sort
  const [stateSort, setStateSort] = useState(myJSON);
  useEffect(() => {
    setStateSort([...myJSON]);
  }, [window.location.href, myJSON.length]);
  // if(props.dataval.length>4 ){
  //     console.log(1234)
  // }
  function removeClass(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains("btn--primary")) {
        arr[i].classList.remove("btn--primary");
      }
    }
  }
  const [count, setCount] = useState(trig);
  function sortNewst(e) {
    removeClass([salestButton, commonButton]);
    e.target.classList.add("btn--primary");

    myJSON.sort((a, b) => {
      return (
        new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
      );
    });
    setStateSort([...myJSON]);
    setCount(trig + 1);
    trig1++;
  }
  function sortBestSale(e) {
    removeClass([newstButton, commonButton]);

    e.target.classList.add("btn--primary");
    myJSON.sort((a, b) => {
      return b.countSold - a.countSold;
    });
    setStateSort([...myJSON]);
    setCount(trig + 1);
    trig2++;
  }
  function sortCommon(e) {
    removeClass([newstButton, salestButton]);
    e.target.classList.add("btn--primary");
    myJSON.sort((a, b) => {
      return a.storage - b.storage;
    });
    setStateSort([...myJSON]);
    setCount(trig + 1);
    trig3++;
  }
  function sortIncressePrice(e) {
    document.querySelector(".select-input__label").innerHTML =
      "Giá:    Thấp đến cao";
    document
      .querySelector(".select-input__label")
      .classList.add("select-input__label-change-color");
    myJSON.sort((a, b) => {
      return a.price - b.price;
    });
    setStateSort([...myJSON]);
    setCount(trig + 1);
    trig4++;
  }
  function sortDicreasePrice(e) {
    document.querySelector(".select-input__label").innerHTML =
      "Giá:    Cao đến thấp";
    document
      .querySelector(".select-input__label")
      .classList.add("select-input__label-change-color");
    myJSON.sort((a, b) => {
      return b.price - a.price;
    });
    setStateSort([...myJSON]);
    setCount(trig + 1);
    trig5++;
  }
  return (
    <div>
      <Header></Header>
      {/* <!-- phần body--> */}
      <div className="app__container">
        {/* <!-- phần container items --> */}
        <div className="grid wide">
          <div className="row sm-gutter app__content">
            <div style = {{display:'none'}} className="col1 l-2 m-0 c-12">
              <nav className="category">
                <h4 className="category__heading">
                  <i className="category__heading-icon fa-solid fa-filter"></i>
                  BỘ LỌC TÌM KIẾM
                  <div className="title-filter"></div>
                </h4>
                <ul className="category-list">
                  {/* category-item--active */}
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter">BRAND</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.brand.map((val, i) => {
                          return (
                            <button
                              key={val}
                              onClick={(e) => {
                                filterPages(removeAccents(val), "brand", e);
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter">GIÁ</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.price.map((val, i) => {
                          return (
                            <button
                              key={val}
                              onClick={(e) => {
                                filterPages(
                                  removeAccents(val),
                                  "priceReferent",
                                  e
                                );
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter">LOẠI ĐIỆN THOẠI</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.productType.map((val, i) => {
                          return (
                            <button
                              key={val}
                              onClick={(e) => {
                                filterPages(
                                  removeAccents(val),
                                  "productType",
                                  e
                                );
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter">HIỆU NĂNG & PIN</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.performanceProduct.map((val, i) => {
                          return (
                            <button
                              key={val}
                              onClick={(e) => {
                                filterPages(
                                  removeAccents(val),
                                  "performanceProduct",
                                  e
                                );
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter">RAM</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.ram.map((val, i) => {
                          return (
                            <button
                              onClick={(e) => {
                                filterPages(removeAccents(val), "ram", e);
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter">BỘ NHỚ TRONG</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.rom.map((val, i) => {
                          return (
                            <button
                              key={val}
                              onClick={(e) => {
                                filterPages(removeAccents(val), "rom", e);
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter"> CAMERA</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.cameraProduct.map((val, i) => {
                          return (
                            <button
                              key={val}
                              onClick={(e) => {
                                filterPages(
                                  removeAccents(val),
                                  "cameraProduct",
                                  e
                                );
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter"> TÍNH NĂNG ĐẶC BIỆT</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.specialFeatures.map((val, i) => {
                          return (
                            <button
                              key={val}
                              onClick={(e) => {
                                filterPages(
                                  removeAccents(val),
                                  "specialFeatures",
                                  e
                                );
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter">THIẾT KẾ</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.design.map((val, i) => {
                          return (
                            <button
                              key={val}
                              onClick={(e) => {
                                filterPages(removeAccents(val), "design", e);
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                  <li className="category-item ">
                    <div className="category-item_link">
                      <div className="title-filter"> MÀN HÌNH</div>
                      <div className="category-item-detail-wrap">
                        {props.filter.panel.map((val, i) => {
                          return (
                            <button
                              key={val}
                              onClick={(e) => {
                                filterPages(removeAccents(val), "panel", e);
                              }}
                              className="category-item-detail"
                              index={val}
                            >
                              {val}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col1 l-10 m-12 c-12">
              <div className="home-filter hide-on-moble-tablet">
                <span className="home-filter__label">Sắp xếp theo</span>
                <button
                  className="home-filter_btn btn commonButton"
                  onClick={(e) => {
                    sortCommon(e);
                  }}
                >
                  Phổ biến
                </button>
                <button
                  className="home-filter_btn btn newestButton"
                  onClick={(e) => {
                    sortNewst(e);
                  }}
                >
                  Mới nhất
                </button>
                <button
                  className="home-filter_btn btn salestButton"
                  onClick={(e) => {
                    sortBestSale(e);
                  }}
                >
                  Bán chạy
                </button>

                <div className="select-input">
                  <button className="select-input__label">Giá</button>
                  <i className="home-filter-select-icon fas fa-chevron-down"></i>
                  {/* <!-- List option sort  --> */}
                  <ul className="select-input__list">
                    <li className="select-input__item">
                      <button
                        className="select-input__link IncressePrice"
                        onClick={(e) => {
                          sortIncressePrice(e);
                        }}
                      >
                        Giá : Thấp đến cao
                      </button>
                    </li>
                    <li className="select-input__item">
                      <button
                        className="select-input__link DicreasePrice"
                        onClick={(e) => {
                          sortDicreasePrice(e);
                        }}
                      >
                        Giá : Cao đến thấp
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="home-filter__page">
                  <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/14
                  </span>
                  <div className="home-filter__page-control">
                    <a className="home-filter__page-btn home-filter__page-btn--disable">
                      <i className="home-filter__page-icon fas fa-chevron-left"></i>
                    </a>
                    <a className="home-filter__page-btn">
                      <i className="home-filter__page-icon fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- home product --> */}
              <div className="home-product">
                <div className="row sm-gutter">
                  {/* <!-- product item --> */}

                  {stateSort.map((val, i) => {
                    {
                      props.changeFilterData(stateSort);
                    }
                    {
                      /* {props.dataval.map((val, i) => { */
                    }

                    return (
                      <div className="col1 l-2-4 mg-4 c-12">
                        <button
                          onClick={() => {
                            movePage(
                              removeAccents(val.productName)
                                .split(" ")
                                .join(""),
                              val
                            );
                          }}
                          className="home-product-item"
                        >
                          <div>
                            <img
                              className="home-product-item__img"
                              src={`http://localhost:3150${val.thumNail}`}
                              alt=""
                            />
                          </div>
                          <h4 className="home-product-item__name">
                            {val.productName}
                          </h4>
                          <div className="home-product-item__price">
                            <div className="home-product-item__price-wrap">
                              <span className="home-product-item__price-old">
                                {val.price.toLocaleString()} đ
                              </span>
                              <span className="home-product-item__price-curr">
                                {(
                                  (val.price *
                                    (100 - Number.parseFloat(val.Sale))) /
                                  100
                                ).toLocaleString()}
                                <sup> đ</sup>
                              </span>
                            </div>
                            <div className="home-product-item__sale-off">
                              <span className="home-product-item__sale-off-percent">
                                -{val.Sale}
                              </span>
                              <span className="home-product-item__sale-off-label">
                                GIẢM
                              </span>
                            </div>
                          </div>
                          <div className="home-product-item__action">
                            {/* icon heart like */}
                            {/* <span className="home-product-item__like home-product-item__like--liked">
                                                        <i className="home-product-item__like-icon-empty far fa-heart"></i>
                                                        <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                                                    </span> */}
                            <div className="home-product-item__rating">
                              <i className="home-product-item__star--rate far fa-star"></i>
                              <i className="home-product-item__star--rate far fa-star"></i>
                              <i className="home-product-item__star--rate far fa-star"></i>
                              <i className="home-product-item__star--rate far fa-star"></i>
                              <i className=" far fa-star"></i>
                            </div>
                            <div className="home-product-item_sold">
                              Đã bán {val.countSold}
                            </div>
                          </div>
                          {/* <div className="home-product-item__origin">
                                                    <span className="home-product-item__brand">{val.productType}</span>
                                                    <span className="home-product-item__origin-name">{val.createDate}</span>
                                                </div> */}
                          {/* vị trí đặt tape yêu thích góc card */}
                          {/* <div className="home-product-item__favourite">
                                                    <i className="fas fa-check"></i>
                                                    <span>Yêu thích</span>
                                                </div> */}

                          {/* information details */}
                          <div className="home-product-item-information-detail-wrap">
                            <ul className="home-product-item-information-detail">
                              {/* <li><span>{val.panel}</span></li> */}
                              <li>
                                <span>{val.performanceProduct}</span>
                              </li>
                              <li>
                                <span>{val.cameraProduct}</span>
                              </li>
                            </ul>
                          </div>
                        </button>
                      </div>
                    );
                  })}

                  <div className="col1 l-2-4 m-4 c-6"></div>
                </div>
              </div>

              {/* <!-- thanh đánh trang --> */}
              <ul className="pagination home-product-pagination">
                <li className="pagination-item">
                  <a className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-chevron-left"></i>
                  </a>
                </li>
                <li className="pagination-item pagination-item--active">
                  <a className="pagination-item__link">1</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">2</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">3</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">4</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">5</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">...</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">14</a>
                </li>
                <li className="pagination-item">
                  <a className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default SearchProduct;
