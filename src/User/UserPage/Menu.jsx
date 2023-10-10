import React, { useState } from 'react';
import user from '../../assets/images/user.png';
import order from '../../assets/images/orders.png';
import comment from '../../assets/images/comment.png';
import voucher from '../../assets/images/voucher.png';
import userlogo from '../../assets/images/userlogo.jpg';
import { useSelector } from 'react-redux';
import './MenuCss.css';
import { Link, useNavigate } from 'react-router-dom';

function Menu(props) {
    const navigate = useNavigate();
    const userInfo = useSelector(function (state) {
        return state.user;
    });
    const userName = userInfo.username ? userInfo.username : 'hello';
    const imager = userInfo.avatar
    ? process.env.REACT_APP_CLIENT_URL + userInfo.avatar
    : userlogo;

    function onof_mypage() {
        // navigate()
        props.onof_hoso();
        props.on_mypage();
        props.of_thongBao();
        props.onof_mypage();
        document.querySelector('.menu_comment_list').style.display = 'none';
        document.querySelector('.menu_mypage_list').style.display = 'block';
    }
    function onof_orders() {
        props.of_mypage();
        props.of_thongBao();
        props.onof_order();
        document.querySelector('.menu_comment_list').style.display = 'none';
        document.querySelector('.menu_mypage_list').style.display = 'none';
    }
    function onof_comment() {
        props.of_mypage();
        props.onof_comment();
        props.on_thongBao();
        document.querySelector('.menu_comment_list').style.display = 'block';
        document.querySelector('.menu_mypage_list').style.display = 'none';
    }
    function onof_voucher() {
        props.of_mypage();
        props.of_thongBao();
        props.onof_voucher();
        document.querySelector('.menu_comment_list').style.display = 'none';
        document.querySelector('.menu_mypage_list').style.display = 'none';
    }
    // THÔNG BÁO
    function menu_capNhat() {
    // navigate('/User/UserPage/Comment/CapNhat');

        props.onof_capNhat();
    }
    function menu_khuyenMai() {
        props.onof_khuyenMai();
    }
    function menu_vi() {
        props.onof_vi();
    }
    function menu_hoatDong() {
        props.onof_hoatDong();
    }
    function menu_danhGia() {
        props.onof_danhGia();
    }
    // TÀI KHOẢN CỦA TÔI
    function menu_mypage() {
        props.onof_hoso();
    }
    function menu_bank() {
        props.onof_bank();
    }
    function menu_from() {
        props.onof_from();
    }
    function menu_resetpassword() {
        props.onof_resetPassword();
    }
    return (
        <div className="menu_">
            <div className="menu_header">
                <img src={imager}alt="img" />
                <span>{userName}</span>
                <button onClick={onof_mypage}>
                    <i className="fa-solid fa-pen"></i>Sửa Hồ Sơ
                </button>
            </div>
            <div className="menu_mypage">
                <img src={user} alt="" />
                <button onClick={onof_mypage}>Tài Khoản Của Tôi</button>
                <div className="menu_mypage_list">
                    <p onClick={menu_mypage}>Hồ Sơ</p>
                    <p onClick={menu_bank}>Ngân Hàng</p>
                    {/* <p onClick={menu_from}>Địa Chỉ</p> */}
                    <p onClick={menu_from}></p>
                    <p onClick={menu_resetpassword}>Đổi Mật Khẩu</p>
                </div>
            </div>
            <div className="menu_orders">
                <img src={order} alt="" />
                <button onClick={onof_orders}>Đơn Mua</button>
            </div>
            <div className="menu_comment">
                <img src={comment} alt="" />
                <button onClick={onof_comment}>Thông Báo</button>
                <div className="menu_comment_list">
                    <p onClick={menu_capNhat}>Cập Nhật Đơn Hàng</p>                   
                    <p onClick={menu_khuyenMai}>Khuyến Mãi</p>
                    <p onClick={menu_vi}>Cập Nhật Ví</p>
                    <p onClick={menu_hoatDong}>Hoạt Động</p>
                    <p onClick={menu_danhGia}>Cập Nhật Đánh Giá</p>
                </div>
            </div>
            <div className="menu_voucher">
                <img src={voucher} alt="" />
                <button onClick={onof_voucher}>Kho Voucher</button>
            </div>
        </div>
    );
}

export default Menu;
