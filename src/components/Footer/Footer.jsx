import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Restairant</strong>
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href="">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
