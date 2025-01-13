

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://truckbackend-production.up.railway.app/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("account_type", data.account_type);
      console.log("User ID:", data.user_id);
      console.log("Account type:", data.account_type);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginLeft}>
        <img
          src="https://images.pexels.com/photos/29567207/pexels-photo-29567207/free-photo-of-vintage-chevrolet-truck-on-recife-street.jpeg?auto=compress&cs=tinysrgb&w=6001"
          alt="Truck Background"
          style={styles.loginImage}
        />
      </div>
      <div style={styles.loginRight}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Enter Your Credentials Here To Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.loginButton}>
              Login
            </button>
          </form>
          <p style={styles.signupText}>Don't have an account?</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    fontFamily: "DM Serif Text",
    backgroundColor: "#fff",
    display: "flex",
    height: "100vh",
  },
  loginLeft: {
    color: "white",
    flex: 1,
    backgroundColor: "#345259",
  },
  loginImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  loginRight: {
    backgroundColor: "#F2D9BB",
    color: "#591925",
    letterSpacing: "1px",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontWeight: "bold",
  },
  formContainer: {
    border: "2px solid black",
    borderRadius: "10px",
    padding: "20px",
    width: "80%",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },
  heading: {
    fontFamily: "DM Serif Text",
    fontSize: "35px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  inputGroup: {
    width: "100%",
    marginBottom: "15px",
    textAlign: "center", // Ensures the label starts from the left
  },
  label: {
    position: "relative",
    left: "-123px",
    width: "100%",
    fontSize: "12px", // Reduced font size
    marginBottom: "5px",
    fontWeight: "bold",
    display: "block",
    // Ensures proper alignment above the input
  },
  input: {
    positon: "relative",
    left: "40px",
    border: "2px solid #2A8C82",
    width: "50%",
    padding: "10px",
    borderRadius: "50px",
  },
  loginButton: {
    alignItems: "center",
    fontFamily: "DM Serif Text",
    padding: "10px",
    backgroundColor: "#1E1A10",
    color: "#F2E8DC",
    fontSize: "16px",
    border: "none",
    marginLeft:"16px",
    borderRadius: "50px",
    cursor: "pointer",
    width: "50%",
  },
  signupText: {
    textDecoration: "underline",
    fontFamily: "DM Serif Text",
    marginTop: "15px",
  },
};

export default Signin;
