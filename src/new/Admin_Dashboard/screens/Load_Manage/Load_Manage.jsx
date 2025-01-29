// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaFilter } from 'react-icons/fa';

// const ManageLoads = () => {
//     const [orders, setOrders] = useState([]);
//     const [filterText, setFilterText] = useState('');
//     const [pickupLocation, setPickupLocation] = useState('');
//     const [deliveryLocation, setDeliveryLocation] = useState('');
//     const [userId, setUserId] = useState('');
//     const [filteredOrders, setFilteredOrders] = useState([]);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axios.get('https://truckbackend-production.up.railway.app/api/assigned_orders');
//                 setOrders(response.data);
//                 setFilteredOrders(response.data);
//             } catch (error) {
//                 console.error('Error fetching orders:', error);
//             }
//         };

//         fetchOrders();
//     }, []);

//     useEffect(() => {
//         setFilteredOrders(
//             orders.filter((order) => 
//                 order.trip_name.toLowerCase().includes(filterText.toLowerCase()) &&
//                 order.pickup_location.toLowerCase().includes(pickupLocation.toLowerCase()) &&
//                 order.delivery_location.toLowerCase().includes(deliveryLocation.toLowerCase()) &&
//                 order.user_id.toString().includes(userId)
//             )
//         );
//     }, [filterText, pickupLocation, deliveryLocation, userId, orders]);

//     const resetFilters = () => {
//         setFilterText('');
//         setPickupLocation('');
//         setDeliveryLocation('');
//         setUserId('');
//     };

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
//         filterContainer: {
//             display: 'flex',
//             gap: '10px',
//             marginBottom: '20px',
//             justifyContent: 'space-between',
//         },
//         dropdownContainer: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '5px',
//             flex: '1',
//         },
//         dropdown: {
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//             width: '100%',
//             fontSize: '16px',
//         },
//         resetButton: {
//             backgroundColor: '#ff4d4d',
//             color: '#fff',
//             border: 'none',
//             padding: '10px 15px',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '16px',
//             transition: 'background-color 0.3s',
//         },
//         resetButtonHover: {
//             backgroundColor: '#e63939',
//         },
//         table: {
//             width: '100%',
//             borderCollapse: 'collapse',
//             marginTop: '20px',
//             overflowX: 'auto',
//             borderRadius: '8px',
//             overflow: 'hidden',
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
//             transition: 'background-color 0.3s',
//         },
//         trHover: {
//             backgroundColor: '#f1f1f1',
//         },
//         noOrders: {
//             textAlign: 'center',
//             padding: '20px',
//             color: '#777',
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.heading}>Manage Loads</h1>
//             <div style={styles.filterContainer}>
//                 <div style={styles.dropdownContainer}>
//                     <FaFilter />
//                     <input
//                         type="text"
//                         placeholder="Filter by Trip Name"
//                         style={styles.dropdown}
//                         value={filterText}
//                         onChange={(e) => setFilterText(e.target.value)}
//                     />
//                 </div>
//                 <div style={styles.dropdownContainer}>
//                     <input
//                         type="text"
//                         placeholder="Pickup Location"
//                         style={styles.dropdown}
//                         value={pickupLocation}
//                         onChange={(e) => setPickupLocation(e.target.value)}
//                     />
//                 </div>
//                 <div style={styles.dropdownContainer}>
//                     <input
//                         type="text"
//                         placeholder="Delivery Location"
//                         style={styles.dropdown}
//                         value={deliveryLocation}
//                         onChange={(e) => setDeliveryLocation(e.target.value)}
//                     />
//                 </div>
//                 <div style={styles.dropdownContainer}>
//                     <input
//                         type="text"
//                         placeholder="Driver ID"
//                         style={styles.dropdown}
//                         value={userId}
//                         onChange={(e) => setUserId(e.target.value)}
//                     />
//                 </div>
//                 <button
//                     style={styles.resetButton}
//                     onClick={resetFilters}
//                     onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.resetButtonHover.backgroundColor}
//                     onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.resetButton.backgroundColor}
//                 >
//                     Reset Filter
//                 </button>
//             </div>

//             <div style={{ overflowX: 'auto', maxHeight: '400px' }}>
//                 <table style={styles.table}>
//                     <thead>
//                         <tr>
//                             <th style={styles.th}>ID</th>
//                             <th style={styles.th}>Trip Name</th>
//                             <th style={styles.th}>Pickup Location</th>
//                             <th style={styles.th}>Delivery Location</th>
//                             <th style={styles.th}>Payment</th>
//                             <th style={styles.th}>Driver ID</th>
//                             <th style={styles.th}>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredOrders.length > 0 ? (
//                             filteredOrders.map((order) => (
//                                 <tr key={order.id} style={{ transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
//                                     <td style={styles.td}>{order.id}</td>
//                                     <td style={styles.td}>{order.trip_name}</td>
//                                     <td style={styles.td}>{order.pickup_location}</td>
//                                     <td style={styles.td}>{order.delivery_location}</td>
//                                     <td style={styles.td}>{order.payment}</td>
//                                     <td style={styles.td}>{order.user_id}</td>
//                                     <td style={styles.td}>{order.status}</td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="6" style={styles.noOrders}>
//                                     No orders found.
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManageLoads;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow, Button, InputBase } from '@mui/material';
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

const ResetButton = styled(Button)`
  background-color: #ff4d4d;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e63939;
  }
`;

const StyledInput = styled(InputBase)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
`;

const ManageLoads = () => {
  const [orders, setOrders] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [userId, setUserId] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://truckbackend-production.up.railway.app/api/assigned_orders');
        setOrders(response.data);
        setFilteredOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    setFilteredOrders(
      orders.filter((order) => 
        order.trip_name.toLowerCase().includes(filterText.toLowerCase()) &&
        order.pickup_location.toLowerCase().includes(pickupLocation.toLowerCase()) &&
        order.delivery_location.toLowerCase().includes(deliveryLocation.toLowerCase()) &&
        order.user_id.toString().includes(userId)
      )
    );
  }, [filterText, pickupLocation, deliveryLocation, userId, orders]);

  const resetFilters = () => {
    setFilterText('');
    setPickupLocation('');
    setDeliveryLocation('');
    setUserId('');
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" sx={{ color: '#000525', fontWeight: 'bold', mb: 2 }}>
          Manage Loads
        </Typography>

        <Box sx={{ display: 'flex', gap: '10px', mb: 2 }}>
          <StyledInput
            type="text"
            placeholder="Filter by Trip Name"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Pickup Location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Delivery Location"
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Driver ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <ResetButton onClick={resetFilters}>Reset </ResetButton>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Load ID</TableHeaderCell>
              <TableHeaderCell>Pickup Location</TableHeaderCell>
              <TableHeaderCell>Delivery Location</TableHeaderCell>
              <TableHeaderCell>Payment</TableHeaderCell>
              <TableHeaderCell>Driver ID</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
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
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={6} align="center">No loads available.</StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledPaper>
    </StyledContainer>
  );
};

export default ManageLoads;