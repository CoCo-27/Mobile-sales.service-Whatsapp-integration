import React from "react";

function Bank() {
  return (
    <div>
      <div className="bank_">
        <div className="cart_text">
          <span>Thẻ Tín Dụng/Ghi Nợ</span>
          <button>+ Thêm Thẻ Mới</button>
        </div>
        <div className="cart_conter">
          <span>Bạn chưa liên kết thẻ</span>
        </div>
        <div className="taiKhoan_text">
          <span>Tài Khoản Ngân Hàng Của Tôi</span>
          <button>+ Thêm Tài Khoản Ngân Hàng </button>
        </div>
        <div className="taiKhoan_conter">
          <span>Bạn chưa có tài khoản ngân hàng</span>
        </div>
      </div>
    </div>
  );
}

export default Bank;
