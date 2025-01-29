// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MyLoads = () => {
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [userId, setUserId] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [receiptFile, setReceiptFile] = useState(null);

//   const styles = {
//     container: {
//       padding: "20px",
//       fontFamily: "'Roboto', sans-serif",
//       backgroundColor: "#f7f7f7",
//       borderRadius: "10px",
//       boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
//       border: "2px solidrgba(134, 128, 128, 0.59)",
//       maxWidth: "1200px",
//       margin: "20px auto",
//     },
//     heading: {
//       fontSize: "28px",
//       fontWeight: "600",
//       marginBottom: "20px",
//       textAlign: "center",
//       color: "#333",
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//       marginTop: "20px",
//       border: "2px solid #d3d3d3",
//       borderRadius: "8px",
//       overflow: "hidden",
//       boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//     },
//     th: {
//       border: "1px solid #ddd",
//       padding: "12px",
//       textAlign: "left",
//       backgroundColor: "#007bff",
//       color: "white",
//       fontWeight: "bold",
//       fontSize: "16px",
//     },
//     td: {
//       border: "2px solid #ddd",
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "14px",
//       transition: "background-color 0.3s",
//     },
//     button: {
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       padding: "8px 12px",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "14px",
//       transition: "background-color 0.3s",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     popupOverlay: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       backgroundColor: "rgba(0, 0, 0, 0.6)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       zIndex: 1000,
//     },
//     popup: {
//       backgroundColor: "#fff",
//       borderRadius: "10px",
//       padding: "30px",
//       width: "400px",
//       boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
//       textAlign: "center",
//       border: "2px solid #d3d3d3",
//     },
//     popupButton: {
//       backgroundColor: "#28a745",
//       color: "#fff",
//       border: "none",
//       padding: "10px 20px",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "16px",
//       margin: "10px 5px",
//     },
//     closeButton: {
//       backgroundColor: "#dc3545",
//       color: "#fff",
//       border: "none",
//       padding: "10px 20px",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "16px",
//       margin: "10px 5px",
//     },
//   };

//   useEffect(() => {
//     const storedUserId = localStorage.getItem("user_id");
//     if (storedUserId) {
//       setUserId(storedUserId);

//       axios
//         .get("https://truckbackend-production.up.railway.app/api/myOrders")
//         .then((response) => {
//           const fetchedOrders = response.data;
//           const userOrders = fetchedOrders.filter(
//             (order) => String(order.user_id) === String(storedUserId)
//           );
//           setFilteredOrders(userOrders);
//         })
//         .catch((error) => {
//           console.error("Error fetching orders:", error);
//           setFilteredOrders([]);
//         });
//     } else {
//       console.warn("No user ID found in localStorage");
//       setFilteredOrders([]);
//     }
//   }, []);

//   const handleUploadClick = (order) => {
//     setSelectedOrder(order);
//     setShowPopup(true);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];

//     if (file && !file.type.startsWith("image/")) {
//       alert("Please upload a valid image file (e.g., PNG, JPG, JPEG).");
//       setReceiptFile(null);
//       event.target.value = "";
//       return;
//     }

//     setReceiptFile(file);
//   };

//   const handleReceiptUpload = () => {
//     if (!receiptFile) {
//       alert("Please select a file to upload.");
//       return;
//     }

//     const accountType = localStorage.getItem("account_type");

//     const formData = new FormData();
//     formData.append("receipt", receiptFile);
//     formData.append("orderId", selectedOrder.id);
//     formData.append("pickupLocation", selectedOrder.pickup_contact_address);
//     formData.append("dropLocation", selectedOrder.delivery_address);
//     formData.append("driverId", selectedOrder.user_id);
//     formData.append("accountType", accountType);

//     axios
//       .post(
//         "https://truckbackend-production.up.railway.app/api/uploadUserReceipt",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       )
//       .then((response) => {
//         console.log("Receipt uploaded successfully:", response.data);
//         alert("Receipt uploaded successfully!");
//         setShowPopup(false);
//         setReceiptFile(null);
//       })
//       .catch((error) => {
//         console.error("Error uploading receipt:", error);
//         alert("Error uploading receipt. Please try again.");
//       });
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>My Orders</h1>

//       <div style={{ overflowX: "auto", maxHeight: "400px" }}>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>Load ID</th>
//               <th style={styles.th}>Pickup Location</th>
//               <th style={styles.th}>Delivery Location</th>
//               <th style={styles.th}>Payment</th>
//               <th style={styles.th}>Driver ID</th>
//               <th style={styles.th}>Status</th>
//               <th style={styles.th}>Receipt</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOrders.length > 0 ? (
//               filteredOrders.map((order) => (
//                 <tr key={order.id}>
//                   <td style={styles.td}>{order.id}</td>
//                   <td style={styles.td}>{order.pickup_contact_address}</td>
//                   <td style={styles.td}>{order.delivery_address}</td>
//                   <td style={styles.td}>{order.payment}</td>
//                   <td style={styles.td}>{order.user_id}</td>
//                   <td style={styles.td}>{order.status}</td>
//                   <td style={styles.td}>
//                     <button
//                       style={styles.button}
//                       onClick={() => handleUploadClick(order)}
//                     >
//                       Upload Receipt
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" style={styles.td}>
//                   No orders found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {showPopup && (
//         <div style={styles.popupOverlay}>
//           <div style={styles.popup}>
//             <h2>Upload Receipt</h2>
//             <input type="file" onChange={handleFileChange} />
//             <br />
//             <br />
//             <button style={styles.popupButton} onClick={handleReceiptUpload}>
//               Upload
//             </button>
//             <button
//               style={styles.closeButton}
//               onClick={() => setShowPopup(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyLoads;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, Dialog, DialogTitle, DialogContent, DialogActions, Input } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Box)`
  height: calc(100vh - 40px);
  padding: 20px;
  background-color: #F5F7FA;
  overflow: hidden;
`;

const StyledPaper = styled(Paper)`
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 5, 37, 0.08);
`;

const TableHeaderCell = styled(TableCell)`
  background-color: #000525;
  color: #F5F7FA;
  font-weight: 600;
  padding: 12px;
`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 5, 37, 0.02);
  }
  &:hover {
    background-color: rgba(200, 175, 97, 0.1);
  }
`;

const StyledTableCell = styled(TableCell)`
  padding: 12px;
  color: #000525;
  border-bottom: 1px solid rgba(0, 5, 37, 0.08);
`;

const StyledButton = styled(Button)`
  background-color: #C8AF61;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #A88B3D;
  }
`;

const StyledDialogButton = styled(Button)`
  background-color: #C8AF61;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #A88B3D;
  }
`;

const StyledCancelButton = styled(Button)`
  background-color: #DC3545;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #C82333;
  }
`;

const MyLoads = () => {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [userId, setUserId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [receiptFile, setReceiptFile] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);

      axios
        .get("https://truckbackend-production.up.railway.app/api/myOrders")
        .then((response) => {
          const fetchedOrders = response.data;
          const userOrders = fetchedOrders.filter(
            (order) => String(order.user_id) === String(storedUserId)
          );
          setFilteredOrders(userOrders);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
          setFilteredOrders([]);
        });
    } else {
      console.warn("No user ID found in localStorage");
      setFilteredOrders([]);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && !file.type.startsWith("image/")) {
      alert("Please upload a valid image file (e.g., PNG, JPG, JPEG).");
      setReceiptFile(null);
      event.target.value = "";
      return;
    }

    setReceiptFile(file);
  };

  const handleReceiptUpload = () => {
    if (!receiptFile) {
      alert("Please select a file to upload.");
      return;
    }

    const accountType = localStorage.getItem("account_type");

    const formData = new FormData();
    formData.append("receipt", receiptFile);
    formData.append("orderId", selectedOrder.id);
    formData.append("pickupLocation", selectedOrder.pickup_contact_address);
    formData.append("dropLocation", selectedOrder.delivery_address);
    formData.append("driverId", selectedOrder.user_id);
    formData.append("accountType", accountType);

    axios
      .post(
        "https://truckbackend-production.up.railway.app/api/uploadUserReceipt",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log("Receipt uploaded successfully:", response.data);
        alert("Receipt uploaded successfully!");
        setShowPopup(false);
        setReceiptFile(null);
      })
      .catch((error) => {
        console.error("Error uploading receipt:", error);
        alert("Error uploading receipt. Please try again.");
      });
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" sx={{ color: '#000525', fontWeight: 'bold', mb: 2 }}>
          My Loads
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Load ID</TableHeaderCell>
              <TableHeaderCell>Pickup Location</TableHeaderCell>
              <TableHeaderCell>Delivery Location</TableHeaderCell>
              <TableHeaderCell>Payment</TableHeaderCell>
              <TableHeaderCell>Driver ID</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <StyledTableRow key={order.id}>
                  <StyledTableCell>{order.id}</StyledTableCell>
                  <StyledTableCell>{order.pickup_contact_address}</StyledTableCell>
                  <StyledTableCell>{order.delivery_address}</StyledTableCell>
                  <StyledTableCell>{order.payment}</StyledTableCell>
                  <StyledTableCell>{order.user_id}</StyledTableCell>
                  <StyledTableCell>{order.status}</StyledTableCell>
                  <StyledTableCell>
                    <StyledButton onClick={() => { setSelectedOrder(order); setShowPopup(true); }}>Upload Receipt</StyledButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={7} align="center">No orders found.</StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledPaper>

      <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
        <DialogTitle>Upload Receipt</DialogTitle>
        <DialogContent>
          <Input type="file" onChange={handleFileChange} />
        </DialogContent>
        <DialogActions>
          <StyledCancelButton onClick={() => setShowPopup(false)}>Cancel</StyledCancelButton>
          <StyledDialogButton onClick={handleReceiptUpload}>Upload</StyledDialogButton>
        </DialogActions>
      </Dialog>
    </StyledContainer>
  );
};

export default MyLoads;
