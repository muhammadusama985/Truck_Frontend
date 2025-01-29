


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DriverLoads = () => {
//     const [filteredOrders, setFilteredOrders] = useState([]);
//     const [userId, setUserId] = useState(null);
//     const [showPopup, setShowPopup] = useState(false);
//     const [showReceiptPopup, setShowReceiptPopup] = useState(false);
//     const [selectedOrder, setSelectedOrder] = useState(null);
//     const [newStatus, setNewStatus] = useState('');
//     const [receiptFile, setReceiptFile] = useState(null);

//     const styles = {
//         container: {
//             padding: '20px',
//             fontFamily: 'Arial, sans-serif',
//             backgroundColor: '#f9f9f9',
//             borderRadius: '8px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//         },
//         heading: {
//             fontSize: '28px',
//             fontWeight: 'bold',
//             marginBottom: '20px',
//             textAlign: 'left',
//             color: '#333',
//         },
//         table: {
//             width: '100%',
//             borderCollapse: 'collapse',
//             marginTop: '20px',
//             borderRadius: '8px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//         },
//         th: {
//             border: '1px solid #ddd',
//             padding: '12px',
//             textAlign: 'left',
//             backgroundColor: '#4CAF50',
//             color: 'white',
//             fontWeight: 'bold',
//         },
//         td: {
//             border: '1px solid #ddd',
//             padding: '12px',
//             textAlign: 'left',
//         },
//         updateButton: {
//             backgroundColor: '#007bff',
//             color: '#fff',
//             border: 'none',
//             padding: '8px 12px',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '14px',
//             transition: 'background-color 0.3s',
//         },
//         receiptButton: {
//             backgroundColor: '#ffc107',
//             color: '#fff',
//             border: 'none',
//             padding: '8px 12px',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '14px',
//             transition: 'background-color 0.3s',
//         },
//         popupOverlay: {
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             zIndex: 1000,
//             padding: '10px',
//         },
//         popup: {
//             backgroundColor: '#fff',
//             borderRadius: '8px',
//             padding: '20px',
//             width: '100%',
//             maxWidth: '400px',
//             boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '15px',
//         },
//         popupHeading: {
//             fontSize: '20px',
//             fontWeight: 'bold',
//             textAlign: 'center',
//             color: '#333',
//         },
//         popupContent: {
//             fontSize: '16px',
//             lineHeight: '1.5',
//             color: '#555',
//         },
//         popupLabel: {
//             fontWeight: 'bold',
//             marginBottom: '5px',
//         },
//         popupDropdown: {
//             width: '100%',
//             padding: '10px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//             fontSize: '16px',
//         },
//         popupButton: {
//             backgroundColor: '#28a745',
//             color: '#fff',
//             border: 'none',
//             padding: '10px',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             textAlign: 'center',
//         },
//         closeButton: {
//             backgroundColor: '#dc3545',
//             color: '#fff',
//             border: 'none',
//             padding: '10px',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             textAlign: 'center',
//         },
//     };


//     useEffect(() => {
//         const storedUserId = localStorage.getItem('user_id');
//         if (storedUserId) {
//             setUserId(storedUserId);

//             axios.get('https://truckbackend-production.up.railway.app/api/driverOrders')
//                 .then((response) => {
//                     const fetchedOrders = response.data;
//                     const userOrders = fetchedOrders.filter(order => String(order.user_id) === String(storedUserId));
//                     setFilteredOrders(userOrders);
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching orders:', error);
//                     setFilteredOrders([]);
//                 });
//         } else {
//             console.warn('No user ID found in localStorage');
//             setFilteredOrders([]);
//         }
//     }, []);

//     const handleStatusUpdate = () => {
//         if (!selectedOrder) {
//             alert("No order selected!");
//             return;
//         }

//         const payload = {
//             id: selectedOrder.id,
//             status: newStatus,
//         };

//         axios
//             .put('https://truckbackend-production.up.railway.app/api/updateOrderStatus', payload)
//             .then((response) => {
//                 console.log('Status updated successfully:', response.data);

//                 // Update the filteredOrders state to reflect the changes
//                 setFilteredOrders((prevOrders) =>
//                     prevOrders.map((order) =>
//                         order.id === selectedOrder.id
//                             ? { ...order, status: newStatus }
//                             : order
//                     )
//                 );

//                 // Close the popup
//                 setShowPopup(false);
//                 alert("Status updated successfully!");
//             })
//             .catch((error) => {
//                 console.error('Error updating status:', error.response?.data || error.message);
//                 alert("Error updating status. Please try again.");
//             });
//     };

//     // Update the "onClick" event for the "Update" button in the table to open the popup
//     const handleUpdateClick = (order) => {
//         setSelectedOrder(order);
//         setNewStatus(order.status); // Set the current status in the popup
//         setShowPopup(true); // Open the popup
//     };

//     const handleReceiptClick = (order) => {
//         setSelectedOrder(order);
//         setShowReceiptPopup(true);
//     };

//     const handleReceiptUpload = () => {
//         if (!receiptFile) {
//             alert('Please select a file to upload.');
//             return;
//         }

//         const accountType = localStorage.getItem('account_type'); // Retrieve account_type from local storage

//         const formData = new FormData();
//         formData.append('receipt', receiptFile);
//         formData.append('orderId', selectedOrder.id);
//         formData.append('pickupLocation', selectedOrder.pickup_contact_address);
//         formData.append('dropLocation', selectedOrder.delivery_address);
//         formData.append('driverId', selectedOrder.user_id);
//         formData.append('accountType', accountType); // Add account_type to the form data

//         axios
//             .post('https://truckbackend-production.up.railway.app/api/uploadDriverReceipt', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             })
//             .then((response) => {
//                 console.log('Receipt uploaded successfully:', response.data);
//                 alert('Receipt uploaded successfully!');
//                 setShowReceiptPopup(false);
//             })
//             .catch((error) => {
//                 console.error('Error uploading receipt:', error);
//                 alert('Error uploading receipt. Please try again.');
//             });
//     };


//     const statusOptions = ['Pending', 'In Transit', 'Delivered'];

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.heading}>Driver Loads</h1>

//             <table style={styles.table}>
//                 <thead>
//                     <tr>
//                         <th style={styles.th}>Load ID</th>
//                         <th style={styles.th}>Pickup Location</th>
//                         <th style={styles.th}>Delivery Location</th>
//                         <th style={styles.th}>Payment</th>
//                         <th style={styles.th}>Driver ID</th>
//                         <th style={styles.th}>Status</th>
//                         <th style={styles.th}>Actions</th>
//                         <th style={styles.th}>Receipt</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredOrders.length > 0 ? (
//                         filteredOrders.map((order) => (
//                             <tr key={order.id}>
//                                 <td style={styles.td}>{order.id}</td>
//                                 <td style={styles.td}>{order.pickup_contact_address}</td>
//                                 <td style={styles.td}>{order.delivery_address}</td>
//                                 <td style={styles.td}>{order.payment}</td>
//                                 <td style={styles.td}>{order.user_id}</td>
//                                 <td style={styles.td}>{order.status}</td>
//                                 <td style={styles.td}>
//                                     <button
//                                         style={styles.updateButton}
//                                         onClick={() => handleUpdateClick(order)} // Correctly connect to the handleUpdateClick function
//                                     >
//                                         Update
//                                     </button>
//                                 </td>
//                                 <td style={styles.td}>
//                                     <button
//                                         style={styles.receiptButton}
//                                         onClick={() => handleReceiptClick(order)}
//                                     >
//                                         Upload Receipt
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="8" style={styles.td}>
//                                 No orders found.
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>

//             {showPopup && (
//                 <div style={styles.popupOverlay}>
//                     <div style={styles.popup}>
//                         <h2 style={styles.popupHeading}>Update Status</h2>
//                         <div style={styles.popupContent}>
//                             <p><strong>Load ID:</strong> {selectedOrder.id}</p>
//                             <p><strong>Pickup Location:</strong> {selectedOrder.pickup_contact_address}</p>
//                             <p><strong>Delivery Location:</strong> {selectedOrder.delivery_address}</p>
//                             <label style={styles.popupLabel}>New Status:</label>
//                             <select
//                                 style={styles.popupDropdown}
//                                 value={newStatus}
//                                 onChange={(e) => setNewStatus(e.target.value)}
//                             >
//                                 {statusOptions.map((status, index) => (
//                                     <option key={index} value={status}>
//                                         {status}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                         <button style={styles.popupButton} onClick={handleStatusUpdate}>
//                             Save
//                         </button>
//                         <button style={styles.closeButton} onClick={() => setShowPopup(false)}>
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//             )}

// {showReceiptPopup && (
//     <div style={styles.popupOverlay}>
//         <div style={styles.popup}>
//             <h2 style={styles.popupHeading}>Upload Receipt</h2>
//             <div style={styles.popupContent}>
//                 <p><strong>Load ID:</strong> {selectedOrder.id}</p>
//                 <input
//                     type="file"
//                     style={styles.fileInput}
//                     accept="image/png, image/jpeg, image/jpg" // Restrict to image file types
//                     onChange={(e) => setReceiptFile(e.target.files[0])}
//                 />
//             </div>
//             <button style={styles.popupButton} onClick={handleReceiptUpload}>
//                 Upload
//             </button>
//             <button style={styles.closeButton} onClick={() => setShowReceiptPopup(false)}>
//                 Cancel
//             </button>
//         </div>
//     </div>
// )}

//         </div>
//     );
// };

// export default DriverLoads;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
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

const UpdateButton = styled(Button)`
  background-color: #C8AF61;
  color: #000525;
  padding: 8px 12px;
  border-radius: 8px;
  text-transform: none;
  &:hover {
    background-color: #AFAF3A;
  }
`;

const ReceiptButton = styled(Button)`
  background-color: #C8AF61;
  color: #000525;
  padding: 8px 12px;
  border-radius: 8px;
  text-transform: none;
  &:hover {
    background-color: #AFAF3A;
  }
`;

const DriverLoads = () => {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [userId, setUserId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showReceiptPopup, setShowReceiptPopup] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [receiptFile, setReceiptFile] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);

      axios
        .get("https://truckbackend-production.up.railway.app/api/driverOrders")
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

  const handleStatusUpdate = () => {
    if (!selectedOrder) {
      alert("No order selected!");
      return;
    }

    const payload = {
      id: selectedOrder.id,
      status: newStatus,
    };

    axios
      .put(
        "https://truckbackend-production.up.railway.app/api/updateOrderStatus",
        payload
      )
      .then((response) => {
        console.log("Status updated successfully:", response.data);

        // Update the filteredOrders state to reflect the changes
        setFilteredOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === selectedOrder.id
              ? { ...order, status: newStatus }
              : order
          )
        );

        // Close the popup
        setShowPopup(false);
        alert("Status updated successfully!");
      })
      .catch((error) => {
        console.error(
          "Error updating status:",
          error.response?.data || error.message
        );
        alert("Error updating status. Please try again.");
      });
  };

  const handleUpdateClick = (order) => {
    setSelectedOrder(order);
    setNewStatus(order.status); // Set the current status in the popup
    setShowPopup(true); // Open the popup
  };

  const handleReceiptClick = (order) => {
    setSelectedOrder(order);
    setShowReceiptPopup(true);
  };

  const handleReceiptUpload = () => {
    if (!receiptFile) {
      alert("Please select a file to upload.");
      return;
    }

    const accountType = localStorage.getItem("account_type"); // Retrieve account_type from local storage

    const formData = new FormData();
    formData.append("receipt", receiptFile);
    formData.append("orderId", selectedOrder.id);
    formData.append("pickupLocation", selectedOrder.pickup_contact_address);
    formData.append("dropLocation", selectedOrder.delivery_address);
    formData.append("driverId", selectedOrder.user_id);
    formData.append("accountType", accountType); // Add account_type to the form data

    axios
      .post(
        "https://truckbackend-production.up.railway.app/api/uploadDriverReceipt",
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
        setShowReceiptPopup(false);
      })
      .catch((error) => {
        console.error("Error uploading receipt:", error);
        alert("Error uploading receipt. Please try again.");
      });
  };

  const statusOptions = ["Pending", "In Transit", "Delivered"];

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" sx={{ color: '#000525', fontWeight: 'bold', mb: 2 }}>
          Driver Loads
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Load Details</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
              <TableHeaderCell>Receipt</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <StyledTableRow key={order.id}>
                  <StyledTableCell>{order.id}</StyledTableCell>
                  <StyledTableCell>
                    <Typography variant="body1" sx={{ color: '#000525' }}>
                      Pickup Location: {order.pickup_contact_address}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#000525' }}>
                      Delivery Location: {order.delivery_address}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#000525' }}>
                      Payment: {order.payment}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#000525' }}>
                      Driver ID: {order.user_id}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#000525' }}>
                      Status: {order.status}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <UpdateButton onClick={() => handleUpdateClick(order)}>Update</UpdateButton>
                  </StyledTableCell>
                  <StyledTableCell>
                    <ReceiptButton onClick={() => handleReceiptClick(order)}>Upload Receipt</ReceiptButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={4} align="center">No loads available.</StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledPaper>

      {showPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '10px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', width: '100%', maxWidth: '400px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Typography variant="h6" sx={{ color: '#333', fontWeight: 'bold', textAlign: 'center' }}>
              Update Status
            </Typography>
            <div>
              <Typography variant="body1" sx={{ color: '#555' }}>
                <strong>Load ID:</strong> {selectedOrder.id}
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                <strong>Pickup Location:</strong> {selectedOrder.pickup_contact_address}
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                <strong>Delivery Location:</strong> {selectedOrder.delivery_address}
              </Typography>
              <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                New Status:
              </label>
              <select
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              >
                {statusOptions.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <Button
              style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', textAlign: 'center' }}
              onClick={handleStatusUpdate}
            >
              Save
            </Button>
            <Button
              style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', textAlign: 'center' }}
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {showReceiptPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '10px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', width: '100%', maxWidth: '400px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Typography variant="h6" sx={{ color: '#333', fontWeight: 'bold', textAlign: 'center' }}>
              Upload Receipt
            </Typography>
            <div>
              <Typography variant="body1" sx={{ color: '#555' }}>
                <strong>Load ID:</strong> {selectedOrder.id}
              </Typography>
              <input
                type="file"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => setReceiptFile(e.target.files[0])}
              />
            </div>
            <Button
              style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', textAlign: 'center' }}
              onClick={handleReceiptUpload}
            >
              Upload
            </Button>
            <Button
              style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', textAlign: 'center' }}
              onClick={() => setShowReceiptPopup(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </StyledContainer>
  );
};

export default DriverLoads;
