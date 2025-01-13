

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

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
      const response = await fetch(
        "https://truckbackend-production.up.railway.app/api/add-user",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("User added successfully:", data);
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
        navigate("/Signin"); // Navigate to the Signin page
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
    <div
      style={{
        display: "flex",
        height: "120vh",
        width: "100%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Section */}
      <div style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
        <img
          src="https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg?t=st=1736417843~exp=1736421443~hmac=d00ee020f1a460464f96ef217301ac82c94e1d060f83506b4a4348c0725c4a02&w=826"
          alt="Truck Background"
          style={{ width: "90%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Right Section */}
      <div
        style={{
          backgroundColor: "#F2D9BB",
          position: "relative",
          fontFamily: "Spectral",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
        }}
      >
        {/* Empty Container Div to Shift the Left Side Down */}
       
        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "1px",
            position: "relative",
            right: "36px",
            fontFamily: "DM Serif Text",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "10px",
            marginTop: "50px",
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
                  <i style={styles.cameraIcon}>📷 </i>
                  <p style={styles.uploadText}>Upload Photo</p>
                </>
              )}
            </label>
            <input
              type="file"
              id="uploadPhoto"
              style={{ display: "none", borderRadius: "100px" }}
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          {/* First Name and Last Name */}
          <div style={{ display: "flex", gap: "10px", borderRadius: "25px" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="firstName"
                style={{ fontSize: "14px", marginBottom: "5px" }}
              >
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
                  color: "#260F0D",
                  padding: "10px",
                  borderRadius: "50px",
                  border: "2px solid #2A8C82",
                }}
              />
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="lastName"
                style={{ fontSize: "14px", marginBottom: "5px" }}
              >
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
                  padding: "10px",
                  borderRadius: "50px",
                  border: "2px solid #2A8C82",
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="email"
              style={{ fontSize: "14px", marginBottom: "5px" }}
            >
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
                padding: "10px",
                borderRadius: "50px",
                border: "2px solid #2A8C82",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="password"
              style={{ fontSize: "14px", marginBottom: "5px" }}
            >
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
                padding: "10px",
                borderRadius: "50px",
                border: "2px solid #2A8C82",
              }}
            />
          </div>

          {/* Gender and Phone Number */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="gender"
                style={{ fontSize: "14px", marginBottom: "5px" }}
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={{
                  padding: "10px",
                  borderRadius: "50px",
                  width: "100px",
                  border: "2px solid #2A8C82",
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="phone"
                style={{ fontSize: "14px", marginBottom: "5px" }}
              >
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
                  padding: "10px",
                  borderRadius: "50px",
                  border: "2px solid #2A8C82",
                }}
              />
            </div>
          </div>

          {/* Country and Language */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="country"
                style={{ fontSize: "14px", marginBottom: "5px" }}
              >
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
                  padding: "10px",
                  borderRadius: "50px",
                  border: "2px solid #2A8C82",
                }}
              />
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="language"
                style={{ fontSize: "14px", marginBottom: "5px" }}
              >
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
                  padding: "10px",
                  borderRadius: "50px",
                  border: "2px solid #2A8C82",
                }}
              />
            </div>
          </div>

          {/* Role */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="role"
              style={{ fontSize: "14px", marginBottom: "5px" }}
            >
              Select Role
            </label>
            <select
              id="role"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              style={{
                padding: "10px",
                borderRadius: "50px",
                width: "100%",
                border: "2px solid #2A8C82",
              }}
            >
               <option value="">Select Role</option>
               <option value="User">User </option>
               <option value="Driver">Driver</option>
              <option value="Dispatcher">Dispatcher</option>
            </select>
          </div>

          {/* Submit Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom:"5px"
            }}
          >
            <button
              type="submit"
              style={{
                padding: "10px 2px",
                backgroundColor: "#2A8C82",
                color: "#fff",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                width: "50%",
                fontSize: "15px",
              }}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  photoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  photoPlaceholder: {
    width: "120px",
    marginTop:"2px",
    height: "120px",
    borderRadius: "100px",
    backgroundColor: "#d8d8d8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solidrgb(8, 95, 86)",
    cursor: "pointer",
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    borderRadius: "100px",
    objectFit: "cover",
  },
  cameraIcon: {
    fontSize: "40px",
  },
  uploadText: {
    fontSize: "16px",
  },
};

export default Signup;
