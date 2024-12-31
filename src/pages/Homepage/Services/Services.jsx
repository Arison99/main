import { Link } from "react-router-dom";
import "./Services.css";
import food1 from "/images/image-baklava-mobile.jpg";
import food2 from "/images/image-cake-mobile.jpg";
import food3 from "/images/image-panna-cotta-mobile.jpg";
const Services = () => {
  return (
    <div className="services container">
      <h2 className="heading-1">Our Services.</h2>
      <div className="service-row container">
        <img className="food-img" src={food1} alt="food image" />
        <h3 className="heading-2">Food and Drinks</h3>
        <p className="para-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nihil dolorum vel omnis, totam hic sunt quibusdam repellendus nesciunt
          perferendis sed! Sit neque nihil porro atque numquam, ex consequatur
          voluptatem.
        </p>
        <Link to="#" className="cta-btn">
          Book Now
        </Link>
      </div>
      <div className="service-row container">
        <img className="cake-img" src={food2} alt="cake-image" />
        <h3 className="heading-2">Parties</h3>
        <p className="para-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit
          dolorum dolor eius, ipsum temporibus earum aperiam numquam, iste
          minus, sunt quos optio natus corporis itaque non mollitia excepturi
          rerum!
        </p>
        <a href="#book-a-table" className="cta-btn">
          Book Now
        </a>
      </div>

      <div className="service-row container">
        <img className="wedding-img" src={food3} alt="cake-image" />
        <h3 className="heading-2">Wedding</h3>
        <p className="para-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit
          dolorum dolor eius, ipsum temporibus earum aperiam numquam, iste
          minus, sunt quos optio natus corporis itaque non mollitia excepturi
          rerum!
        </p>
        <a href="#book-a-table" className="cta-btn">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Services;
