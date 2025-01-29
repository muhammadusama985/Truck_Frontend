// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UserList = ({ onSelectUser }) => {
//   const [users, setUsers] = useState([]);
//   const loggedInUserId = localStorage.getItem("user_id"); // Get the logged-in user's ID

//   useEffect(() => {
//     axios.get("https://truckbackend-production.up.railway.app/api/users").then((res) => {
//       const filteredUsers = res.data.filter((user) => user.user_id.toString() !== loggedInUserId);
//       setUsers(filteredUsers);
//     });
//   }, [loggedInUserId]);

//   return (
//     <div
//       style={{
//         borderRight: "1px solid gray",
//         padding: "10px",
//         width: "30%",
//         height: "100vh",
//         backgroundColor: "#f9f9f9",
//         overflowY: "auto",
//       }}
//     >
//       <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>Users</h3>
//       {users.map((user) => (
//         <div
//           key={user.user_id}
//           onClick={() => onSelectUser(user)}
//           style={{
//             cursor: "pointer",
//             margin: "10px 0",
//             padding: "10px",
//             borderRadius: "8px",
//             backgroundColor: "#fff",
//             boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             transition: "background-color 0.2s",
//           }}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
//         >
//           <span style={{ fontWeight: "bold", fontSize: "1.1em", color: "#333" }}>
//             {user.first_name}
//           </span>
//           <span style={{ fontSize: "0.9em", color: "#666" }}>Account Type: {user.account_type}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserList;


import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const loggedInUserId = localStorage.getItem("user_id");

  useEffect(() => {
    axios.get("https://truckbackend-production.up.railway.app/api/users").then((res) => {
      const filteredUsers = res.data.filter((user) => user.user_id.toString() !== loggedInUserId);
      setUsers(filteredUsers);
    });
  }, [loggedInUserId]);

  const handleUserSelect = (user) => {
    setSelectedUserId(user.user_id);
    onSelectUser(user);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Messages</h3>
      <div style={styles.userList}>
        {users.map((user) => (
          <div
            key={user.user_id}
            onClick={() => handleUserSelect(user)}
            style={{
              ...styles.userCard,
              ...(selectedUserId === user.user_id ? styles.selectedUser : {}),
            }}
          >
            <div style={styles.userAvatar}>
              {user.first_name.charAt(0).toUpperCase()}
            </div>
            <div style={styles.userInfo}>
              <span style={styles.userName}>{user.first_name}</span>
              <span style={styles.userType}>{user.account_type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    height: "100%",
    backgroundColor: "#000525",
    color: "#F5F7FA",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "1.5rem",
    color: "#C8AF61",
    textAlign: "left",
  },
  userList: {
    overflowY: "auto",
    flex: 1,
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'rgba(245, 247, 250, 0.1)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#C8AF61',
      borderRadius: '3px',
    },
  },
  userCard: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    marginBottom: "0.5rem",
    borderRadius: "0.75rem",
    cursor: "pointer",
    backgroundColor: "rgba(245, 247, 250, 0.05)",
    transition: "all 0.3s ease",
    '&:hover': {
      backgroundColor: "rgba(200, 175, 97, 0.1)",
      transform: "translateX(5px)",
    },
  },
  selectedUser: {
    backgroundColor: "rgba(200, 175, 97, 0.2)",
    borderLeft: "3px solid #C8AF61",
  },
  userAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#C8AF61",
    color: "#000525",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: "1.2rem",
    marginRight: "1rem",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    fontWeight: "500",
    fontSize: "1rem",
    marginBottom: "0.25rem",
  },
  userType: {
    fontSize: "0.85rem",
    color: "rgba(245, 247, 250, 0.6)",
  },
};

export default UserList;
