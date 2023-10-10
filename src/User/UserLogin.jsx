import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/shopee.png';
import face from '../assets/images/logoFace.png';
import google from '../assets/images/logoGoogle.jpg';
import apple from '../assets/images/logoApple.png';
import qr from '../assets/images/qrtest2.png';
import logoShopee from '../assets/images/logoShopee2.jpeg';
import user from '../assets/images/user.png';
import axios from '../axios';
import Context from '../Conter/Context';
import './Userlogin.css';
import { useDispatch } from 'react-redux';
import { Login } from '../redux/action/userAction';
import '../../src/App.css';
import { postApi } from '../api/config';
import showPass2 from '../assets/images/showpass.png'
import showPass1 from '../assets/images/showpass2.png'
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

// ----------------------------------------------------------------------------------------------------
function UserLogin(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function submit() {
        let email = document.querySelector('.login_conter_modal_email').value;
        let password = document.querySelector('.login_conter_modal_password').value;
        if (email === ''||testEmail(email) ) {
            document.querySelector('.login_email_text').innerHTML = 'Vui lòng nhập Email';
        } else if (password === '' || testPassword(password)) {
            document.querySelector('.login_password_text').innerHTML = 'Vui lòng nhập Password';
        } else {
            console.log(38,email, password)
            let res = await postApi('/user/login', { email, password });
            
            if (res.data.status === 'undifind password') {
                alert(res.data.status);
            } else {
                setCookie('user', res.data.data.token, 30);
                const action = Login(res.data.data.userData);
                dispatch(action);
                navigate('/compunentes/home/Home');
            }
        }
    }
    // kiểm tra đầu vào Email
    function testEmail(email) {
        var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (mailformat.test(email)) {
            document.querySelector('.login_email_text').innerHTML = '';
        } else {
            document.querySelector('.login_email_text').innerHTML = 'Email không hợp lệ';
        }
    }
    // kiểm tra đầu vào password
    function testPassword(pass) {
        var arr = /^(?=.*[a-zA-Z0-9](?=.*\d)[A-Za-z0-9]{8,})$/;
        if (arr.test(pass) || pass.length < 8) {
            document.querySelector('.login_password_text').innerHTML = 'Mật khẩu phải có ít nhất 8 ký tự';
        } else {
            document.querySelector('.login_password_text').innerHTML = '';
        }
    }
    // ẩn hiện cảnh báo
    function clean_email() {
        document.querySelector('.login_email_text').innerHTML = '';
        document.querySelector('.login_phone_userName_text').innerHTML = '';

    }
    function clean_password() {
        document.querySelector('.login_password_text').innerHTML = '';
        document.querySelector('.login_phone_password_text').innerHTML = '';

    }
    function singIn_next() {
        navigate('/user/UserSingIn');
        document.querySelector('.ofcanva_modal_close').click();
    }
    function of_ofcanva_modal() {
        document.querySelector('.login_ofcanva_modal').style.display = 'none';
    }
    function on_home() {}
    // PHONE
    async function phone_login(){
        let email = document.querySelector('.login_phone_userName').value;
        let password = document.querySelector('.login_phone_password').value;
        if (email === '' || testEmail1(email)) {
            document.querySelector('.login_phone_userName_text').innerHTML = 'Vui lòng nhập Email';
        } else if (password === '' || testPassword1(password)) {
            document.querySelector('.login_phone_password_text').innerHTML = 'Vui lòng nhập Password';
        } else {
            let res = await axios.post('/user/login', { email, password });
            console.log(res.data);
            if (res.data.status === 'undifind password') {
                alert(res.data.status);
            } else {
                setCookie('user', res.data.data.token, 30);
                const action = Login(res.data.data.userData);
                dispatch(action);
                navigate('/compunentes/home/Home');
            }
        }
    }
       // kiểm tra đầu vào Email
       function testEmail1(email) {
        var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (mailformat.test(email)) {
            document.querySelector('.login_phone_userName_text').innerHTML = '';
        } else {
            document.querySelector('.login_phone_userName_text').innerHTML = 'Email không hợp lệ';
        }
    }
       // kiểm tra đầu vào password
       function testPassword1(pass) {
        var arr = /^(?=.*[a-zA-Z0-9](?=.*\d)[A-Za-z0-9]{8,})$/;
        if (arr.test(pass) || pass.length < 8) {
            document.querySelector('.login_phone_password_text').innerHTML = 'Mật khẩu phải có ít nhất 8 ký tự';
        } else {
            document.querySelector('.login_phone_password_text').innerHTML = '';
        }
    }
    // showpass
    function loginShowPass(){
        document.querySelector('.login_conter_modal_password').setAttribute("type",'text')
        document.querySelector('.login_password_show3').style.display = 'block'
        document.querySelector('.login_password_show1').style.display = 'none'
    }
    // no showpass
    function loginNoShowPass(){
        document.querySelector('.login_conter_modal_password').setAttribute("type",'password')
        document.querySelector('.login_password_show3').style.display = 'none'
        document.querySelector('.login_password_show1').style.display = 'block'
    }
    return (
        <>
            <div className="login_">
                <div className="login_header">
                    <Link to="/compunentes/home/Home" onClick={on_home}>
                        <img src={logo} alt="" className="login_header_img" style={{ width: 'auto' }} />
                    </Link>
                    <span className="login_header_text">Đăng nhập </span>
                    <a href="" className="login_header_help">
                        Bạn cần giúp đỡ ?
                    </a>
                </div>
                <div className="login_conter">
                    <div className="login_conter_modal">
                        <span className="login_conter_modal_headline">Đăng nhập</span>
                        <div className="login_conter_modal_QR">
                            <span>Đăng nhập với mã QR</span>
                        </div>
                        <div className="login_conter_modal_img_QR">
                            <img src={qr} alt="" />
                        </div>
                        <input
                            onClick={clean_email}
                            type="email"
                            placeholder="Email/Số điện thoại/Tên đăng nhập"
                            className="login_conter_modal_email"
                        />
                        <span className="login_email_text"></span>
                        <input
                            onClick={clean_password}
                            type="password"
                            placeholder="Mật khẩu"
                            className="login_conter_modal_password"
                        />
                        <span className="login_password_text"></span>
                        <img src={showPass2} alt="img" className='login_password_show1' onClick={loginShowPass} />
                        <img src={showPass1} alt="img" className='login_password_show3' onClick={loginNoShowPass} />

                        <button className="login_conter_modal_button" onClick={submit}>
                            ĐĂNG NHẬP
                        </button>
                        <div className="login_conter_modal_a">
                            <a href="">Quên mật khẩu</a>
                            <a href="" className="login_conter_modal_a2">
                                Đăng nhập với SMS
                            </a>
                        </div>
                        <span className="login_or">HOẶC</span>
                        <div className="login_conter_modal_buttonGrup">
                            <button>
                                <img src={face} alt="" /> Facebook
                            </button>
                            <button>
                                <img src={google} alt="" /> Google
                            </button>
                            <button>
                                <img src={apple} alt="" /> Apple
                            </button>
                        </div>
                        <div className="login_conter_modal_footer">
                            <span>Bạn mới biết đến Shopee ?</span>
                            <Link to="/User/UserSingIn">
                                <button>Đăng ký</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="login_ofcanva_modal" style={{ display: 'none' }}>
                    <p>Email hoặc password không đúng !</p>
                    <p> Vui lòng kiểm tra lại .</p>
                    <div className="login_singin">
                        <p>Bạn chưa có tài khoản ?</p>
                        <span>Nhấn nút Đăng ký để tạo mới tài khoản mới</span>
                        <button className="ofcanva_modal_singin" onClick={singIn_next}>
                            Đăng ký
                        </button>
                    </div>
                    <button className="ofcanva_modal_close_singin" onClick={of_ofcanva_modal}>
                        Close
                    </button>
                </div>
            </div>
            {/* giao diện điện thoại */}
            <div className="login_phone">
                <div className="login_phone_header">
                    <div>
                        <Link to="App">
                            <i className="fa-solid fa-arrow-left again"></i>
                        </Link>
                        <span>Login</span>
                    </div>
                    <a href="">Need help ?</a>
                </div>
                <div className="login_phone_conter">
                    <img src={logoShopee} alt="img" />
                    <input type="text" className="login_phone_userName" placeholder="Email\Phone\UserName" onClick={clean_email}/>
                    <span className='login_phone_userName_text'>user</span>
                    <div className="login_phone_password_">
                        <input type="text" className="login_phone_password" placeholder="Password" />
                        <a href="" className="login_phone_forgot">
                            Forgot ?
                        </a>
                    </div>
                    <span className='login_phone_password_text'>password</span>
                    <button className="login_phone_login" onClick={phone_login}>Login</button>
                    <div className="login_phone_a">
                        <Link to="/User/UserSingIn">Sign Up</Link>
                        <a href="" className="login_phone_a1">
                            Log In With Phone Number{' '}
                        </a>
                    </div>
                    <hr className="login_phone_hr"></hr>

                    <span className="login_phone_OR">OR</span>
                    <div className="login_phone_button_grup">
                        <button className="login_phone_button_face">
                            <img src={face} alt="" /> Continue with Facebook
                        </button>
                        <button className="login_phone_button_google">
                            <img src={google} alt="" />
                            Continue with Google
                        </button>
                        <button className="login_phone_button_apple">
                            <img src={apple} alt="" />
                            Continue with Apple
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLogin;
