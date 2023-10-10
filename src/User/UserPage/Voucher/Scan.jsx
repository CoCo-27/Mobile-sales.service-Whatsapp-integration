import React from "react";
import voucher1 from "../../../assets/images/voucher1.png";

function Scan() {
  return (
    <div>
      <div className="dichvu_">
        <img src={voucher1} alt="" />
        <p>Không có voucher phù hợp</p>
        <p>Tìm thêm voucher để lưu vào đây nhé !</p>
        <button>Tìm thêm voucher</button>
      </div>
    </div>
  );
}

export default Scan;
