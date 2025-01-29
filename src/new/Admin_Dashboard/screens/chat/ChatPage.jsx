// import React, { useState } from "react";
// import UserList from "./UserList";
// import ChatRoom from "./ChatRoom";

// const ChatPage = () => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const loggedInUserId = localStorage.getItem("user_id");

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <UserList onSelectUser={(user) => setSelectedUser(user)} />
//       <ChatRoom selectedUser={selectedUser} loggedInUserId={loggedInUserId} />
//     </div>
//   );
// };

// export default ChatPage;


import React, { useState } from "react";
import UserList from "./UserList";
import ChatRoom from "./ChatRoom";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const loggedInUserId = localStorage.getItem("user_id");

  return (
    <div style={styles.container}>
      <UserList onSelectUser={(user) => setSelectedUser(user)} />
      <ChatRoom selectedUser={selectedUser} loggedInUserId={loggedInUserId} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "calc(90vh - 40px)",
    backgroundColor: "#F5F7FA",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 5, 37, 0.08)",
    margin: "20px",
  },
};

export default ChatPage;
