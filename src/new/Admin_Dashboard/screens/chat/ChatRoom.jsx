import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatRoom = ({ selectedUser, loggedInUserId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [senderColors, setSenderColors] = useState({}); // Store colors for each sender_id

  useEffect(() => {
    let interval;

    const fetchMessages = () => {
      if (selectedUser) {
        axios
          .get(`https://truckbackend-production.up.railway.app/api/chat?user1=${loggedInUserId}&user2=${selectedUser.user_id}`)
          .then((res) => {
            setMessages(res.data);

            // Assign colors dynamically to each sender_id
            const colors = {};
            const colorPalette = [
              "#F28B82", // Red
              "#FDD835", // Yellow
              "#A7FFEB", // Teal
              "#81D4FA", // Light Blue
              "#D1C4E9", // Purple
              "#FFAB91", // Orange
              "#C5E1A5", // Green
              "#FFCC80", // Peach
            ];
            res.data.forEach((msg) => {
              if (!colors[msg.sender_id]) {
                // Assign a color to this sender_id if not already assigned
                colors[msg.sender_id] =
                  colorPalette[Object.keys(colors).length % colorPalette.length];
              }
            });
            setSenderColors(colors);
          })
          .catch((err) => console.error("Error fetching messages:", err));
      }
    };

    if (selectedUser) {
      fetchMessages();
      interval = setInterval(fetchMessages, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [selectedUser, loggedInUserId]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const messageData = {
        senderId: loggedInUserId,
        receiverId: selectedUser.user_id,
        content: newMessage,
      };

      axios.post("https://truckbackend-production.up.railway.app/api/chat", messageData).then((res) => {
        setMessages((prev) => [...prev, res.data]);
        setNewMessage("");
      });
    }
  };

  if (!selectedUser) {
    return <div>Select a user to start a chat</div>;
  }

  return (
    <div style={{ padding: "10px", width: "70%" }}>
      <h3>Chat with {selectedUser.first_name}</h3>
      <div
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid gray",
          padding: "5px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: msg.sender_id === loggedInUserId ? "flex-end" : "flex-start",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                maxWidth: "60%",
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: senderColors[msg.sender_id],
                color: "#fff",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontSize: "0.9em",
                  marginBottom: "5px",
                }}
              >
                {msg.sender_id === loggedInUserId
                  ? "You"
                  : `${msg.sender_first_name} ${msg.sender_last_name}`}
              </strong>
              <span style={{ fontSize: "1em" }}>{msg.content}</span>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
        style={{
          width: "80%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatRoom;
