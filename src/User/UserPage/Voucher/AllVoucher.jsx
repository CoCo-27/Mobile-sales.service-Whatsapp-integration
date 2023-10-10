import React from "react";
import KhuyenMai1 from "../../../assets/images/khuyenmai1.png";
import KhuyenMai2 from "../../../assets/images/khuyenmai2.jpg";
import voucher2 from "../../../assets/images/voucher2.jpg";
// import voucher3 from "../../../assets/images/voucher3.jpg";
function AllVoucher() {
  return (
    <div>
      <div className="allvoucher_">
        <div className="allvoucher_conter_div">
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
        <div className="allvoucher_conter_div">
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
        <div className="allvoucher_conter_div">
          <img src={voucher2} alt="img" />
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
        <div className="allvoucher_conter_div">
          <img src={voucher2} alt="img" />
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
  );
}

export default AllVoucher;
