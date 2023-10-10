import React from "react";
import KhuyenMai1 from "../../../assets/images/khuyenmai1.png";
import KhuyenMai2 from "../../../assets/images/khuyenmai2.jpg";

function KhuyenMai() {
  return (
    <div>
      <div className="khuyenmai_">
        <div className="khuyenmai_header">
          <button>Đánh dấu Đã đọc tất cả</button>
        </div>
        <div className="khuyenmai_conter">
          <div className="khuyenmai_conter_div">
            <img src={KhuyenMai1} alt="img" />
            <p>GIẢM 10K ĐƠN TỪ 50K</p>
            <span>
              Dùng ngay mã giảm 10K đã có trong ví từ Siêu Sale Thể Thao
            </span>
            <div>
              {" "}
              {new Date().toLocaleTimeString()}
              {"   "}
              {new Date().toLocaleDateString()}
            </div>
            <button>Xem chi tiết</button>
          </div>
          <div className="khuyenmai_conter_div">
            <img src={KhuyenMai2} alt="img" />
            <p>Siêu Sale Quốc Tế tặng riêng bạn món quà bất ngờ</p>
            <span>
              Voucher Quốc Tế giảm tối đa 10K cho đơn hàng từ 50K trong ngày
            </span>
            <div>
              {" "}
              {new Date().toLocaleTimeString()}
              {"   "}
              {new Date().toLocaleDateString()}
            </div>
            <button>Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KhuyenMai;
