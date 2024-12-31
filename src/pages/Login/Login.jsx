// src/pages/Login/Login.jsx
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import Input from "../../components/UI/Forms/Input";
import useFetch from "../../hooks/useFetch";
import AuthContext from '../../contexts/AuthContext.jsx';

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, previousUrl } = useContext(AuthContext);
  const [submitData, setSubmitData] = useState(false);

  // State to handle form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Capture the data
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitData(true);
  };

  const { data, error, loading } = useFetch(
    submitData ? import.meta.env.VITE_LOGIN : null,
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    }
  );

  // Handle response and redirect
  useEffect(() => {
    if (data) {
      setSubmitData(false);

      // Save user details and token to localStorage
      localStorage.setItem("customer_token", data.access_token);
      localStorage.setItem("Cart_customer_Details", JSON.stringify(data.user));

      // Call the handleLogin function to update the isLoggedIn state in AuthContext
      handleLogin();

      // Navigate to the previous page or default route
      console.log(`Navigating to previous URL: ${previousUrl}`);
      const redirectUrl = previousUrl 
      navigate(redirectUrl, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="container-fluid">
      <div className="mt-5 pt-5"></div>
      <div className="row">
        <div className="mx-auto login col-lg-6">
          <h3 className="heading-2">Please Sign In</h3>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="addBtn p-2 w-100 mt-3 fs-4">
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {error && <p className="text-danger para-2">Error: {error}</p>}

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
                Remember me
              </label>
            </div>

            <div className="form-check">
              <a className="forgot-password text-end para-2" href="#">
                Forgot password
              </a>
            </div>
          </div>
          <hr />
          <p className="text-start para-2">
            Don&apos;t have an account?{" "}
            <Link to="/restaurant/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;