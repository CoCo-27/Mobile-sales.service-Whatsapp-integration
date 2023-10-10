import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/shopee.png";
import face from "../assets/images/logoFace.png";
import google from "../assets/images/logoGoogle.jpg";
import apple from "../assets/images/logoApple.png";
import Context from "../Conter/Context";
import { useContext } from "react";
import logoShopee from "../assets/images/logoShopee2.jpeg";
import axios from "../axios";
import "./Usersingin.css";
import showPass2 from "../assets/images/showpass.png";
import showPass1 from "../assets/images/showpass2.png";
import { postApi } from "../api/config";

function UserSingIn(props) {
  const navigate = useNavigate();
  async function userSingin_next() {
    const email = document.querySelector(".singin_conter_modal_email").value;
    const password = document.querySelector(".singin_conter_modal_password").value;
    const againpassword = document.querySelector(".singin_conter_modal_againpassword").value;
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( email==='') {
      document.querySelector(".singin_mail_text").innerHTML ="Vui lòng nhập email";
    }else if(!mailformat.test(email)){
      document.querySelector(".singin_mail_text").innerHTML ="email không hợp lệ";
    }else if(password===''){
      document.querySelector(".singin_password_text").innerHTML ="Vui lòng nhập mật khẩu"
    }else if(password.length<8){
      document.querySelector(".singin_password_text").innerHTML = "Mật khẩu phải có ít nhất 8 ký tự"
    }else if(againpassword === "" || password !== againpassword){
      document.querySelector(".singin_again_text").innerHTML = "Mật khẩu không khớp"
    }else{ 
      const res = await postApi("/user/register", { password, email })
      if(res.data){
        alert(res.data.message + '.  '+' check gmail to comple register !')
      } else{
        alert(res.response.data.status)
      }
    }
  
    
  }

  // kiểm tra đầu vào password laptop
  function testPassword(pass) {
    var arr = /^(?=.*[a-zA-Z0-9](?=.*\d)[A-Za-z0-9]{8,})$/;
    if (arr.test(pass) || pass.length < 8) {
      document.querySelector(".singin_password_text").innerHTML =
        "Mật khẩu phải có ít nhất 8 ký tự";
    } else {
      document.querySelector(".singin_password_text").innerHTML = "";
    }
  }
  // kiểm tra đầu vào password phone
  function testPasswordPhone(pass) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var arr = /^(?=.*[a-zA-Z0-9](?=.*\d)[A-Za-z0-9]{8,})$/;
    if (arr.test(pass) || pass.length < 8) {
      document.querySelector(".singin_phone_conter_password_text").innerHTML =
        "Mật khẩu phải có ít nhất 8 ký tự";
    } else {
      document.querySelector(".singin_phone_conter_password_text").innerHTML =
        "";
    }
  }
  // kiểm tra đầu vào Email laptop
  function testEmail(email) {
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email===''){
      document.querySelector(".singin_mail_text").innerHTML = "Vui lòng nhập email";
    } if (!mailformat.test(email)) {
        document.querySelector(".singin_mail_text").innerHTML = "Email không hợp lệ";
      } else {
        document.querySelector(".singin_mail_text").innerHTML =
          "";
      }  
  }
  // kiểm tra đầu vào Email phone
  function testEmailPhone(email) {
   var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (mailformat.test(email)) {
      document.querySelector(".singin_phone_conter_name_text").innerHTML = "";
    } else {
      document.querySelector(".singin_phone_conter_name_text").innerHTML =
        "Email không hợp lệ";
    }
  }
  // reset input email
  function reset_email() {
    document.querySelector(".singin_mail_text").innerHTML = "";
    document.querySelector(".singin_conter_modal_email").value = "";
  }
function reset_password(){
  document.querySelector('.singin_password_text').innerHTML=''
}
  // reset input againpass
  function reset_againpass() {
    document.querySelector(".singin_again_text").innerHTML = "";
  }
  // bật tắt modal thông báo
  function of_ofcanva_modal() {
    document.querySelector(".singIn_ofcanva_modal").style.display = "none";
    document.querySelector(".singin_").style.background = "#f94f30";
    document.querySelector(".login_header").style.display = "block";
    document.querySelector(".login_conter").style.display = "block";
    document.querySelector(".singin_conter_modal").style.display = "block";
    document.querySelector(".singIn_ofcanva_modal1").style.display = "none";
    document.querySelector(".login_phone_header").style.display = "block";
    document.querySelector(".singin_phone_conter").style.display = "block";
  }
  // chuyển đến trang LOGIN
  function login_next() {
    navigate("/user/UserLogin");
    document.querySelector(".ofcanva_modal_close").click();
  }
  // phone
  function singUp_phone() {
    let email1 = document.querySelector(".singin_phone_userName").value;
    let password1 = document.querySelector(".singin_phone_password").value;
    let password11 = document.querySelector(".singin_phone_password1").value;
    console.log(password11, email1, password1);
    if (email1 === "" || testEmailPhone(email1)) {
      document.querySelector(".singin_phone_conter_name_text").innerHTML =
        "Vui lòng nhập email";
    } else if (password1 === "" || testPasswordPhone(password1)) {
      document.querySelector(".singin_phone_conter_password_text").innerHTML =
        "Vui lòng nhập mật khẩu";
    } else if (password11 === "" || password1 !== password11) {
      document.querySelector(".singin_phone_conter_password1_text").innerHTML =
        "Mật khẩu không khớp";
    } else {
      // const res = await axios.post('/user/register', { password, email });

      document.querySelector(".singIn_ofcanva_modal1").style.display = "block";
      // document.querySelector('.singIn_phone').style.display = 'none';
      document.querySelector(".login_phone_header").style.display = "none";
      document.querySelector(".singin_phone_conter").style.display = "none";
    }
  }
  function reset_nameText() {
    document.querySelector(".singin_phone_conter_name_text").innerHTML = "";
  }
  function reset_passwordText() {
    document.querySelector(".singin_phone_conter_password_text").innerHTML = "";
  }
  function reset_password1Text() {
    document.querySelector(".singin_phone_conter_password1_text").innerHTML =
      "";
  }
  // showpass
  function showPass() {
    document
      .querySelector(".singin_conter_modal_password")
      .setAttribute("type", "text");
    document.querySelector(".singin_password_show3").style.display = "block";
    document.querySelector(".singin_password_show1").style.display = "none";
  }
  function showPass_() {
    document
      .querySelector(".singin_conter_modal_againpassword")
      .setAttribute("type", "text");
    document.querySelector(".singin_password_show2").style.display = "none";
    document.querySelector(".singin_password_show4").style.display = "block";
  }
  // not showopass
  function NoShowPass() {
    document
      .querySelector(".singin_conter_modal_password")
      .setAttribute("type", "password");
    document.querySelector(".singin_password_show3").style.display = "none";
    document.querySelector(".singin_password_show1").style.display = "block";
  }
  function NoShowPass_() {
    document
      .querySelector(".singin_conter_modal_againpassword")
      .setAttribute("type", "password");
    document.querySelector(".singin_password_show2").style.display = "block";
    document.querySelector(".singin_password_show4").style.display = "none";
  }
  return (
    <>
      <div className="singin_">
        <div className="login_header">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="login_header_img"
              style={{ width: "auto" }}
            />
          </Link>
          <span className="login_header_text">Đăng ký </span>
          <a href="" className="login_header_help">
            Bạn cần giúp đỡ ?
          </a>
        </div>
        <div className="login_conter">
          <div className="singin_conter_modal">
            <span className="login_conter_modal_headline">Đăng ký</span>
            <input
              onClick={reset_email}
              type="email"
              placeholder="Email"
              className="singin_conter_modal_email"
            />
            <span className="singin_mail_text"></span>
            <input
              onClick={reset_password}
              type="password"
              placeholder="Mật khẩu"
              className="singin_conter_modal_password"
            />
            <span className="singin_password_text"></span>
            <img
              src={showPass2}
              alt="img"
              className="singin_password_show1"
              onClick={showPass}
            />
            <img
              src={showPass1}
              alt="img"
              className="singin_password_show3"
              onClick={NoShowPass}
            />
            <input
              onClick={reset_againpass}
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="singin_conter_modal_againpassword"
            />
            <span className="singin_again_text"></span>
            <img
              src={showPass2}
              alt="img"
              className="singin_password_show2"
              onClick={showPass_}
            />
            <img
              src={showPass1}
              alt="img"
              className="singin_password_show4"
              onClick={NoShowPass_}
            />

            <button
              className="singin_conter_modal_next"
              onClick={userSingin_next}
            >
              ĐĂNG KÝ
            </button>
            <span className="singin_conter_modal_or">HOẶC</span>
            <div className="singin_conter_modal_buttonGrup">
              <button>
                <img src={face} alt="" /> Facebook
              </button>
              <button>
                <img src={google} alt="" /> Google
              </button>
            </div>
            <p>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</p>
            <div className="singin_conter_modal_text">
              <a href="">Điều khoản dịch vụ</a>&
              <a href="">Chính sách bảo mật </a>
            </div>
            <div className="singin_modal_footer">
              <span>Bạn đã có tài khoản?</span>
              <Link to="/user/UserLogin">
                <button>Đăng nhập</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="singIn_ofcanva_modal" style={{ display: "none" }}>
          <p>Đăng ký tài khoản thành công !</p>
          <p>Đến trang đăng nhập để đăng nhập tài khoản</p>
          <Link to="/user/UserLogin">
            <button className="ofcanva_loginRouter">Đăng Nhập</button>
          </Link>
          <button className="ofcanva_modal_close" onClick={of_ofcanva_modal}>
            Close
          </button>
        </div>
      </div>
      {/* phone */}
      <div className="singIn_phone">
        <div className="login_phone_header">
          <div>
            <Link to="App">
              <i className="fa-solid fa-arrow-left again"></i>
            </Link>
            <span>Sign Up</span>
          </div>
          <a href="">Need help ?</a>
        </div>
        <div className="singin_phone_conter">
          <input
            type="text"
            className="singin_phone_userName"
            placeholder="Email\Phone\UserName"
            onClick={reset_nameText}
          />
          <span className="singin_phone_conter_name_text">a</span>
          <input
            type="text"
            className="singin_phone_password"
            placeholder=" Password"
            onClick={reset_passwordText}
          />
          <span className="singin_phone_conter_password_text">b</span>
          <input
            type="text"
            className="singin_phone_password1"
            placeholder="Enter the Password"
            onClick={reset_password1Text}
          />
          <span className="singin_phone_conter_password1_text">c</span>
          <button className="singin_phone_singin" onClick={singUp_phone}>
            Sing Up
          </button>
          <hr className="singin_phone_hr"></hr>
          <span className="singin_phone_OR">OR</span>
          <div className="singin_phone_button_grup">
            <button className="singin_phone_button_face">
              <img src={face} alt="" /> Continue with Facebook
            </button>
            <button className="singin_phone_button_google">
              <img src={google} alt="" />
              Continue with Google
            </button>
            <button className="singin_phone_button_apple">
              <img src={apple} alt="" />
              Continue with Apple
            </button>
          </div>
        </div>
        <div className="singIn_ofcanva_modal1" style={{ display: "none" }}>
          <p>Vui lòng check email, xác nhận tài khoản !</p>
          <button className="ofcanva_modal_close" onClick={of_ofcanva_modal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSingIn;
