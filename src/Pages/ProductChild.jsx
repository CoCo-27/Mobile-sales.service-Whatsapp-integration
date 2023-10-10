import React, { useEffect, useState } from 'react'
import '../App.css'
import '../asset/css/base-productChild.css'
import Header from '../compunentes/header/Header';
import Footer from '../compunentes/footer/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getApi, patchApi } from '../api/config';
import { useNavigate } from 'react-router-dom';
let countproduct = 1;
function ProductChild(props) {
  let arrayOrigin = props.dataFilter[props.chimuc].products;
  const [dem, setDem] = useState(0);
  const [count, setCount] = useState(countproduct);
  const [countStorage, setCountStorage] = useState(arrayOrigin[0].storage);
  const [priceProduct, setPriceProduct] = useState(arrayOrigin[0].price);
  // ram products
  let arrayOriginRam = [
    ...new Set(
      arrayOrigin.map((val) => {
        return val.ram;
      })
    ),
  ];
  // rom products]
  let arrayOriginRom = [
    ...new Set(
      arrayOrigin.map((val) => {
        return val.rom;
      })
    ),
  ];
  const [filterRom, setFilterRom] = useState(arrayOriginRom);

  // color product
  let arrayOriginColor = [
    ...new Set(
      arrayOrigin.map((val) => {
        return val.color;
      })
    ),
  ];
  const [filterColor, setFilterColor] = useState(arrayOriginColor);
  // img product
  let arrayOriginImg = [];
  for (let i = 0; i < arrayOrigin.length; i++) {
    for (let j = 0; j < arrayOrigin[i].productPic.length; j++) {
      arrayOriginImg.push(arrayOrigin[i].productPic[j]);
    }
  }
  arrayOriginImg = [...new Set(arrayOriginImg)];

  const [currentIMG, setCurrentIMG] = useState(arrayOriginImg[0]);
  useEffect(() => {
    document.querySelector("#products-ram").classList.add("onButton");
    document.querySelector("#products-rom").classList.add("onButton");
    document.querySelector("#products-color").classList.add("onButton");
  }, []);
  useEffect(() => {
    let queryRam = document.querySelectorAll("#products-ram");
    for (let i = 0; i < queryRam.length; i++) {
      if (queryRam[i].classList.contains("onButton")) {
        let valueRam = queryRam[i].innerHTML;
        arrayOriginRom = [
          ...new Set(
            arrayOrigin
              .filter((val) => {
                return val.ram === valueRam;
              })
              .map((value) => {
                return value.rom;
              })
          ),
        ];
        arrayOriginColor = [
          ...new Set(
            arrayOrigin
              .filter((val) => {
                return val.ram === valueRam;
              })
              .map((value) => {
                return value.color;
              })
          ),
        ];
        setFilterRom(arrayOriginRom);
        setFilterColor(arrayOriginColor);
      }
    }
  }, [dem]);

  function increaseCount() {
    setCount(count + 1);
    setCountStorage(countStorage - 1);
  }
  function reduceCount() {
    setCount(count - 1);
    setCountStorage(countStorage + 1);
  }
  function checkExistClass(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains("onButton")) {
        return arr[i];
      }
    }
  }
  function changePriceViaRam(e) {
    let listProductRam = document.querySelectorAll("#products-ram");
    setDem(dem + 1);
    for (let i = 0; i < listProductRam.length; i++) {
      listProductRam[i].classList.remove("onButton");
    }
    e.target.classList.add("onButton");
    let listProductRom = document.querySelectorAll("#products-rom");
    let listProductColor = document.querySelectorAll("#products-color");
    let valueOfFieldRam = checkExistClass(listProductRam).innerHTML;
    let valueOfFieldRom = checkExistClass(listProductRom).innerHTML;
    let valueOfFieldColor = checkExistClass(listProductColor).innerHTML;
    let destinyPrice = arrayOrigin.filter((val, i) => {
      return (
        val.ram === valueOfFieldRam &&
        val.rom === valueOfFieldRom &&
        val.color === valueOfFieldColor
      );
    });
    setPriceProduct(destinyPrice[0].price);
  }
  function changePriceViaRom(e) {
    let listProductRom = document.querySelectorAll("#products-rom");
    for (let i = 0; i < listProductRom.length; i++) {
      listProductRom[i].classList.remove("onButton");
    }
    e.target.classList.add("onButton");
    let listProductRam = document.querySelectorAll("#products-ram");
    let listProductColor = document.querySelectorAll("#products-color");
    let valueOfFieldRam = checkExistClass(listProductRam).innerHTML;
    let valueOfFieldRom = checkExistClass(listProductRom).innerHTML;
    let valueOfFieldColor = checkExistClass(listProductColor).innerHTML;
    let destinyPrice = arrayOrigin.filter((val, i) => {
      return (
        val.ram === valueOfFieldRam &&
        val.rom === valueOfFieldRom &&
        val.color === valueOfFieldColor
      );
    });
    setPriceProduct(destinyPrice[0].price);
  }
  function changePriceViaColor(e) {
    let listProductColor = document.querySelectorAll("#products-color");
    for (let i = 0; i < listProductColor.length; i++) {
      listProductColor[i].classList.remove("onButton");
    }
    e.target.classList.add("onButton");
    let listProductRom = document.querySelectorAll("#products-rom");
    let listProductRam = document.querySelectorAll("#products-ram");
    let valueOfFieldRam = checkExistClass(listProductRam).innerHTML;
    let valueOfFieldRom = checkExistClass(listProductRom).innerHTML;
    let valueOfFieldColor = checkExistClass(listProductColor).innerHTML;
    let destinyPrice = arrayOrigin.filter((val, i) => {
      return (
        val.ram === valueOfFieldRam &&
        val.rom === valueOfFieldRom &&
        val.color === valueOfFieldColor
      );
    });
    setPriceProduct(destinyPrice[0].price);
  }
  function changeImageDetail(index) {
    setCurrentIMG(arrayOriginImg[index]);
  }

  const [quatityCart, setQuatityCart] = useState(0)
  async function sendCart (){
    let countProduct = document.querySelector('.number-plus-subtract').innerHTML*1
    // console.log(153,countProduct*1)
    // console.log(123,props.dataFilter )
    // console.log(152,props.dataFilter[props.chimuc])
    let ram = document.getElementsByClassName('onButton')[0].innerHTML
    let rom = document.getElementsByClassName('onButton')[1].innerHTML
    let color = document.getElementsByClassName('onButton')[2].innerHTML
    let productCart = props.dataFilter[props.chimuc].products.filter((val)=>{
      console.log(161, ram, rom , color)
      return val.color ===color && val.ram ===ram && val.rom === rom;
    })[0]._id
    // console.log(163,productCart)
    // const userid = useSelector(function(state){return state.user})
    // console.log(165,userid)
    try {
      await patchApi('http://localhost:3150/user/carts/',{
        quantity: countProduct,
        idProduct:productCart
      })
      alert('Đã thêm vào giỏ hàng')
      const res = await getApi("http://localhost:3150/user/carts")
      // console.log(193 ,res.data.listCartsUser[0].listProduct.length)    
      // console.log(194 ,res)    
      setQuatityCart(res.data.listCartsUser[0].listProduct.length)

    } catch (error) {
      console.log(error)
    }
  }
  const navigate = useNavigate()
  async function sendCart2 (){
    let countProduct = document.querySelector('.number-plus-subtract').innerHTML*1
    // console.log(153,countProduct*1)
    // console.log(123,props.dataFilter )
    // console.log(152,props.dataFilter[props.chimuc])
    let ram = document.getElementsByClassName('onButton')[0].innerHTML
    let rom = document.getElementsByClassName('onButton')[1].innerHTML
    let color = document.getElementsByClassName('onButton')[2].innerHTML
    let productCart = props.dataFilter[props.chimuc].products.filter((val)=>{
      // console.log(161, ram, rom , color)
      return val.color ===color && val.ram ===ram && val.rom === rom;
    })[0]._id
    // console.log(163,productCart)
    // const userid = useSelector(function(state){return state.user})
    // console.log(165,userid)
    try {
      await patchApi('http://localhost:3150/user/carts/',{
        quantity: countProduct,
        idProduct:productCart
      })
      // alert('Đã thêm vào giỏ hàng')
      const res = await getApi("http://localhost:3150/user/carts")
      // console.log(193 ,res)    
      setQuatityCart(res.data[0].listProduct.length)
      navigate("/Cart");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    {/*  */}
      <Header quatityCart = {quatityCart}></Header>
      <div class="container">
        <div class="product-detail-wrap">
          <div class="image-wrap">
            <div class="image-primary">
              <img src={`http://localhost:3150${currentIMG}`} alt=""></img>
            </div>
            <div class="range-img">
              {arrayOriginImg.map((val, index) => {
                return (
                  <img
                    id="image-products"
                    onMouseEnter={() => {
                      changeImageDetail(index);
                    }}
                    src={`http://localhost:3150${val}`}
                    alt=""
                  ></img>
                );
              })}
            </div>
          </div>
          <div class="content-right-wrap">
            <div class="title-wrap">
              <div class="icon"></div>
              <h1>{props.dataFilter[props.chimuc].productName}</h1>
            </div>
            <div className="product-ram">
              {arrayOriginRam.map((val, index) => {
                return (
                  <button
                    id="products-ram"
                    onClick={(e) => {
                      changePriceViaRam(e);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <div className="product-rom">
              {filterRom.map((val, index) => {
                return (
                  <button
                    id="products-rom"
                    onClick={(e) => {
                      changePriceViaRom(e);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <div className="product-color">
              {filterColor.map((val, index) => {
                return (
                  <button
                    id="products-color"
                    onClick={(e) => {
                      changePriceViaColor(e);
                    }}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <div class="evaluate-wrap">
              {/* <div class="star-evaluate"> 5sao</div>
              <div class="number-comment">5090 đánh giá</div> */}
              <div class="sold">
                {" "}
                Đã bán: {props.dataFilter[props.chimuc].countSold}
              </div>
            </div>
            <div class="price-wrap-productChild">
              <div className="price-wrap-newPrice">
                <div class="price">
                  <h1>{priceProduct.toLocaleString()}</h1>
                </div>
                <div class="discount">
                  -{props.dataFilter[props.chimuc].Sale}
                </div>
              </div>
              <div class="new-price">
                <h1>
                  {(
                    (priceProduct *
                      (100 -
                        props.dataFilter[props.chimuc].Sale.replace("%", "") *
                          1)) /
                    100
                  ).toLocaleString()}
                </h1>
              </div>
            </div>
            {/* <div class="product-color-wrap">
              <div class="product-color-tittle">Màu sắc:</div>
              <div class="product-color-wrap-child-color">
                <div class="product-color">xanh</div>
                <div class="product-color">đỏ</div> 
                <div class="product-color">tím</div>
              </div>
            </div> */}
            <div class="count-buy-wrap">
              <div class="count-buy-wrap-title">Số lượng : </div>
              <div class="plus-subtract">
                <button
                  class="subtract button-choose-quatity-product"
                  onClick={() => {
                    reduceCount();
                  }}
                >
                  -
                </button>
                <div class="number-plus-subtract">{count}</div>
                <button
                  class="plus button-choose-quatity-product"
                  onClick={() => {
                    increaseCount();
                  }}
                >
                  +
                </button>
              </div>
              <div class="available-product">
                {countStorage} sản phẩm có sẵn
              </div>
            </div>
            <div class="add-to-cart-wrap">
              <button
                class=" add-to-cart button-add-cart"
                onClick={() => {
                  sendCart();
                }}
              >
                thêm vào giỏ hàng
              </button>
              <button  onClick={() => {
                  sendCart2();
                }} class="buy-now button-add-cart">mua ngay</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ProductChild;
