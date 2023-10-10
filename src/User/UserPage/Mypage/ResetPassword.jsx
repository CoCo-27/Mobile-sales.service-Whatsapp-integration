import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axios';

import { refreshToken } from '../../../refreshToken';
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

function ResetPassword() {
    const navigate = useNavigate()
    // update new password
    async function updatePassword() {
        let password = document.querySelector('.password_last').value.trim();
        let newPassword = document.querySelector('.password_new').value.trim();
        let newPassword1 = document.querySelector('.password_newagain').value.trim();
        console.log(password, newPassword, newPassword1);
        if(password===''){
            document.querySelector('.right_password_last_text').innerHTML='Vui lòng nhập password'
        }else if(newPassword===''){
            document.querySelector('.right_password_new_text').innerHTML='Vui lòng nhập password mới'
        }else if(newPassword.length <8){
            document.querySelector('.right_password_new_text').innerHTML='NewPassword phải chứa ít nhất 8 ký tự'
        }else if(newPassword !==newPassword1 ){
            document.querySelector('.right_password_newagain_text').innerHTML='password mới không khớp'
        }else{
            try {
                let a = await axios.patch("http://localhost:3150/user/changePassword", {
                    password, newPassword, 
                }, {
                    headers: {
                        Authorization: getCookie('user')
                    }
                })
                console.log(a.data);
                if(a.data === 'change password success'){
                    navigate('/user/userlogin')
                }
                if(a.data.message === 'jwt expired'){
                    await refreshToken()
                    a = await axios.patch("http://localhost:3150/user/changePassword", {
                    password, newPassword, 
                    }, {
                        headers: {
                            Authorization: getCookie('user')
                        }
                    })
                    console.log(a.data);
                    if(a.data === 'change password success'){
                    
                        navigate('/user/userlogin')
                    }
    
                }
                
            } catch (error) {
                console.log(error);
                alert(error.request.status+':'+'password không đúng')
            }
           
            //  console.log(password, newPassword, newPassword1);
        }
       
    }
    // test password.length
    function tesNewPasseord(password){
      if(password.length<8){
        document.querySelector('.right_password_new_text').innerHTML='NewPassword phải chứa ít nhất 8 ký tự'
    }
    }
    // reset input last password
    function reset_password(){
        document.querySelector('.right_password_last_text').innerHTML=''
    }
    // reset input new password
    function reset_newpassword(){
        document.querySelector('.right_password_new_text').innerHTML=''
    }
    //  reset input new password1
    function reset_newpassword1(){
        document.querySelector('.right_password_newagain_text').innerHTML=''
    }
    return (
        <div>
            <div className="resetPassword_">
                <div className="resetPassword_header">
                    <span>Thay Đổi Mật Khẩu</span>
                </div>
                <div className="resetPassword_conter">
                    <div className="resetPassword_left">
                        <span className="password_last_text">Mật khẩu cũ</span>
                        <span className="password_new_text">Mật khẩu mới</span>
                        <span className="password_newagain_text">Nhập lại mật khẩu mới</span>
                    </div>
                    <div className="resetPassword_right">
                        <input type="text" placeholder="Mật khẩu cũ" className="password_last" onClick={reset_password} />
                        <span className='right_password_last_text'></span>
                        <input type="text" placeholder="Mật khẩu mới" className="password_new" onClick={reset_newpassword}/>
                        <span className='right_password_new_text'></span>
                        <input type="text" placeholder="Nhập lại mật khẩu mới" className="password_newagain" onClick={reset_newpassword1}/>
                        <span className='right_password_newagain_text'></span>
                        <button className="password_update" onClick={updatePassword}>
                            LƯU THAY ĐỔI
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
