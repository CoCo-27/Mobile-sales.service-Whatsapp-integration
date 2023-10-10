import React, { useEffect } from "react";
import "../advertisement/Advertisement.css";

const Advertisement = () => {
  useEffect(() => {
    setTimeout(() => {
      document
        .querySelector(".Advertisement")
        .classList.remove("Advertisement");
    }, 5000);
  }, []);

  return (
    <div className="Advertisement">
      <div className="Advertisement-container">
        <div className="container-product">
          <div className="title-BHX">
            <span className="dotnew">
              <span className="animation"></span>
            </span>
            <span className="text">
              <a href="https://www.bachhoaxanh.com/">
                <img
                  src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/logoBHX.png"
                  alt=""
                />
              </a>
              <span className="text-freeShip">
                FREESHIP cho đơn hàng từ 300.000đ
              </span>
            </span>
            <span className="note">
              (Đây là khuyến mãi của website cùng tập đoàn MWG)
            </span>
            <span className="title-close">
              <a
                href="https://www.bachhoaxanh.com/khuyen-mai"
                title="Xem 10.000+ sản phẩm khác"
              >
                <span className="showtext">
                  Xem thêm
                  <b>10.000+</b>
                  <br />
                  sản phẩm khuyến mãi
                  <img
                    src="https://cdn.tgdd.vn/mwgcart/mwgcore/ContentMwg/images/ArrowCircleRight.png"
                    alt=""
                  />
                </span>
              </a>
            </span>
          </div>
          <div className="voucherproduct-bhx">
            <div className="_voucher">
              <div className="_voucher-title">Tặng thêm mã giảm 10%</div>
              <div className="_voucher-content">
                <div className="_voucher-input-email">
                  <input type="text" placeholder="Nhập email*" />
                </div>
                <div className="input-phone">
                  <input type="text" placeholder="Nhập SĐT*" />
                </div>
                <div className="dcap">
                  <button className="submit">NHẬN MÃ</button>
                </div>
              </div>
              <div className="_voucher-error hiden"></div>
              <div className="_voucher-note">
                *Áp dụng cho khách lần đầu mua hàng tại BackhoaXanh
              </div>
            </div>
            <div className="_product">
              <aside>
                <div className="_product-stage">
                  <div className="stage-container">
                    <div className="stage-all-item">
                      <div className="stage-item">
                        <a href="https://www.bachhoaxanh.com/nuoc-hoa-hong-kem-duong-mat-na?utm_source=refferal&utm_medium=bhx_box&utm_campaign=tgdd&utm_id=refferal&utm_content=bhx_box_damat_020622">
                          <img
                            src="https://cdn.tgdd.vn/2022/06/banner/Thiet-ke-chua-co-ten-(24)-280x440.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="stage-all-item">
                      <div className="stage-item">
                        <a href="https://www.bachhoaxanh.com/nuoc-hoa-hong-kem-duong-mat-na?utm_source=refferal&utm_medium=bhx_box&utm_campaign=tgdd&utm_id=refferal&utm_content=bhx_box_damat_020622">
                          <img
                            src="https://cdn.tgdd.vn/2022/06/banner/Box-Truyen-Thong-280x440-(3)-280x440.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="stage-all-item">
                      <div className="stage-item">
                        <a href="https://www.bachhoaxanh.com/nuoc-hoa-hong-kem-duong-mat-na?utm_source=refferal&utm_medium=bhx_box&utm_campaign=tgdd&utm_id=refferal&utm_content=bhx_box_damat_020622">
                          <img
                            src="https://cdn.tgdd.vn/2022/06/banner/Thiet-ke-chua-co-ten-(11)-280x440.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="stage-all-item">
                      <div className="stage-item">
                        <a href="https://www.bachhoaxanh.com/nuoc-hoa-hong-kem-duong-mat-na?utm_source=refferal&utm_medium=bhx_box&utm_campaign=tgdd&utm_id=refferal&utm_content=bhx_box_damat_020622">
                          <img
                            src="https://cdn.tgdd.vn/2022/05/banner/Artboard-1-280x440.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="stage-all-item">
                      <div className="stage-item">
                        <a href="https://www.bachhoaxanh.com/nuoc-hoa-hong-kem-duong-mat-na?utm_source=refferal&utm_medium=bhx_box&utm_campaign=tgdd&utm_id=refferal&utm_content=bhx_box_damat_020622">
                          <img
                            src="https://cdn.tgdd.vn/2022/06/banner/Thiet-ke-chua-co-ten-(12)-280x440.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=""></div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
