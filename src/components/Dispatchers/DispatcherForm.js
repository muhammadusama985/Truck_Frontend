import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DispatcherForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    payoneerEmail: '',
    password: '', // Added password field
  });

  const [message, setMessage] = useState('');



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/dispatchers/dispatch', formData);
      setMessage(response.data.message);
      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        number: '',
        payoneerEmail: '',
        password: '', 
      });
      // Optionally clear any error message
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Failed to add dispatcher');
    }
  };

  return (
    <div className="form-container">
      <h1>Dispatcher Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="payoneerEmail"
          placeholder="Payoneer Email"
          value={formData.payoneerEmail}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Register Dispatcher</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DispatcherForm;
