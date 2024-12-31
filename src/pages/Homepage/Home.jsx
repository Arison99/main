import "./Home.css";
import bg from "../../Assets/herobg.jpg";
import phone from "../../Assets/icon-phone.svg";
import { Link } from "react-router-dom";
import Services from "./Services/Services";
import Impact from "./Impact/Impact";
import Contact from "./Contact/Contact";
import Testimonials from "./Testimonials/Testimonials";
// import About from "./About/About";

const Home = () => {
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 information ">
              <h2>
                Welcome to <span>Restaurant.</span>
              </h2>
              <p>Delivering great food for more than 18 years!</p>
              <div className="d-flex mt-4">
                <Link to="/restaurant/categories" className="cta-btn">
                  Our Menu
                </Link>
                <a href="#book-a-table" className="cta-btn">
                  Book a Table
                </a>
              </div>
              <div className="social-links my-5">
                <a href="#" className="phone">
                  <img src={phone} alt="phone" />
                  0785557587 | 0757378424
                </a>
                <a href="#" className="whatsaap">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 animated mx-auto ">
              <img src={bg} alt="food" />
            </div>
          </div>
        </div>
      </section>
      {/* <About /> */}
      <Services />
      <Testimonials />
      <Impact />
      <Contact />
    </>
  );
};

export default Home;
