import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/UI/Forms/Input";
import useFetch from "../../hooks/useFetch";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [submitData, setSubmitData] = useState(false);
  const [passwordData, setPasswordData] = useState("");
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Use useFetch conditionally based on submitData
  const { data, error, loading } = useFetch(
    submitData ? "https://fakestoreapi.com/users" : null, // Only fetch if submitData is true
    {
      method: "POST",
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        password: formData.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordData("Passwords did not match");
      return;
    }

    if (formData.password.length < 8) {
      setPasswordData("Password must be at least 8 characters");
      return;
    }

    setSubmitData(true); // Trigger fetch request
  };

  useEffect(() => {
    if (data) {
      setSubmitData(false); // Reset submit state after success
      navigate("/"); // Redirect to dashboard
    }

    if (error) {
      setSubmitData(false); // Reset submit state after error
    }
  }, [data, error, navigate]); // Add navigate to the dependency array

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="mt-5 pt-5"></div>
        <div className="mx-auto login col-lg-6">
          <h3 className="heading-2">Please Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button type="submit" className="addBtn w-100 mt-3 fs-4 p-2">
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {error && <p className="text-danger para-2">Error: {error}</p>}
          {passwordData.length > 1 && (
            <p className="text-danger para-2">Error: {passwordData}</p>
          )}

          {data && (
            <p className="text-success">Admin registered successfully!</p>
          )}

          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="form-check">
              <input
                className="form-check-input fs-4"
                type="checkbox"
                name="remember"
                value="true"
                id="rememberMe"
              />
              <label className="form-check-label para-2" htmlFor="rememberMe">
                By Signing Up, You agree to
                <Link to="#" className="ms-2">
                  terms and conditions
                </Link>
              </label>
            </div>
          </div>
          <hr />
          <p className="text-start para-2">
            Have an account? <Link to="/restaurant/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
