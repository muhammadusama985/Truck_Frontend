import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Replace with your actual API endpoint
    const response = await fetch("https://truckbackend-production.up.railway.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      // Store user_id in local storage
      localStorage.setItem('user_id', data.user_id); // Assuming the response contains user_id
      localStorage.setItem('account_type', data.account_type); // Assuming the response contains account_type
      console.log('User  ID:', data.user_id); // Log the user_id to the console
      console.log('Account type:', data.account_type); // Log the user_id to the console
      // Navigate to the dashboard if login is successful
      navigate('/dashboard');
    } else {
      // Show alert based on the error message from the server
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
        <h2 style={styles.heading}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>EMAIL</label>
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
            <label htmlFor="password" style={styles.label}>PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.loginButton}>Login</button>
        </form>
        <p style={styles.signupText}>
          Don't have an account? 
        </p>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  loginLeft: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  loginImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  loginRight: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  inputGroup: {
    width: '100%',
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  loginButton: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
  signupText: {
    marginTop: '15px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default Signin;