import React, { useState } from "react";
import UsersGrid from "./UsersGrid";

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    accountType: "CEO",
    gender: "Male",
    country: "",
    language: "",
  });

  const [BackScreen, setBackScreen] = useState(false); // State to toggle screens
  const [AllUsers, setUsersScreen] = useState(false); // State to toggle screens

  // Function to handle the button click and move back to User screen
  const handleBackScreenClick = () => {
    setBackScreen(true);
  };

  // Function to handle the button click and show AddNewUser screen
  const handleAllUsersScreenClick = () => {
    setUsersScreen(true);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
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
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      formDataObj.append("profilePic", blob, "profile-pic.jpg");
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
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (BackScreen) {
    return <UsersGrid />; // If the button is clicked, show AddNewUser screen
  }

  if (AllUsers) {
    return <UsersGrid />; // If the button is clicked, show AddNewUser screen
  }

  return (
    <div style={styles.container}>
      <button onClick={handleBackScreenClick} style={styles.backButton}>
        ← Back
      </button>
      <h2 style={styles.title}>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.photoContainer}>
          <label htmlFor="uploadPhoto" style={styles.photoPlaceholder}>
            {selectedImage ? (
              <img
                src={selectedImage}
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

        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Account Type</label>
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Driver">Driver</option>
              <option value="Accounts">Accounts</option>
              <option value="Dispatcher">Dispatcher</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country name"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Language</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              placeholder="What is your Language"
              style={styles.input}
            />
          </div>
        </div>

        <button type="submit" style={styles.submitButton}>
          Add Now
        </button>
      </form>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>User Added Successfully!</h3>
            <div style={styles.modalButtons}>
              <button onClick={closeModal} style={styles.cancelButton}>
                Cancel
              </button>
              <button
                onClick={handleAllUsersScreenClick}
                style={styles.seeListButton}
              >
                See List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Tinos ,serif",
    width: "900px",
    maxWidth: "1200px",
    height: "680px",
    backgroundColor: "#BFBFBF",
    padding: "20px",
    margin: "50px auto",
    borderRadius: "20px",
    boxShadow: "0 4px 6px rgba(230, 218, 218, 0.1)",
    position: "relative",
  },
  html: {
    backgroundcolor: "" /* Light color for the page background */,
    margin: " 10",
    fontfamily: "Arial, sans-serif" /* Optional: Define a global font */,
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "5px 10px",
    fontSize: "15px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
  title: {
    fontSize: "30px",
    fontFamily: "Tinos ,serif",
    textAlign: "center",
    marginBottom: "20px",
  },
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
    fontSize: "16px",
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  row: {
    display: "flex",
    gap: "20px",
    marginBottom: "25px",
  },
  formGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "5px",
    width: "50%",
  },
  input: {
    backgroundColor: "#D9D9D9",
    padding: "8px",
    fontSize: "14px",
    border: "2px solid #0D0D0D",
    borderRadius: "50px",
    width: "420px,",
  },

  checkboxLabel: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "8px",
  },
  submitButton: {
    width: "50%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    marginTop: "60px",
    display: "block", // Ensures it behaves like a block element for centering
    margin: "20px auto", // Centers the button horizontally and adds vertical spacing
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    color: "green",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    width: "300px",
    fontSize: "18px", // Increase the font size
  },
  modalButtons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  seeListButton: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AddUser;
