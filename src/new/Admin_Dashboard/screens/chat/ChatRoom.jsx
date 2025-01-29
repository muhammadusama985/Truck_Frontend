// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ChatRoom = ({ selectedUser, loggedInUserId }) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [senderColors, setSenderColors] = useState({}); // Store colors for each sender_id

//   useEffect(() => {
//     let interval;

//     const fetchMessages = () => {
//       if (selectedUser) {
//         axios
//           .get(`https://truckbackend-production.up.railway.app/api/chat?user1=${loggedInUserId}&user2=${selectedUser.user_id}`)
//           .then((res) => {
//             setMessages(res.data);

//             // Assign colors dynamically to each sender_id
//             const colors = {};
//             const colorPalette = [
//               "#F28B82", // Red
//               "#FDD835", // Yellow
//               "#A7FFEB", // Teal
//               "#81D4FA", // Light Blue
//               "#D1C4E9", // Purple
//               "#FFAB91", // Orange
//               "#C5E1A5", // Green
//               "#FFCC80", // Peach
//             ];
//             res.data.forEach((msg) => {
//               if (!colors[msg.sender_id]) {
//                 // Assign a color to this sender_id if not already assigned
//                 colors[msg.sender_id] =
//                   colorPalette[Object.keys(colors).length % colorPalette.length];
//               }
//             });
//             setSenderColors(colors);
//           })
//           .catch((err) => console.error("Error fetching messages:", err));
//       }
//     };

//     if (selectedUser) {
//       fetchMessages();
//       interval = setInterval(fetchMessages, 1000);
//     }

//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [selectedUser, loggedInUserId]);

//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       const messageData = {
//         senderId: loggedInUserId,
//         receiverId: selectedUser.user_id,
//         content: newMessage,
//       };

//       axios.post("https://truckbackend-production.up.railway.app/api/chat", messageData).then((res) => {
//         setMessages((prev) => [...prev, res.data]);
//         setNewMessage("");
//       });
//     }
//   };

//   if (!selectedUser) {
//     return <div>Select a user to start a chat</div>;
//   }

//   return (
//     <div style={{ padding: "10px", width: "70%" }}>
//       <h3>Chat with {selectedUser.first_name}</h3>
//       <div
//         style={{
//           height: "300px",
//           overflowY: "scroll",
//           border: "1px solid gray",
//           padding: "5px",
//           borderRadius: "8px",
//           backgroundColor: "#f9f9f9",
//         }}
//       >
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             style={{
//               display: "flex",
//               justifyContent: msg.sender_id === loggedInUserId ? "flex-end" : "flex-start",
//               margin: "10px 0",
//             }}
//           >
//             <div
//               style={{
//                 maxWidth: "60%",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 backgroundColor: senderColors[msg.sender_id],
//                 color: "#fff",
//                 boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
//                 textAlign: "left",
//               }}
//             >
//               <strong
//                 style={{
//                   display: "block",
//                   fontSize: "0.9em",
//                   marginBottom: "5px",
//                 }}
//               >
//                 {msg.sender_id === loggedInUserId
//                   ? "You"
//                   : `${msg.sender_first_name} ${msg.sender_last_name}`}
//               </strong>
//               <span style={{ fontSize: "1em" }}>{msg.content}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//         placeholder="Type a message"
//         style={{
//           width: "80%",
//           padding: "10px",
//           margin: "10px 0",
//           borderRadius: "5px",
//           border: "1px solid #ccc",
//         }}
//       />
//       <button
//         onClick={sendMessage}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#007BFF",
//           color: "#FFF",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Send
//       </button>
//     </div>
//   );
// };

// export default ChatRoom;


import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatRoom = ({ selectedUser, loggedInUserId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let interval;

    const fetchMessages = () => {
      if (selectedUser) {
        axios
          .get(`https://truckbackend-production.up.railway.app/api/chat?user1=${loggedInUserId}&user2=${selectedUser.user_id}`)
          .then((res) => {
            setMessages(res.data);
            scrollToBottom();
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

      axios.post("https://truckbackend-production.up.railway.app/api/chat", messageData)
        .then((res) => {
          setMessages((prev) => [...prev, res.data]);
          setNewMessage("");
          scrollToBottom();
        });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!selectedUser) {
    return (
      <div style={styles.noSelection}>
        <div style={styles.noSelectionContent}>
          <h3>Welcome to Chat</h3>
          <p>Select a user to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.headerTitle}>{selectedUser.first_name}</h3>
        <span style={styles.userType}>{selectedUser.account_type}</span>
      </div>

      <div style={styles.messageContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.messageWrapper,
              justifyContent: msg.sender_id === loggedInUserId ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                ...styles.message,
                ...(msg.sender_id === loggedInUserId ? styles.sentMessage : styles.receivedMessage),
              }}
            >
              <span style={styles.messageContent}>{msg.content}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F5F7FA",
    position: "relative",
  },
  header: {
    padding: "1.5rem",
    backgroundColor: "#fff",
    borderBottom: "1px solid rgba(0, 5, 37, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  headerTitle: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#000525",
  },
  userType: {
    fontSize: "0.875rem",
    color: "rgba(0, 5, 37, 0.6)",
    backgroundColor: "rgba(200, 175, 97, 0.1)",
    padding: "0.25rem 0.75rem",
    borderRadius: "1rem",
  },
  messageContainer: {
    flex: 1,
    padding: "1.5rem",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "#F5F7FA",
  },
  messageWrapper: {
    display: "flex",
    width: "100%",
  },
  message: {
    maxWidth: "60%",
    padding: "1rem",
    borderRadius: "1rem",
    position: "relative",
  },
  sentMessage: {
    backgroundColor: "#000525",
    color: "#F5F7FA",
    marginLeft: "auto",
    borderBottomRightRadius: "0.25rem",
  },
  receivedMessage: {
    backgroundColor: "#fff",
    color: "#000525",
    marginRight: "auto",
    borderBottomLeftRadius: "0.25rem",
    boxShadow: "0 2px 4px rgba(0, 5, 37, 0.05)",
  },
  messageContent: {
    fontSize: "0.95rem",
    lineHeight: "1.5",
    wordBreak: "break-word",
  },
  inputContainer: {
    padding: "1.5rem",
    backgroundColor: "#fff",
    borderTop: "1px solid rgba(0, 5, 37, 0.1)",
    display: "flex",
    gap: "1rem",
  },
  input: {
    flex: 1,
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    border: "1px solid rgba(0, 5, 37, 0.1)",
    fontSize: "0.95rem",
    transition: "all 0.3s ease",
    '&:focus': {
      outline: "none",
      borderColor: "#C8AF61",
      boxShadow: "0 0 0 3px rgba(200, 175, 97, 0.1)",
    },
  },
  sendButton: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#000525",
    color: "#F5F7FA",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.3s ease",
    '&:hover': {
      backgroundColor: "#C8AF61",
      transform: "translateY(-1px)",
    },
  },
  noSelection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F7FA",
  },
  noSelectionContent: {
    textAlign: "center",
    color: "rgba(0, 5, 37, 0.6)",
    '& h3': {
      color: "#000525",
      marginBottom: "0.5rem",
    },
  },
};

export default ChatRoom;
