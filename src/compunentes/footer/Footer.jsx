import React from "react";
import "../footer/footer.css";
import {
  CaretDownOutlined,
  FacebookFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="main-footer">
      <section className="footer-menu">
        <div className="footer__col">
          <ul className="footer-listMenu">
            <li>Lịch sử mua hàng</li>
            <li>Cộng tác bán hàng cùng Bootscamp 1</li>
            <li>Tìm hiểu về mua trả góp</li>
            <li>Chính sách bảo hành</li>
            <li>
              Xem thêm <CaretDownOutlined />{" "}
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <ul className="footer-listMenu">
            <li>Giới thiệu công ty (MWG.vn)</li>
            <li>Tuyển dụng</li>
            <li>Gửi góp ý, khiếu nại</li>
            <li>Tìm siêu thị (3.135 shop)</li>
            <li>Xem bản mobile</li>
          </ul>
        </div>
        <div className="footer__col">
          <ul className="footer-listMenu-phone">
            <li>
              <b>Tổng đài hỗ trợ </b> (Miễn phí gọi)
            </li>
            <li>
              Gọi mua:{" "}
              <span className="footer-listMenu-txt-phone"> 1800.1060</span>{" "}
              (7:30 - 22:00)
            </li>
            <li>
              Kỹ thuật:{" "}
              <span className="footer-listMenu-txt-phone">1800.1763</span> (7:30
              - 22:00)
            </li>
            <li>
              Khiếu nại:{" "}
              <span className="footer-listMenu-txt-phone">1800.1062</span> (8:00
              - 21:30)
            </li>
            <li>
              Bảo hành:{" "}
              <span className="footer-listMenu-txt-phone">1800.1064 </span>(8:00
              - 21:00)
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="f-social">
            <a href="https://www.facebook.com/MrCuong1996/" className="link-fb">
              <i className="fb-icon">
                <FacebookFilled />
              </i>
              106k Fan
            </a>
            <a
              href="https://www.youtube.com/user/TGDDVideoReviews"
              className="link-youtube"
            >
              <i className="youtube-icon">
                <YoutubeFilled />
              </i>
              843k Đăng ký
            </a>
          </div>
          <div className="f-certify">
            <a href="http://online.gov.vn/Home/WebDetails/20090">
              <i className="icon__congthuong"></i>
            </a>
            <a href="https://www.thegioididong.com/tos#giai-quyet-khieu-nai">
              <i className="icon__khieunai"></i>
            </a>
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=5b62e759-2a0c-4d86-b972-af903bfbc89d&refurl=https://www.thegioididong.com/dtdd">
              <i className="icon__protected"></i>
            </a>
            <a
              className="img-ncsc"
              href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/thegioididongcom-1632835473"
            >
              <img
                src="https://tinnhiemmang.vn/handle_cert?id=thegioididong.com"
                alt=""
              />
            </a>
          </div>
          <div className="f-website">
            <div className="footer__logo">
              <p className="footer__logo-hd">Website cùng tập đoàn</p>
              <ul className="footer__logo-list">
                <li>
                  <a href="https://www.dienmayxanh.com/">
                    <i className="iconlogo-dienmayxanh"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.bachhoaxanh.com/">
                    <i className="iconlogo-bachhoaxanh"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.topzone.vn/">
                    <i className="iconlogo-topzone"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.bachhoaxanh.com/">
                    <i className="iconlogo-cycle"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.avasport.com/">
                    <i className="iconlogo-sport"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.avakids.com/">
                    <i className="iconlogo-kids"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.avafashion.com/">
                    <i className="iconlogo-fashion"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.thegioididong.com/avaji">
                    <i className="iconlogo-ji"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.dichvutantam.com/">
                    <i className="iconlogo-tantam"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.nhathuocankhang.com/">
                    <i className="iconlogo-ankhang"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.4kfarm.com/">
                    <i className="iconlogo-4kfarm"></i>
                  </a>
                </li>
                <li>
                  <a href="https://vieclam.thegioididong.com/">
                    <i className="iconlogo-vieclam"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright">
        <section>
          <p>
            © 2022. Công ty cổ phần Cường Đặng. GPDKKD: 0303217354 do{" "}
            <a href="nondemy.vn">Nodemy</a> cung cấp ngày 10/06/2022 . GPMXH:
            238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 10/06/2022.
            <br />
            Địa chỉ: 250 Kim Giang, Quận Thanh Xuân, Hà Nội. Điện thoại:
            0967721996 . Email: vanlytuongtuluv@gmail.com. Chịu trách nhiệm nội
            dung: Cường Đặng.
            <a href="https://www.facebook.com/messages/t/100052709747902">
              Hỗ Trợ 24/24
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
