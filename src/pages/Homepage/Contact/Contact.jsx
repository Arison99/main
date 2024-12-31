import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="heading-1 text-center">Contact Us.</div>
      <section id="contact" className="contact section">
        <div className="container">
          <div className="info-wrap">
            <div className="row gy-5">
              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3 className="para-1">Location</h3>
                    <p className="para-1">
                      A108 Adam Street, New York, NY 535022
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3 className="para-1">Call</h3>
                    <p className="para-1">+1 5589 55488 55</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="info-item d-flex align-items-center">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3 className="para-1">Email</h3>
                    <p className="para-1">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form action="forms/contact.php" method="post">
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
