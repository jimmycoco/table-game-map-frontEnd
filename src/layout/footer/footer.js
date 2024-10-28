import React from "react";
import "./footer.css";
import facebooklogo from '../../assets/facebook-logo.jpg'; // 從當前目錄導入圖檔
import xlogo from '../../assets/x-logo.jpg';   // 從當前目錄導入圖檔
import instagramlogo from '../../assets/instagram-logo.jpg'; // 從當前目錄導入圖檔

const Footer = () => {
  return (
    <footer className="footer"> {/* 頁腳的主要容器 */}
      <div className="footer-container"> {/* 控制頁腳寬度並置中 */}
        <div className="footer-sections"> {/* 將頁腳內容區塊排佈在一起 */}

          {/* About Section */}
          <div className="footer-section"> {/* 關於我們 */}
            <h4>關於我們</h4>
            <p>我們是一支致力於為用戶提供優質內容和服務的團隊。保持聯繫並了解我們的最新消息。</p>
          </div>

          {/* Links Section */}
          <div className="footer-section"> {/* 導覽列 */}
            <h4>快速導覽</h4>
            <ul className="footer-links"> {/* 快速連結列表 */}
              <li><a href="/">首頁</a></li> {/* 連結到首頁 */}
              <li><a href="/services">服務頁面</a></li> {/* 連結到服務頁面 */}
              <li><a href="/about">關於我們</a></li> {/* 連結到關於我們 */}
              <li><a href="/contact">聯絡頁面</a></li> {/* 連結到聯絡頁面 */}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section"> {/* 聯絡資訊區塊 */}
            <h4>聯絡我們</h4>
            <p>Email: xxx123456@gmail.com</p> {/* 電子郵件 */}
            <p>電話: +886 12345678</p> {/* 聯絡電話 */}
            <p>地址: 台灣</p> {/* 地址 */}
          </div>

          {/* Social Media Links */}
          <div className="footer-section"> {/* 社交媒體區塊 */}
            <h4>社交平台</h4>
            <div className="social-icons"> {/* 社交媒體圖標容器 */}
              <a href="https://facebook.com"><img src={facebooklogo} alt="Facebook" /></a>
              <a href="https://x.com"><img src={xlogo} alt="x" /></a>
              <a href="https://instagram.com"><img src={instagramlogo} alt="Instagram" /></a>
            </div>
          </div>

        </div>
        <hr className="footer-divider" /> {/* 分隔線 */}
        <p className="footer-copyright">
          &copy; 2024 YourWebsite. All Rights Reserved. | <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> {/* 版權聲明與連結 */}
        </p>
      </div>
    </footer>
  );
};

export default Footer; // 將 Footer 組件導出，方便其他組件使用
