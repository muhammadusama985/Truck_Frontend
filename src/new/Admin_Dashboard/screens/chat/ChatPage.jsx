import React, { useState } from "react";
import UserList from "./UserList";
import ChatRoom from "./ChatRoom";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const loggedInUserId = localStorage.getItem("user_id");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <UserList onSelectUser={(user) => setSelectedUser(user)} />
      <ChatRoom selectedUser={selectedUser} loggedInUserId={loggedInUserId} />
    </div>
  );
};

export default ChatPage;
