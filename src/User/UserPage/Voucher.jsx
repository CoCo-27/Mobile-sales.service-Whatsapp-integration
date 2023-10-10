import React from "react";
import AllVoucher from "./Voucher/AllVoucher";
import DichVu from "./Voucher/DichVu";
import DoiTac from "./Voucher/DoiTac";
import Scan from "./Voucher/Scan";
import Shopee from "./Voucher/Shopee";
import "./VoucherCss.css";
function Voucher() {
  function voucher_all() {
    document.querySelector(".voucher_comment_all").style.display = "block";
    document.querySelector(".voucher_comment_dichVu").style.display = "none";
    document.querySelector(".voucher_comment_doiTac").style.display = "none";
    document.querySelector(".voucher_comment_scan").style.display = "none";
    document.querySelector(".voucher_comment_shopee").style.display = "none";
  }
  function voucher_shopee() {
    document.querySelector(".voucher_comment_all").style.display = "none";
    document.querySelector(".voucher_comment_dichVu").style.display = "none";
    document.querySelector(".voucher_comment_doiTac").style.display = "none";
    document.querySelector(".voucher_comment_scan").style.display = "none";
    document.querySelector(".voucher_comment_shopee").style.display = "block";
  }
  function voucher_napThe() {
    document.querySelector(".voucher_comment_all").style.display = "none";
    document.querySelector(".voucher_comment_dichVu").style.display = "block";
    document.querySelector(".voucher_comment_doiTac").style.display = "none";
    document.querySelector(".voucher_comment_scan").style.display = "none";
    document.querySelector(".voucher_comment_shopee").style.display = "none";
  }
  function voucher_doiTac() {
    document.querySelector(".voucher_comment_all").style.display = "none";
    document.querySelector(".voucher_comment_dichVu").style.display = "none";
    document.querySelector(".voucher_comment_doiTac").style.display = "block";
    document.querySelector(".voucher_comment_scan").style.display = "none";
    document.querySelector(".voucher_comment_shopee").style.display = "none";
  }
  function voucher_scan() {
    document.querySelector(".voucher_comment_all").style.display = "none";
    document.querySelector(".voucher_comment_dichVu").style.display = "none";
    document.querySelector(".voucher_comment_doiTac").style.display = "none";
    document.querySelector(".voucher_comment_scan").style.display = "block";
    document.querySelector(".voucher_comment_shopee").style.display = "none";
  }
  return (
    <div>
      <div className="voucher_">
        <div className="voucher_header">
          <span className="voucher_header_text">Ví Voucher</span>
          <div className="voucher_header_button">
            <button className="voucher_button1">Tìm thêm voucher</button>
            <button className="voucher_button2">Xem lịch sử voucher</button>
            <button className="voucher_button3">Tìm hiểu thêm</button>
          </div>
          <div className="voucher_header_seach">
            <span>Mã Voucher</span>
            <input type="text" placeholder="Nhập mã voucher tại đây" />
            <button className="voucher_header_seach_button1">Lưu</button>
          </div>
        </div>
        <div className="voucher_conter">
          <div className="voucher_conter_button_grup">
            <button onClick={voucher_all}>Tất Cả</button>
            <button onClick={voucher_shopee}>Shopee</button>
            <button onClick={voucher_napThe}>Nạp thẻ & Dịch vụ</button>
            <button onClick={voucher_doiTac}>Từ Đối Tác</button>
            <button onClick={voucher_scan}>Scan & Pay</button>
          </div>
          <div className="voucher_comment">
            <div className="voucher_comment_all">
              <AllVoucher></AllVoucher>
            </div>
            <div className="voucher_comment_dichVu">
              <DichVu></DichVu>
            </div>
            <div className="voucher_comment_doiTac">
              <DoiTac></DoiTac>
            </div>
            <div className="voucher_comment_scan">
              <Scan></Scan>
            </div>
            <div className="voucher_comment_shopee">
              <Shopee></Shopee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Voucher;
