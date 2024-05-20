import "../footer/footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ marginTop: 300 }}>
      <div className="sb__footer">
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>Copyright © 2023 </p>
          </div>
        </div>

        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <div className="flex gap-7 justify-center items-center">
              <a href="https://www.facebook.com/konselingsatir.id/">
                <img src="/images/fb.webp" alt="" />
              </a>
              <a href="https://www.instagram.com/konselingsatir.id/">
                <img src="./images/ig.webp" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
