import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyRegistration() {
  const history = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
    pincode: "",
  });

  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    password: false,
    confirmPassword: false,
    email: false,
    mobile: false,
    pincode: false,
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerAction = async () => {
    if (validateForm()) {
      // Backend logic goes here

      // Generate a random account number
      const accountNumber = generateAccountNumber();

      // Construct the URL with the user data
      let url = `http://localhost:4000/adduser?username=${user.email}&password=${user.password}&email=${user.email}&mobile=${user.mobile}&pincode=${user.pincode}&accountNumber=${accountNumber}`;

      // Make the API request
      await fetch(url);

      setUser({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        mobile: "",
        pincode: "",
      });

    }
  };

  const generateAccountNumber = () => {
    // Generate a random 8-digit account number
    const accountNumber = Math.floor(10000000 + Math.random() * 90000000);
    return accountNumber;
  };
  const validateForm = () => {
    const {
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      mobile,
      pincode,
    } = user;

    const newValidation = {
      firstName: false,
      lastName: false,
      password: false,
      confirmPassword: false,
      email: false,
      mobile: false,
      pincode: false,
    };

    let isValid = true;

    // First Name validation
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      newValidation.firstName = true;
      isValid = false;
    }

    // Last Name validation
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      newValidation.lastName = true;
      isValid = false;
    }

    // Password validation
    if (password.length < 8) {
      newValidation.password = true;
      isValid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      newValidation.confirmPassword = true;
      isValid = false;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      newValidation.email = true;
      isValid = false;
    }

    // Mobile validation
    if (!/^\d{10}$/.test(mobile)) {
      newValidation.mobile = true;
      isValid = false;
    }

    // Pincode validation
    if (!/^\d{6}$/.test(pincode)) {
      newValidation.pincode = true;
      isValid = false;
    }

    setValidation(newValidation);

    return isValid;
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center border border-2 p-4 rounded-lg shadow-lg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
          <div className="border border-2 p-4 rounded-lg text-primary ">
            <h2 className="text-center mb-4">Registration</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    validation.firstName ? "is-invalid" : ""
                  }`}
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name"
                  value={user.firstName}
                  onChange={handleInputChange}
                  required
                />
                {validation.firstName && (
                  <div className="invalid-feedback">
                    Please enter only alphabetic characters.
                  </div>
                )}
              </div>
              <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  validation.lastName ? "is-invalid" : ""
                }`}
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={user.lastName}
                onChange={handleInputChange}
                required
              />
              {validation.lastName && (
                <div className="invalid-feedback">
                  Please enter only alphabetic characters.
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  validation.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                placeholder="Enter password"
                value={user.password}
                onChange={handleInputChange}
                required
              />
              {validation.password && (
                <div className="invalid-feedback">
                  Password must be at least 8 characters long.
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  validation.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={user.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {validation.confirmPassword && (
                <div className="invalid-feedback">
                  Passwords do not match.
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${
                  validation.email ? "is-invalid" : ""
                }`}
                id="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleInputChange}
                required
              />
              {validation.email && (
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className={`form-control ${
                  validation.mobile ? "is-invalid" : ""
                }`}
                id="mobile"
                name="mobile"
                placeholder="Enter mobile number"
                value={user.mobile}
                onChange={handleInputChange}
                required
              />
              {validation.mobile && (
                <div className="invalid-feedback">
                  Please enter a 10-digit mobile number.
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="pincode" className="form-label">
                Pincode
              </label>
              <input
                type="text"
                className={`form-control ${
                  validation.pincode ? "is-invalid" : ""
                }`}
                id="pincode"
                name="pincode"
                placeholder="Enter pincode"
                value={user.pincode}
                onChange={handleInputChange}
                required
              />
              {validation.pincode && (
                <div className="invalid-feedback">
                  Please enter a 6-digit pincode.
                </div>
              )}
            </div>
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={registerAction}
                >
                  Register
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyRegistration;

