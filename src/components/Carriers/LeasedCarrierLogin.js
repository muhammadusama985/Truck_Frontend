import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LeasedCarrierSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    password: '',
    truck_model: '',
    truck_brand: '',
    truck_dimensions: '',
    truck_year: '',
    latitude: null, // Add latitude field
    longitude: null, // Add longitude field
  });
  const [locationFetched, setLocationFetched] = useState(false); // To track if location is fetched
  const navigate = useNavigate();

  useEffect(() => {
    // Prompt user to allow location access when the component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Ensure you're getting full precision latitude and longitude
          setFormData((prevData) => ({
            ...prevData,
            latitude: parseFloat(latitude.toFixed(14)), // Ensure 6 decimal places (full precision)
            longitude: parseFloat(longitude.toFixed(14)), // Ensure 6 decimal places (full precision)
          }));
          setLocationFetched(true); // Mark location as fetched
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!locationFetched) {
      alert('Please allow location access to continue.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/leasedCarrier/carriersSignup', formData);
      if (response.data.message === 'User data stored successfully!') {
        const carrierId = response.data.carrierId; // Assuming backend sends `carrierId`
        navigate(`/uploadDocuments?carrierId=${carrierId}`);
      } else {
        alert(response.data.message || 'Signup failed.');
      }
    } catch (error) {
      alert(
        error.response && error.response.data.message
          ? error.response.data.message
          : 'An error occurred during signup.'
      );
    }
  };

  return (
    <div>
      <h2>Leased Carrier Signup</h2>
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Truck Model:
          <input
            type="text"
            name="truck_model"
            value={formData.truck_model}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Truck Brand:
          <input
            type="text"
            name="truck_brand"
            value={formData.truck_brand}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Truck Dimensions:
          <input
            type="text"
            name="truck_dimensions"
            value={formData.truck_dimensions}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Truck Year:
          <input
            type="number"
            name="truck_year"
            value={formData.truck_year}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default LeasedCarrierSignup;
