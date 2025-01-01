import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Signup = () => {
    const navigate = useNavigate(); // Initialize the navigate function
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    accountType: "CEO",
    gender: "Male",
    country: "",
    language: "",
    password: "", // Added password to the state
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("firstName", formData.firstName);
    formDataObj.append("lastName", formData.lastName);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("accountType", formData.accountType);
    formDataObj.append("gender", formData.gender);
    formDataObj.append("country", formData.country);
    formDataObj.append("language", formData.language);
    formDataObj.append("password", formData.password);

    if (selectedImage) {
      const file = selectedImage; // Use the file directly
      formDataObj.append("profilePic", file, file.name);
    }

    try {
      const response = await fetch("https://truckbackend-production.up.railway.app/api/add-user", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User  added successfully:", data);
        setIsModalOpen(true);

        // Clear the form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          accountType: "CEO",
          gender: "Male",
          country: "",
          language: "",
          password: "",
        });
        setSelectedImage(null); // Clear the selected image

        // Redirect to the login screen
        navigate('/Signin'); // Navigate to the Signup page
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the file directly
    }
  };

  return (
    <div style={{ display: 'flex', height: '120vh', width: "1200px", fontFamily: 'Arial, sans-serif' }}>
      {/* Left Section */}
      <div style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
        <img
          src="https://images.pexels.com/photos/29567207/pexels-photo-29567207/free-photo-of-vintage-chevrolet-truck-on-recife-street.jpeg?auto=compress&cs=tinysrgb&w=6001"
          alt="Truck Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '1000px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',
        }}
      >
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Create an Account</h2>
        <form onSubmit={handleSubmit}
          style={{
            width: '550px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          {/* Profile Image Upload */}
          <div style={styles.photoContainer}>
            <label htmlFor="uploadPhoto" style={styles.photoPlaceholder}>
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)} // Use URL.createObjectURL for preview
                  alt="Uploaded Preview"
                  style={styles.uploadedImage}
                />
              ) : (
                <>
                  <i style={styles.cameraIcon}>📷</i>
                  <p style={styles.uploadText}>Upload Photo</p>
                </>
              )}
            </label>
            <input
              type="file"
              id="uploadPhoto"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          {/* First Name and Last Name */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="firstName" style={{ fontSize: '14px', marginBottom: '5px' }}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="lastName" style={{ fontSize: '14px', marginBottom: '5px' }}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="email" style={{ fontSize: '14px', marginBottom: '5px' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* Password */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="password" style={{ fontSize: '14px', marginBottom: '5px' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          {/* Gender and Phone Number */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="gender" style={{ fontSize: '14px', marginBottom: '5px' }}>
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="phone" style={{ fontSize: '14px', marginBottom: '5px' }}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
          </div>

          {/* Country and Language */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="country" style={{ fontSize: '14px', marginBottom: '5px' }}>
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Enter your country"
                value={formData.country}
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="language" style={{ fontSize: '14px', marginBottom: '5px' }}>
                Language
              </label>
              <input
                type="text"
                id="language"
                name="language"
                placeholder="Enter your language"
                value={formData.language}
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
          </div>

          {/* Role */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="role" style={{ fontSize: '14px', marginBottom: '5px' }}>
              Select Role
            </label>
            <select
              id="role"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            >
              <option value="">Select Role</option>
              <option value="User">User </option>
              <option value="Driver">Driver</option>
              <option value="Dispatcher">Dispatcher</option>
              <option value="Accounts">Accounts</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#007BFF',
              color: '#fff',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  photoContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },
  photoPlaceholder: {
    width: "120px",
    height: "120px",
    backgroundColor: "#f2f2f2",
    border: "1px dashed #ccc",
    borderRadius: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    margin: "0 auto",
    overflow: "hidden",
  },
  cameraIcon: {
    fontSize: "20px",
  },
  uploadText: {
    margin: 0,
    fontSize: "12px",
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default Signup;