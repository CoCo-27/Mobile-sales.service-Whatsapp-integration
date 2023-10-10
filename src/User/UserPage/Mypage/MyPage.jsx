import React, { useState } from "react";
import userlogo from "../../../assets/images/userlogo.jpg";
import "../../UserPage/MypageCss.css";
import { useSelector } from "react-redux";
import axios from "../../../axios";
import { CloseSquareFilled } from "@ant-design/icons";
import { render } from "@testing-library/react";
import { getUserCookie, refreshToken } from "../../../refreshToken"
function MyPage(props) {
  const userInfo = useSelector(function (state) {
    return state.user;
  });

  const [image, setImage] = useState("");

  // ảnh đại diện
  const avatr = userInfo.avatar
    ? process.env.REACT_APP_CLIENT_URL + userInfo.avatar
    : userlogo;

  // thay đổi ảnh đại diện
  function choosefile(fileinput) {
    const imager = document.querySelector(".input_file");
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imager.files[0]);
    fileReader.addEventListener("load", function () {
      setImage(this.result);
      document.querySelector(".chooseImage").setAttribute("src", this.result);
    });

    console.log(58,imager);
  }
  // đẩy dữ liệu đã thay đổi về sever
  async function saveUp() {
    try {
      console.log(123,)
      document.querySelector(".newPhone_text").style.display = "none";
      document.querySelector(".newAddress_text").style.display = "none";
      const form = document.querySelector(".myPageForm");
      const formData = new FormData(form);
      for(const pair of formData.entries()) {
        console.log(40,pair)
        console.log(43, pair[0], pair[1]);
      }
      let cookie = getUserCookie('user')

      let res = await axios.put(`/user`, formData, {
        headers: {
          'Authorization': cookie
        }
      });
      console.log(54, res);

      if(res.data.message === 'jwt expired'){
        await refreshToken()
        cookie = getUserCookie('user')
        res = await axios.put(`/user`, formData, {
          headers: {
            'Authorization': cookie
          }
        });
        console.log(61, res);
      }
      props.newColor()
    } catch (error) {
      console.log(error);
    }
  }
  // bật modal thay đổi số điện thoại
  function onof_newPhone() {
    document.querySelector(".NewPhone_modal").style.display = "block";
  }
  // bật modal thay đổi Địa chỉ
  function onof_newAddress() {
    document.querySelector(".newAddress_modal").style.display = "block";
  }
  // tắt modal thay đổi số điện thoại và email
  function of_modal() {
    document.querySelector(".newAddress_modal").style.display = "none";
    document.querySelector(".NewPhone_modal").style.display = "none";
  }
  // thay đổi Địa chỉ
  function update_address_form() {
    let newAddress = document.querySelector(".NewAddress").value;
    let address= userInfo.address;
    if (newAddress !== address) {
      document.querySelector(".newAddress_text").style.display = "block";
      document.querySelector(".newAddress_render").value = newAddress;
      document.querySelector(".close").click();
    } else if (newAddress === "" || newAddress === address) {
      document.querySelector(".newEmail_text").style.display = "none";
    }
  }
  // thay đổi phone
  function update_phone_form() {
    let newPhone = document.querySelector(".NewPhone").value;
    let phone = userInfo.phone;
    if (newPhone !== phone) {
      document.querySelector(".newPhone_text").style.display = "block";
      document.querySelector(".newPhone_render1").value = newPhone;
      document.querySelector(".close").click();
    } else if (newPhone === "" || newPhone === phone) {
      document.querySelector(".newPhone_text").style.display = "none";
    }
  }
  return (
    <div className="mypage_">
      <div className="mypage_header">
        <span>Hồ Sơ Của Tôi</span>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="mypage_conter">
        <div className="mypage_conter_user">
          {/* leght */}
          <div className="mypage_conter_user_leght">
      
            <span className="mypage_leght_name">Tên</span>
            <span className="mypage_leght_email">Email</span>
            <span className="mypage_leght_phone">Số Điện Thoại</span>
            <span className="mypage_leght_check">Giới Tính</span>
            <span className="mypage_leght_date">Địa Chỉ</span>
          </div>
          {/* right */}
          <form className="myPageForm" action="" encType="multipart/form-data">
            <div className="mypage_conter_user_right">
        
              <input
                type="text"
                className="mypage_right_name"
                defaultValue={userInfo.username}
                name="username"
               />
              <div className="mypage_right_email1">
                <span className="mypage_right_email">{userInfo.email}</span>
            </div>
            <div className="mypage_right_phone1">
              <span>{userInfo.phone}</span>
              <span className="thaydoi" onClick={onof_newPhone}>
                Thay Đổi
              </span>
              <div className="newPhone_text">
                <span>Số điện thoại mới : </span>
                <input type="text" name ='phone' className="newPhone_render1" style={{border:'none'}} />
              </div>
            </div>
            <div className="mypage_right_check">
              <input type="checkbox" name="" id="" />
              Nam
              <input type="checkbox" name="" id="" />
              Nữ
              <input type="checkbox" name="" id="" />
              Khác
            </div>
            <div className="mypage_right_address">
               <input type="text" defaultValue={userInfo.address} />
                <span onClick={onof_newAddress}> Thay Đổi</span>
            </div>
            <div className="newAddress_text">
                <span>Địa chỉ mới : </span>
                <input className="newAddress_render" name='address'></input>
              </div>
             {/* chọn  đại diện */}
            <div className="mypage_conter_imager">
              <div className="mypage_conter_imager_wrap">
                <img src={image ? image : avatr} alt="" className="chooseImage" />
              </div>
              <input
                type="file"
                name="avatar"
                className="input_file"
                id="imagerFile"
                accept="image/gif, image/jpg, image/pdg"
                onChange={choosefile}
              />              
              <p>Dung lượng file tối đa 1 MB </p>
              <span>Định dạng: .JPEG, .PNG</span>
            </div>
            <button className="mypage_right_update" type="button" onClick={saveUp}>
              Lưu
            </button>
            </div>
          </form>
        </div>
      </div>
      {/* modal Address*/}
      <div className="newAddress_modal" style={{display:'none'}}>
        <span>Nhập địa chỉ</span>
        <input type="text" name="" className="NewAddress" />
        <button className="update" onClick={update_address_form}>
          Lưu
        </button>
        <button className="close" onClick={of_modal}>
          Close
        </button>
      </div>
             {/* modal Phone*/}
             <div className="NewPhone_modal">
                <span>Nhập Số điện thoại mới</span>
                <input type="number"  className="NewPhone" />
                <button className="update" onClick={update_phone_form}>
                 Lưu
               </button>
               <button className="close" onClick={of_modal}>
                Close
               </button>
             </div>
    </div>
  );
}

export default MyPage;
