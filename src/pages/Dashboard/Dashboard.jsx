import { useState, useEffect, useContext } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext.jsx";

const Dashboard = () => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [bookedTable, setBookedTable] = useState(null);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/80"
  );
  const [customerDetails, setCustomerDetails] = useState({
    name: "Guest",
    email: "guest@example.com",
  });
  const [dragging, setDragging] = useState(false);

  const toggleBalanceVisibility = () => {
    setBalanceVisible(!balanceVisible);
  };

  const handleBookTable = () => {
    setBookedTable("Table for 2 at 7:00 PM on Oct 1");
  };

  const toggleUpdateProfile = () => {
    setIsUpdatingProfile(!isUpdatingProfile);
  };

  const handleImageChange = (e) => {
    const file = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleImageChange(e);
  };

  const onLogout = () => {
    handleLogout(navigate);
  };

  useEffect(() => {
    // Retrieve customer details from local storage
    const storedCustomerDetails = localStorage.getItem("Cart_customer_Details");
    if (storedCustomerDetails) {
      setCustomerDetails(JSON.parse(storedCustomerDetails));
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="mt-5 pt-5"></div>
      <div className="row g-2">
        <div className="col-lg-5">
          <div className="row g-2">
            <div className="col-lg-7 d-flex">
              {/* Account Balance Section */}
              <div className="w-100">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="heading-2">Account Balance</h5>
                    <div className="d-flex align-items-center">
                      <p className="para-3 me-2">
                        {balanceVisible ? "$500.00" : "******"}
                      </p>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={toggleBalanceVisibility}
                      >
                        <i
                          className={`bi ${
                            balanceVisible ? "bi-eye-slash" : "bi-eye"
                          }`}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex">
              {/* Logout Button */}
              <div className="w-100">
                <div className="card h-100 ">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <button
                      className="btn btn-danger w-100"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              {/* Invite Friends */}
              <div className="w-100">
                <div className="card">
                  <div className="card-body">
                    <h5 className="heading-2">Invite Friends</h5>
                    <button className="btn btn-primary">Invite Friends</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              {/* Book Table Section */}
              <div className="w-100">
                <div className="card">
                  <div className="card-body">
                    <h5 className="heading-2">Book a Table</h5>
                    <button
                      className="btn btn-success"
                      onClick={handleBookTable}
                    >
                      Book a Table
                    </button>
                    {bookedTable && (
                      <div className="mt-3">
                        <h6>Booked Table</h6>
                        <p className="para-3">{bookedTable}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          {/* User Profile Section */}
          <div className="w-100">
            <div className="card">
              <div className="card-body">
                <h5 className="heading-2">User Profile</h5>
                <div className="d-flex align-items-center">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-pic me-3"
                  />
                  <div>
                    <p className="para-3">Name: {customerDetails.name}</p>
                    <p className="para-3">Email: {customerDetails.email}</p>
                  </div>
                </div>
                <button
                  className="btn btn-secondary mt-3"
                  onClick={toggleUpdateProfile}
                >
                  Update Profile
                </button>

                {/* Collapsible Form for Updating Profile */}
                <div
                  className={`collapse ${isUpdatingProfile ? "show" : ""} mt-3`}
                >
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                      />
                    </div>

                    {/* Dropzone for Image Upload */}
                    <div
                      className={`dropzone p-3 mb-3 ${
                        dragging ? "dragging" : ""
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      style={{
                        border: "2px dashed #ccc",
                        borderRadius: "10px",
                        textAlign: "center",
                        cursor: "pointer",
                      }}
                    >
                      <p className="para-3">
                        Drag and drop Profile image, or click to select
                      </p>
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      <label
                        htmlFor="image"
                        className="btn btn-outline-primary"
                      >
                        Choose Image
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="w-100">
            <div className="card">
              <div className="card-body">
                <h5 className="heading-2">Recent Transactions</h5>
                <ul className="list-group">
                  <li className="list-group-item">Paid $30.00 for dinner</li>
                  <li className="list-group-item">
                    Paid $50.00 for reservation
                  </li>
                  <li className="list-group-item">Refund $10.00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;