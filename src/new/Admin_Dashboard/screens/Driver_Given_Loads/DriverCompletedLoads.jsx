// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DriverCompletedLoads = () => {
//     const [filteredOrders, setFilteredOrders] = useState([]);
//     const [userId, setUserId] = useState(null);

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
//     };

//     useEffect(() => {
//         const storedUserId = localStorage.getItem('user_id');
//         if (storedUserId) {
//             setUserId(storedUserId);

//             axios.get('https://truckbackend-production.up.railway.app/api/driverOrders')
//                 .then((response) => {
//                     const fetchedOrders = response.data;
//                     const userOrders = fetchedOrders.filter(
//                         order => String(order.user_id) === String(storedUserId) && order.status === 'Delivered'
//                     );
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

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.heading}>Driver Completed Loads</h1>

//             <table style={styles.table}>
//                 <thead>
//                     <tr>
//                         <th style={styles.th}>Load ID</th>
//                         <th style={styles.th}>Pickup Location</th>
//                         <th style={styles.th}>Delivery Location</th>
//                         <th style={styles.th}>Payment</th>
//                         <th style={styles.th}>Driver ID</th>
//                         <th style={styles.th}>Status</th>
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
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="6" style={styles.td}>
//                                 No orders found.
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default DriverCompletedLoads;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
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

const DriverCompletedLoads = () => {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);

      axios
        .get("https://truckbackend-production.up.railway.app/api/driverOrders")
        .then((response) => {
          const fetchedOrders = response.data;
          const userOrders = fetchedOrders.filter(
            (order) =>
              String(order.user_id) === String(storedUserId) &&
              order.status === "Delivered"
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

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" sx={{ color: '#000525', fontWeight: 'bold', mb: 2 }}>
          Driver Completed Loads
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
                <StyledTableCell colSpan={6} align="center">No completed loads available.</StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledPaper>
    </StyledContainer>
  );
};

export default DriverCompletedLoads;
