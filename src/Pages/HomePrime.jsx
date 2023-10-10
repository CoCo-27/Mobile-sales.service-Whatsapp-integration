import React, { useEffect, useState } from 'react'
import '../App.css'
import '../asset/css/base.css'
import '../asset/css/main.css'
import '../asset/css/grid.css'
import '../asset/css/responsive.css'
import { useNavigate } from 'react-router-dom'
// import freeShip from '../asset/img/free-ship.jpg'
let trig = 0;
let index;
let index2;
let checka = 0;
function Homeprime(props) {
    // let newUpdate = props.data
    let newUpdateCart = props.dataCart
    let newUpdate = JSON.parse(JSON.stringify(props.data));



    function changeCart(i) {
        checka = checka + (props.data[i].gia * props.data[i].SL)

        if (checka > props.wallet) {
            alert('Không đủ tiền thanh toán, Hãy nạp thêm tiền để mua thêm !!!!')
            checka = checka - (props.data[i].gia * props.data[i].SL)
            return;
        }
        //check trùng
        if (props.dataCart.length === 0) {
            newUpdate[i].soLuong = newUpdate[i].soLuong - 1;
            if (newUpdate[i].soLuong === 0) {
                newUpdate.splice(i, 1)
                props.changeState(newUpdate)
            }
            props.changeState(newUpdate)
            props.changeCart(newUpdate[i])

        } else {
            for (let j = 0; j < props.dataCart.length; j++) {
                if (props.data[i].ten === props.dataCart[j].ten) {
                    props.dataCart[j].SL = props.dataCart[j].SL + 1;
                    props.changeState(newUpdate)
                    newUpdate[i].soLuong = newUpdate[i].soLuong - 1;
                    if (newUpdate[i].soLuong === 0) {
                        newUpdate.splice(i, 1)
                        props.changeState(newUpdate)
                    }

                    break;
                } if (j === (props.dataCart.length - 1)) {
                    newUpdate[i].soLuong = newUpdate[i].soLuong - 1;
                    if (newUpdate[i].soLuong === 0) {
                        newUpdate.splice(i, 1)
                        props.changeState(newUpdate)
                    }
                    props.changeState(newUpdate)
                    props.changeCart(newUpdate[i])
                }
            }
        }
        // props.changeState(newUpdate)

        props.up()

        // newUpdate[i].select = true;

    }
    //delete
    function deleteItem(i) {
        newUpdate.splice(i, 1)
        props.changeState(newUpdate)
        props.up()
    }

    function modify(i) {
        index = i;
        document.querySelector('#modiname').value = newUpdate[i].ten
        document.querySelector('#modigia').value = newUpdate[i].gia
        document.querySelector('#modisoluong').value = newUpdate[i].soLuong
    }
    function confirm() {
        newUpdate[index].ten = document.querySelector('#modiname').value
        newUpdate[index].gia = document.querySelector('#modigia').value
        newUpdate[index].soLuong = document.querySelector('#modisoluong').value
        props.changeState(newUpdate)
        props.up()
    }
    function add() {
        let ten = document.querySelector('#modiname').value
        let gia = document.querySelector('#modigia').value
        let soLuong = document.querySelector('#modisoluong').value
        props.changeState([...newUpdate, { ten, gia, soLuong }])
        props.up()
    }
    function topup() {
        var money = document.querySelector('#topup').value * 1
        props.changeWallet(money)
    }
    function deleteCart(i) {
        newUpdateCart.splice(i, 1)
        props.changeCart2(newUpdateCart)
        props.up()
    }
    function modifyCart(i) {
        index2 = i;
        document.querySelector('#modinameCart').value = newUpdateCart[i].ten
        document.querySelector('#modigiaCart').value = newUpdateCart[i].gia
        document.querySelector('#modisoluongCart').value = newUpdateCart[i].soLuong
    }
    function confirmCart() {
        newUpdateCart[index2].ten = document.querySelector('#modinameCart').value
        newUpdateCart[index2].gia = document.querySelector('#modigiaCart').value
        newUpdateCart[index2].soLuong = document.querySelector('#modisoluongCart').value
        props.changeCart2(newUpdateCart)
        props.up()
    }
    let navigate = useNavigate();
    function movePage(i) {
        navigate(`/${i}`)
    }

    // -------------------------------------function conver  vietnamese to   english type
    function removeAccents(str) {
        var AccentsMap = [
            "aàảãáạăằẳẵắặâầẩẫấậ",
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
            "dđ", "DĐ",
            "eèẻẽéẹêềểễếệ",
            "EÈẺẼÉẸÊỀỂỄẾỆ",
            "iìỉĩíị",
            "IÌỈĨÍỊ",
            "oòỏõóọôồổỗốộơờởỡớợ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
            "uùủũúụưừửữứự",
            "UÙỦŨÚỤƯỪỬỮỨỰ",
            "yỳỷỹýỵ",
            "YỲỶỸÝỴ"
        ];
        for (var i = 0; i < AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
    }



    function filterPages(i, key, e) {
        console.log(e.target.value)
        let link = window.location.href.replace('http://localhost:3000', '')
        if (!link.includes('?')) {
            link += `/filter?${key}=${i.split(' ').join('')}`
        } else {

            link += `&${key}=${i}`


        }
        navigate(link)

        // if(i.startsWith('từ')){
        //     navigate(`?filter=${i}`)
        // }else{

        //     navigate(`/${i.replace(/\s/g, '')}`)
        // }
    }
    const myJSON = JSON.parse(JSON.stringify(props.data));
    const [stateSort, setStateSort] = useState(myJSON)
    const [count,setCount] = useState(trig)
    

    function sortNewst(e) {
        e.target.classList.toggle('btn--primary')
        console.log(1111)
        myJSON.sort((a, b) => {
            return new Date(a.date_sale).getTime() - new Date(b.date_sale).getTime()
        })
        if (trig === 0) {
            
            console.log(2222)
            setStateSort(myJSON)
            setCount(trig+1)
            trig++
        } else {
            console.log(3333)
            setStateSort(props.data)
            trig = 0;
            setCount(trig-1)
        }

    }


    return (
        <div>

            {/* <!-- phần body--> */}
            <div class="app__container">
                {/* <!-- phần container items --> */}
                <div class="grid wide">
                    <div class="row sm-gutter app__content">
                        

                        <div class="col l-12 m-12 c-12">
                            <div class="home-filter hide-on-moble-tablet">

                                <span class="home-filter__label">Sắp xếp theo</span>
                                <button class="home-filter_btn btn">Phổ biến</button>
                                <button class="home-filter_btn btn " onClick={(e) => { sortNewst(e) }}>Mới nhất</button>
                                <button class="home-filter_btn btn">Bán chạy</button>

                                <div class="select-input">
                                    <span class="select-input__label">Giá</span>
                                    <i class="home-filter-select-icon fas fa-chevron-down">
                                    </i>
                                    {/* <!-- List option sort  --> */}
                                    <ul class="select-input__list">
                                        <li class="select-input__item">
                                            <a class="select-input__link">Giá : Thấp đến cao</a>
                                        </li>
                                        <li class="select-input__item">
                                            <a class="select-input__link">Giá : Cao đến thấp</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="home-filter__page">
                                    <span class="home-filter__page-num">
                                        <span class="home-filter__page-current">1</span>/14
                                    </span>
                                    <div class="home-filter__page-control">
                                        <a class="home-filter__page-btn home-filter__page-btn--disable">
                                            <i class="home-filter__page-icon fas fa-chevron-left"></i>
                                        </a>
                                        <a class="home-filter__page-btn">
                                            <i class="home-filter__page-icon fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- apply mobile--> */}
                            <nav class="mobile-category">
                                <ul class="mobile-category__list">
                                    <li class="mobile-category__item">
                                        <a class="mobile-category__link">
                                            Dụng cụ & Thiết bị tiện ích cho bếp Mẹ nấu
                                        </a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a class="mobile-category__link">
                                            Giặt giũ & Chăm sóc nhà cửa
                                        </a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a class="mobile-category__link">
                                            Dụng cụ nhà bếp
                                        </a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a class="mobile-category__link">
                                            Dụng cụ & Thiết bị tiện ích
                                        </a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a class="mobile-category__link">
                                            Dụng cụ nhà bếp
                                        </a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a class="mobile-category__link">
                                            Giặt giũ & Chăm sóc nhà cửa
                                        </a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a class="mobile-category__link">
                                            Dụng cụ & Thiết bị tiện ích
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            {/* <!-- home product --> */}
                            <div class="home-product">
                                <div class="row sm-gutter">

                                    {/* <!-- product item --> */}

                                    {stateSort.map((val, i) => {
                                        return (<div class="col l-2-4 m-4 c-6">
                                            <button onClick={() => { movePage(i) }} class="home-product-item">

                                                <div class="home-product-item__img" style={{ backgroundImage: `url(${val.productPic[0]}) ` }}></div>
                                                <h4 class="home-product-item__name">{val.ProductName}</h4>
                                                <div class="home-product-item__price">
                                                    <span class="home-product-item__price-old">{val.price.toLocaleString()} đ</span>
                                                    <span class="home-product-item__price-curr">{(val.price * (100 - (Number.parseFloat(val.Sale))) / 100).toLocaleString()}<sup> đ</sup></span>
                                                </div>
                                                <div class="home-product-item__action">
                                                    <span class="home-product-item__like home-product-item__like--liked">
                                                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                        <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                    </span>
                                                    {/* <span class="free-shipping">
                                                        <img src={freeShip} alt="" />
                                                    </span> */}
                                                    <div class="home-product-item__rating">
                                                        <i class="home-product-item__star--rate far fa-star"></i>
                                                        <i class="home-product-item__star--rate far fa-star"></i>
                                                        <i class="home-product-item__star--rate far fa-star"></i>
                                                        <i class="home-product-item__star--rate far fa-star"></i>
                                                        <i class=" far fa-star"></i>
                                                    </div>
                                                    <div class="home-product-item_sold">Đã bán {val.countSold}</div>
                                                </div>
                                                <div class="home-product-item__origin">
                                                    <span class="home-product-item__brand">{val.productType}</span>
                                                    <span class="home-product-item__origin-name">{val.Category}</span>
                                                </div>
                                                <div class="home-product-item__favourite">
                                                    <i class="fas fa-check"></i>
                                                    <span>Yêu thích</span>
                                                </div>
                                                <div class="home-product-item__sale-off">
                                                    <span class="home-product-item__sale-off-percent">{val.Sale}</span>
                                                    <span class="home-product-item__sale-off-label">GIẢM</span>
                                                </div>
                                            </button>
                                        </div>
                                        )
                                    })}



                                    <div class="col l-2-4 m-4 c-6">
                                    </div>
                                </div>
                            </div>

                            {/* <!-- thanh đánh trang --> */}
                            <ul class="pagination home-product-pagination">
                                <li class="pagination-item">
                                    <a class="pagination-item__link">
                                        <i class="pagination-item__icon fas fa-chevron-left"></i>
                                    </a>
                                </li>
                                <li class="pagination-item pagination-item--active">
                                    <a class="pagination-item__link">1</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">2</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">3</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">4</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">5</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">...</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">14</a>
                                </li>
                                <li class="pagination-item">
                                    <a class="pagination-item__link">
                                        <i class="pagination-item__icon fas fa-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <h1>Gian Hàng</h1>

            {props.data.map((val, i) => {
                return (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{val.ProductName}</td>
                        <td><img class='image-product' src={val.Img} alt="" /></td>
                        <td class='sale-product'>{val.Sale}</td>
                        {/* <td>{val.select ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-x"></i>}</td> */}
                        <td>{val.gia * val.soLuong}</td>
                        <td><button onClick={() => { changeCart(i) }}>add cart</button></td>
                        <td><button onClick={() => { deleteItem(i) }}>xóa</button></td>
                        <td><button onClick={() => { modify(i) }}>sửa</button></td>
                    </tr>
                )
            })}


            <tr id="tfootadd">
                <td colSpan="9"><button onClick={add} id="tfootadd_button">+</button></td>
            </tr>
            <tr >
                <td colSpan="9"><div className="wrap-modify">
                    <input id="modiname" placeholder="Name goods" type="text" />
                    <input id="modigia" placeholder="Giá hàng" type="number" />
                    <input id="modisoluong" placeholder="Số lượng" type="number" />
                    {/* <input id="modithanhtien" placeholder="" type="text" />
              <input id="modichosed" placeholder="" type="text" /> */}
                </div>
                </td>
            </tr>
            <tr id="tfootconfirm">
                <td colSpan="9"><button onClick={confirm}>confirm</button></td>
            </tr>


            {/* giỏ hàng */}
            <div className="budget gioHang">Ngân sách: <b>{props.wallet}</b>  <button onClick={topup}>Nạp tiền </button><input id="topup" type="number" /></div>
            <div className=""><i className="fa-solid fa-cart-arrow-down"></i></div>
            <div className="">Giỏ hàng</div>
            <table id="gioHang" className="" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>NAME</th>
                        <th>GIÁ</th>
                        <th>SỐ LƯỢNG</th>
                        {/* <th>STATUS</th> */}
                        <th>THÀNH TIỀN</th>
                        {/* <th>CHOSED</th> */}
                        <th>DELETE</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
                <tbody>

                    {props.dataCart.map((val, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{val.ten}</td>
                                <td>{val.gia}</td>
                                <td>{val.SL}</td>
                                {/* <td>{val.select ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-x"></i>}</td> */}
                                <td>{val.gia * val.SL}</td>
                                {/* <td><button  >add cart</button></td> */}
                                <td><button onClick={() => { deleteCart(i) }}>xóa</button></td>
                                <td><button onClick={() => { modifyCart(i) }}>sửa</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr id="tfootadd">
                        <td colSpan="4">tổng tiền</td>
                        <td id="tfoottopup">
                            {
                                props.dataCart.reduce((as, val) => {
                                    let a = val.gia * val.SL
                                    return as + a;
                                }, 0)
                            }
                        </td>
                        <td colSpan="3"></td>
                    </tr>
                    <tr >
                        <td colSpan="9"><div className="wrap-modify">
                            <input id="modinameCart" placeholder="Name goods" type="text" />
                            <input id="modigiaCart" placeholder="Giá hàng" type="text" />
                            <input id="modisoluongCart" placeholder="Số lượng" type="text" />
                        </div>
                        </td>
                    </tr>
                    <tr id="tfootconfirm">
                        <td colSpan="9"><button onClick={confirmCart}>confirm</button></td>
                    </tr>
                    <tr id="tfootthanhtoan">
                        <td colSpan="9"><button >Thanh Toán</button></td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

export default Homeprime