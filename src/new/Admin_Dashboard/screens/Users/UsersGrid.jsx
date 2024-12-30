import React, { useState, useEffect } from "react";
import axios from "axios";
import AddUser from "./AddUser";
import UserProfile from "./UserProfile";

const UsersGrid = () => {
  // State to hold user data
  const [users, setUsers] = useState([]);
  const [isAddNewUser, setIsAddNewUser] = useState(false); // State to toggle screens
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch user data from backend when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://truckbackend-production.up.railway.app/api/users");
        setUsers(response.data); // Set users data to state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Function to handle the button click and show AddNewUser screen
  const handleAddNewUserClick = () => {
    setIsAddNewUser(true);
  };

  const handleCardClick = (user) => {
    setSelectedUser(user); // Navigate to the user detail screen
  };

  const handleBack = () => {
    setSelectedUser(null); // Go back to the grid view
  };

  // Inline styles (no changes needed here)
  const containerStyle = {
    padding: "2px",
    fontFamily: "Arial, sans-serif",
    height: "780px", // Fixed height
    overflowY: "auto", // Make the container scrollable vertically
    position: "relative", // Ensure the container takes up the correct position
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const addUserButtonStyle = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const filtersStyle = {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  };

  const selectStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    textAlign: "center",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center align contents
  };


  const imageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const roleStyle = {
    fontSize: "14px",
    color: "gray",
  };

  const emailStyle = {
    fontSize: "12px",
    color: "#555",
    wordWrap: "break-word", // Break words if they are too long
    textAlign: "center",    // Center-align text
    width: "100%",          // Ensure it fits within the card width
  };

  if (isAddNewUser) {
    return <AddUser />; // If the button is clicked, show AddNewUser screen
  }

  if (selectedUser) {
    return <UserProfile user={selectedUser} onBack={handleBack} />;
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2>Users</h2>
        <button style={addUserButtonStyle} onClick={handleAddNewUserClick}>
          Add New User
        </button>
      </div>
      <div style={filtersStyle}>
        <select style={selectStyle}>
          <option value="all">Status: All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select style={selectStyle}>
          <option value="all">Role: All</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div style={gridStyle}>
        {users.map((user) => (
          <div key={user.id} style={cardStyle}>
            <img
              src={user.profile_pic} // Fetch the Cloudinary image directly
              alt={user.first_name}
              style={imageStyle}
              onClick={() => handleCardClick(user)} // Navigate on card click
            />
            <h3>{user.first_name}</h3>
            <p style={roleStyle}>{user.account_type}</p>
            <p style={emailStyle}>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersGrid;
