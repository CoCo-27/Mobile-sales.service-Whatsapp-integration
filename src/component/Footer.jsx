import React from "react";
import "../asset/css/base.css";
import "../asset/css/grid.css";
import "../asset/css/main.css";
import "../asset/css/responsive.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="grid wide footer__content">
        <div class="row">
          <div class="col l-2-4 m-4 c-6">
            <h3 class="footer__heading">Chăm sóc khách hàng</h3>
            <ul class="footer-list">
              <li class="footer-item">
                <a class="footer-item__link">Trung tâm trợ giúp</a>
              </li>
              <li class="footer-item">
                <a class="footer-item__link">TheTao Shop</a>
              </li>
              <li class="footer-item">
                <a class="footer-item__link">Hướng dẫn mua hàng</a>
              </li>
            </ul>
          </div>
          <div class="col l-2-4 m-4 c-6">
            <h3 class="footer__heading">Giới thiệu</h3>
            <ul class="footer-list">
              <li class="footer-item">
                <a class="footer-item__link">Giới Thiệu Về Shopee Việt Nam</a>
              </li>
              <li class="footer-item">
                <a class="footer-item__link">Tuyển Dụng</a>
              </li>
              <li class="footer-item">
                <a class="footer-item__link">Điều Khoản Shopee</a>
              </li>
            </ul>
          </div>
          <div class="col l-2-4 m-4 c-6">
            <h3 class="footer__heading">Theo dõi chúng tôi</h3>
            <ul class="footer-list">
              <li class="footer-item">
                <a class="footer-item__link">
                  <i class="footer-item__icon fab fa-facebook-square"></i>
                  Facebook
                </a>
              </li>
              <li class="footer-item">
                <a class="footer-item__link">
                  <i class="footer-item__icon fab fa-instagram-square"></i>
                  Instagram
                </a>
              </li>
              <li class="footer-item">
                <a class="footer-item__link">
                  <i class="footer-item__icon fab fa-linkedin"></i>
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div class="col l-2-4 m-4 c-6">
            <h3 class="footer__heading">Danh mục</h3>
            <ul class="footer-list">
              <li class="footer-item">
                <a class="footer-item__link">Flash Sales</a>
              </li>
              <li class="footer-item">
                <a class="footer-item__link">
                  Chương Trình Tiếp Thị Liên Kết Shopee
                </a>
              </li>
              <li class="footer-item">
                <a class="footer-item__link">Liên Hệ Với Truyền Thông</a>
              </li>
            </ul>
          </div>
          <div class="col l-2-4 m-8 c-12">
            <h3 class="footer__heading">Vào cửa hàng trên ứng dụng</h3>
            <div class="footer__download">
              <img
                src={require("../asset/img/qr_code.png")}
                alt=""
                class="footer__download-qr"
              />
              <div class="footer__download-apps">
                <img
                  src={require("../asset/img/ios.png")}
                  alt=""
                  class="footer__download-app-icon-img"
                />
                <img
                  src={require("../asset/img/gg_play.png")}
                  alt=""
                  class="footer__download-app-icon-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <p class="footer__text">© 2015 - Bản quyền thuộc về Thế Tạo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
