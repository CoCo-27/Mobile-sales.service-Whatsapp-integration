import React, { useEffect, useState } from 'react';
// import Header from "../Header/Header";
import Comment from './UserPage/Comment';
import Orders from './UserPage/Orders';
import Promotion from './UserPage/Promotion';
import Voucher from './UserPage/Voucher';
import Menu from './UserPage/Menu';
import { Link } from 'react-router-dom';

// import Comment from './UserPage/'
// COMMENT
import CapNhat from './UserPage/Comment/CapNhat';
import DanhGia from './UserPage/Comment/DanhGia';
import HoatDong from './UserPage/Comment/HoatDong';
import KhuyenMai from './UserPage/Comment/KhuyenMai';
import Vi from './UserPage/Comment/Vi';
// MY PAGE
import Bank from './UserPage/Mypage/Bank';
import From from './UserPage/Mypage/From';
import ResetPassword from './UserPage/Mypage/ResetPassword';
import MyPage from './UserPage/Mypage/MyPage';
// CSS
import './Userpage.css';
import './UserPage/CommentCss.css';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
// HEADER
import Header from '../compunentes/header/Header';
import { refreshToken } from '../refreshToken';
import { color } from '@mui/system';
import { Login } from '../redux/action/userAction';

function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function UserPase(props) {
    const dispatch = useDispatch()
    const [color,setColor]= useState(0)
    function newColor(){
        console.log(56, color);
        setColor(color+1)
    }
    const userInfo = useSelector(function (state) {
        return state.user;
    });

    const [user, setUser] = useState([]);
    useEffect(() => {
        async function getUserInfo() {
            let token = getCookie('user');
            let res = await axios.get('/user', {
                headers: {
                    Authorization: token,
                },
            });
            if(res.data.message === 'jwt expired'){
                await refreshToken()
                token = getCookie('user');
                res = await axios.get('/user', {
                    headers: {
                        Authorization: token,
                    },
                });
                
            }
            window.localStorage.setItem('user', JSON.stringify(res.data));
            let action = Login(res.data)
            dispatch(action)
            setUser(JSON.parse(localStorage.getItem('user')));
        }
        getUserInfo();
    }, [color]);

    function onof_comment() {
        document.querySelector('.comment').style.display = 'block';
        document.querySelector('.mypage').style.display = 'none';
        document.querySelector('.order').style.display = 'none';
        document.querySelector('.promotion').style.display = 'none';
        document.querySelector('.voucher').style.display = 'none';
    }
    function onof_mypage() {
        document.querySelector('.mypage').style.display = 'block';
        document.querySelector('.comment').style.display = 'none';
        document.querySelector('.order').style.display = 'none';
        document.querySelector('.promotion').style.display = 'none';
        document.querySelector('.voucher').style.display = 'none';
    }
    function onof_order() {
        document.querySelector('.order').style.display = 'block';
        document.querySelector('.mypage').style.display = 'none';
        document.querySelector('.comment').style.display = 'none';
        document.querySelector('.promotion').style.display = 'none';
        document.querySelector('.voucher').style.display = 'none';
    }
    function onof_promotion() {
        document.querySelector('.promotion').style.display = 'block';
        document.querySelector('.mypage').style.display = 'none';
        document.querySelector('.comment').style.display = 'none';
        document.querySelector('.order').style.display = 'none';
        document.querySelector('.voucher').style.display = 'none';
    }
    function onof_voucher() {
        document.querySelector('.voucher').style.display = 'block';
        document.querySelector('.mypage').style.display = 'none';
        document.querySelector('.comment').style.display = 'none';
        document.querySelector('.order').style.display = 'none';
        document.querySelector('.promotion').style.display = 'none';
    }
    // COMMENT
    function onof_capNhat() {
        document.querySelector('.capnhat').style.display = 'block';
        document.querySelector('.danhgia').style.display = 'none';
        document.querySelector('.hoatdong').style.display = 'none';
        document.querySelector('.khuyenmai').style.display = 'none';
        document.querySelector('.vi').style.display = 'none';
    }
    function onof_danhGia() {
        document.querySelector('.capnhat').style.display = 'none';
        document.querySelector('.danhgia').style.display = 'block';
        document.querySelector('.hoatdong').style.display = 'none';
        document.querySelector('.khuyenmai').style.display = 'none';
        document.querySelector('.vi').style.display = 'none';
    }
    function onof_hoatDong() {
        document.querySelector('.capnhat').style.display = 'none';
        document.querySelector('.danhgia').style.display = 'none';
        document.querySelector('.hoatdong').style.display = 'block';
        document.querySelector('.khuyenmai').style.display = 'none';
        document.querySelector('.vi').style.display = 'none';
    }
    function onof_khuyenMai() {
        document.querySelector('.capnhat').style.display = 'none';
        document.querySelector('.danhgia').style.display = 'none';
        document.querySelector('.hoatdong').style.display = 'none';
        document.querySelector('.khuyenmai').style.display = 'block';
        document.querySelector('.vi').style.display = 'none';
    }
    function onof_vi() {
        document.querySelector('.capnhat').style.display = 'none';
        document.querySelector('.danhgia').style.display = 'none';
        document.querySelector('.hoatdong').style.display = 'none';
        document.querySelector('.khuyenmai').style.display = 'none';
        document.querySelector('.vi').style.display = 'block';
    }
    function of_thongBao() {
        document.querySelector('.onof_thongBao').style.display = 'none';
    }
    function on_thongBao() {
        document.querySelector('.onof_thongBao').style.display = 'block';
    }
    // MY PAGE
    function onof_hoso() {
        document.querySelector('.hoso').style.display = 'block';
        document.querySelector('.bank').style.display = 'none';
        document.querySelector('.from').style.display = 'none';
        document.querySelector('.resetpassword').style.display = 'none';
    }
    function onof_bank() {
        document.querySelector('.hoso').style.display = 'none';
        document.querySelector('.bank').style.display = 'block';
        document.querySelector('.from').style.display = 'none';
        document.querySelector('.resetpassword').style.display = 'none';
    }
    function onof_from() {
        document.querySelector('.hoso').style.display = 'none';
        document.querySelector('.bank').style.display = 'none';
        document.querySelector('.from').style.display = 'block';
        document.querySelector('.resetpassword').style.display = 'none';
    }
    function onof_resetPassword() {
        document.querySelector('.hoso').style.display = 'none';
        document.querySelector('.bank').style.display = 'none';
        document.querySelector('.from').style.display = 'none';
        document.querySelector('.resetpassword').style.display = 'block';
    }
    function on_mypage() {
        document.querySelector('.onof_mypage').style.display = 'block';
    }
    function of_mypage() {
        document.querySelector('.onof_mypage').style.display = 'none';
    }
    return (
        <div>
            <Header></Header>
            <div className="userPage_">
                <div className="userPage_page">
                    <Menu
                        onof_comment={onof_comment}
                        onof_mypage={onof_mypage}
                        onof_order={onof_order}
                        onof_promotion={onof_promotion}
                        onof_voucher={onof_voucher}
                        // ==============THÔNG BÁO
                        onof_capNhat={onof_capNhat}
                        onof_danhGia={onof_danhGia}
                        onof_hoatDong={onof_hoatDong}
                        onof_khuyenMai={onof_khuyenMai}
                        onof_vi={onof_vi}
                        of_thongBao={of_thongBao}
                        on_thongBao={on_thongBao}
                        // =============== MY PAGE
                        onof_hoso={onof_hoso}
                        onof_bank={onof_bank}
                        onof_from={onof_from}
                        onof_resetPassword={onof_resetPassword}
                        on_mypage={on_mypage}
                        of_mypage={of_mypage}
                    ></Menu>
                </div>
                <div className="userPage_conter">
                    <div className="userPage_button">
                        <button onClick={onof_comment}>comment</button>
                        <button onClick={onof_mypage}>mypage</button>
                        <button onClick={onof_order}>order</button>
                        <button onClick={onof_promotion}>promotion</button>
                        <button onClick={onof_voucher}>voucher</button>
                    </div>
                    {/* bật tắt, chuyển trang phần PAGE */}
                    <div className="comment">
                        <Comment></Comment>
                    </div>
                    <div className="mypage">{/* <MyPage></MyPage> */}</div>
                    <div className="order">
                        <Orders  newColor={newColor} color={color}></Orders>
                    </div>
                    <div className="promotion">
                        <Promotion></Promotion>
                    </div>
                    <div className="voucher">
                        <Voucher></Voucher>
                    </div>
                    {/* bật tắt, chuyển trang phần THÔNG BÁO */}
                    <div className="onof_thongBao">
                        <div className="capnhat">
                            <CapNhat></CapNhat>
                        </div>
                        <div className="danhgia">
                            <DanhGia></DanhGia>
                        </div>
                        <div className="hoatdong">
                            <HoatDong></HoatDong>
                        </div>
                        <div className="khuyenmai">
                            <KhuyenMai></KhuyenMai>
                        </div>
                        <div className="vi">
                            <Vi></Vi>
                        </div>
                    </div>
                    {/* bật tắt, chuyển trang MYPAGE */}
                    <div className="onof_mypage">
                        <div className="hoso">
                            <MyPage user={user} newColor={newColor} color={color}></MyPage>
                        </div>
                        <div className="bank">
                            <Bank></Bank>
                        </div>
                        <div className="from">
                            <From></From>
                        </div>
                        <div className="resetpassword">
                            <ResetPassword></ResetPassword>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPase;
