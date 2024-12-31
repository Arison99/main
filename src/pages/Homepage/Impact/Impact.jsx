import messages from "../../../Assets/icon-messages.svg";
import communities from "../../../Assets/icon-communities.svg";
import "./Impact.css";

const Impact = () => {
  return (
    <>
      <section className="mockup_section container">
        <div className="customers_number flex">
          <div className="communities">
            <img src={communities} alt="communities" />
            <h2 className="heading-1">1.4k+</h2>
            <p className="para-2">Communities Formed</p>
          </div>
          <div className="communities">
            <img src={messages} alt="messages" />
            <h2 className="heading-1">2.7m+</h2>
            <p className="para-2">Interaction</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
