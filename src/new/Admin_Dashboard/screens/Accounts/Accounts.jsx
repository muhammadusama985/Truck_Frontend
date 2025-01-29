// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Accounts = () => {
//   const [receipts, setReceipts] = useState([]);

//   const styles = {
//     container: {
//       border: "1px",
//       padding: "40px",
//       fontFamily: "Tinos, sans-serif",
//       backgroundColor: "#345259",
//       borderRadius: "8px",
//       boxShadow: "0 4px 20px rgb(4, 53, 58)",
//     },
//     heading: {
//       fontSize: "40px",
//       fontWeight: "bold",
//       marginBottom: "20px",
//       textAlign: "left",
//       color: "#BFBDB0",
//     },
//     table: {
//       borderRadius: "50px",
//       width: "100%",
//       borderCollapse: "collapse",
//       marginTop: "20px",
//       borderRadius: "8px",
//       boxShadow: "0 2px 10px rgba(176, 94, 49, 0.84)",
//     },
//     th: {
//       border: "1px solid #ddd",
//       padding: "12px",
//       textAlign: "left",
//       backgroundColor: "#8C3A3A",
//       color: "#F2F2F2",
//       fontWeight: "bold",
//     },
//     td: {
//       border: "1px solid #BFBDB0",
//       padding: "12px",
//       textAlign: "left",
//     },
//     receiptLink: {
//       color: "#007bff",
//       textDecoration: "none",
//       cursor: "pointer",
//     },
//     actionButton: {
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       padding: "8px 12px",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "14px",
//       transition: "background-color 0.3s",
//     },
//   };

//   useEffect(() => {
//     axios
//       .get("https://truckbackend-production.up.railway.app/api/allReceipts")
//       .then((response) => {
//         setReceipts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching receipts:", error);
//       });
//   }, []);

//   const handleTransferFunds = (receiptId) => {
//     alert(`Transfer funds action triggered for Receipt ID: ${receiptId}`);
//     // Add your logic to handle fund transfers here.
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>All Receipts</h1>

//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>ID</th>
//             <th style={styles.th}>Order ID</th>
//             <th style={styles.th}>Pickup Location</th>
//             <th style={styles.th}>Drop Location</th>
//             <th style={styles.th}>User ID</th>
//             <th style={styles.th}>Account Type</th>
//             <th style={styles.th}>Receipt</th>
//             <th style={styles.th}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {receipts.length > 0 ? (
//             receipts.map((receipt) => (
//               <tr key={receipt.id}>
//                 <td style={styles.td}>{receipt.id}</td>
//                 <td style={styles.td}>{receipt.order_id}</td>
//                 <td style={styles.td}>{receipt.pickup_location}</td>
//                 <td style={styles.td}>{receipt.drop_location}</td>
//                 <td style={styles.td}>{receipt.user_id}</td>
//                 <td style={styles.td}>{receipt.account_type}</td>
//                 <td style={styles.td}>
//                   <a
//                     href={receipt.receipt_path} // Only handle image URLs
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={styles.receiptLink}
//                   >
//                     View Image
//                   </a>
//                 </td>

//                 <td style={styles.td}>
//                   <button
//                     style={styles.actionButton}
//                     onClick={() => handleTransferFunds(receipt.id)}
//                   >
//                     Transfer Funds
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" style={styles.td}>
//                 No receipts found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Accounts;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton } from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Box)`
  height: calc(100vh - 40px);
  padding: 20px;
  background-color: #F5F7FA;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const StyledPaper = styled(Paper)`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 5, 37, 0.08);
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TableHeaderCell = styled(TableCell)`
  background-color: #000525;
  color: #F5F7FA;
  font-weight: 600;
  padding: 16px;
  font-size: 0.95rem;
  white-space: nowrap;
  border-bottom: none;
  &:first-of-type {
    border-top-left-radius: 12px;
  }
  &:last-child {
    border-top-right-radius: 12px;
  }
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
  padding: 12px 16px;
  font-size: 0.9rem;
  color: #000525;
  border-bottom: 1px solid rgba(0, 5, 37, 0.08);
`;

const ViewButton = styled(Button)`
  color: #000525;
  background-color: rgba(200, 175, 97, 0.1);
  padding: 6px 12px;
  font-size: 0.85rem;
  border-radius: 8px;
  text-transform: none;
  
  &:hover {
    background-color: rgba(200, 175, 97, 0.2);
  }
`;

const TransferButton = styled(Button)`
  background-color: #000525;
  color: #F5F7FA;
  padding: 6px 16px;
  font-size: 0.85rem;
  border-radius: 8px;
  text-transform: none;
  
  &:hover {
    background-color: #C8AF61;
  }
`;

const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(0, 5, 37, 0.08);
`;

const Accounts = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    axios
      .get("https://truckbackend-production.up.railway.app/api/allReceipts")
      .then((response) => {
        setReceipts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching receipts:", error);
      });
  }, []);

  const handleTransferFunds = (receiptId) => {
    alert(`Transfer funds action triggered for Receipt ID: ${receiptId}`);
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <HeaderBox>
          <Typography
            variant="h5"
            sx={{
              color: '#000525',
              fontWeight: 600,
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <ReceiptIcon sx={{ color: '#C8AF61', fontSize: '1.8rem' }} />
            All Receipts
          </Typography>
        </HeaderBox>

        <TableContainer sx={{ flex: 1, overflow: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Order ID</TableHeaderCell>
                <TableHeaderCell>Pickup Location</TableHeaderCell>
                <TableHeaderCell>Drop Location</TableHeaderCell>
                <TableHeaderCell>User ID</TableHeaderCell>
                <TableHeaderCell>Account Type</TableHeaderCell>
                <TableHeaderCell>Receipt</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {receipts.length > 0 ? (
                receipts.map((receipt) => (
                  <StyledTableRow key={receipt.id}>
                    <StyledTableCell>{receipt.id}</StyledTableCell>
                    <StyledTableCell>{receipt.order_id}</StyledTableCell>
                    <StyledTableCell>{receipt.pickup_location}</StyledTableCell>
                    <StyledTableCell>{receipt.drop_location}</StyledTableCell>
                    <StyledTableCell>{receipt.user_id}</StyledTableCell>
                    <StyledTableCell>{receipt.account_type}</StyledTableCell>
                    <StyledTableCell>
                      <ViewButton
                        href={receipt.receipt_path}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<ReceiptIcon />}
                      >
                        View
                      </ViewButton>
                    </StyledTableCell>
                    <StyledTableCell>
                      <TransferButton
                        onClick={() => handleTransferFunds(receipt.id)}
                        startIcon={<SendIcon />}
                      >
                        Transfer
                      </TransferButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={8} align="center">
                    No receipts found.
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Accounts;
