import "./Testimonials.css";

import profile1 from "../../../Assets/profile-1.jpg";
import profile2 from "../../../Assets/profile-2.jpg";
import profile3 from "../../../Assets/profile-3.jpg";

const Testimonials = () => {
  return (
    <div>
      <h1 className="heading-1 text-center">What They Say.</h1>
      <section className="testimonials">
        <div className="testimonial testimonial--first">
          <p className="para-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            debitis tempore doloremque earum. Modi fugit ipsa dolore facilis
            facere ipsam atque veniam obcaecati aut fuga. Repellendus atque
            optio sequi nihil?
          </p>
          <div className="testimonial__person">
            <img src={profile1} alt="" className="testimonial__img" />
            <div className="testimonial__person__data">
              <h3 className="testimonial__person__name para-3">Satish Patel</h3>

              <p className="testimonial__person__position">
                Founder & CEO, Cognosphere
              </p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="para-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            debitis tempore doloremque earum. Modi fugit ipsa dolore facilis
            facere ipsam atque veniam obcaecati aut fuga. Repellendus atque
            optio sequi nihil?
          </p>
          <div className="testimonial__person">
            <img src={profile2} alt="" className="testimonial__img" />

            <div className="testimonial__person__data">
              <h3 className="testimonial__person__name para-3">
                Bruce McKenzie
              </h3>

              <p className="testimonial__person__position">
                Founder & CEO, Microfuse
              </p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className="para-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            debitis tempore doloremque earum. Modi fugit ipsa dolore facilis
            facere ipsam atque veniam obcaecati aut fuga. Repellendus atque
            optio sequi nihil?
          </p>
          <div className="testimonial__person">
            <img src={profile3} alt="" className="testimonial__img" />
            <div className="testimonial__person__data">
              <h3 className="testimonial__person__name para-3">Iva Boyd</h3>

              <p className="testimonial__person__position">
                Founder & CEO, Facebook
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-75 text-center mx-auto">
        <a href="#book-a-table" className="view-all-btn mt-5 ">
          View All
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
