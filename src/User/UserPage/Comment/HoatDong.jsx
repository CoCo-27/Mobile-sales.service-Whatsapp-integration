import React from "react";
import logovi from "../../../assets/images/thongbao1.png";

function HoatDong() {
  return (
    <div>
      <div className="hoatdong_">
        <div className="hoatdong_header">
          <div>
            <input
              type="checkbox"
              name=""
              id=""
              style={{ margin: "0 10px 0  0" }}
            />
            Chỉ xem bình luận
          </div>
          <span>Đánh dấu Đã đọc tất cả</span>
        </div>
        <div className="hoatdong_conter">
          <img src={logovi} alt="img" />
          <span>Chưa có hoạt động</span>
        </div>
      </div>
    </div>
  );
}

export default HoatDong;
