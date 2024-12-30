import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const loggedInUserId = localStorage.getItem("user_id"); // Get the logged-in user's ID

  useEffect(() => {
    axios.get("https://truckbackend-production.up.railway.app/api/users").then((res) => {
      const filteredUsers = res.data.filter((user) => user.user_id.toString() !== loggedInUserId);
      setUsers(filteredUsers);
    });
  }, [loggedInUserId]);

  return (
    <div
      style={{
        borderRight: "1px solid gray",
        padding: "10px",
        width: "30%",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        overflowY: "auto",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>Users</h3>
      {users.map((user) => (
        <div
          key={user.user_id}
          onClick={() => onSelectUser(user)}
          style={{
            cursor: "pointer",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
        >
          <span style={{ fontWeight: "bold", fontSize: "1.1em", color: "#333" }}>
            {user.first_name}
          </span>
          <span style={{ fontSize: "0.9em", color: "#666" }}>Account Type: {user.account_type}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
