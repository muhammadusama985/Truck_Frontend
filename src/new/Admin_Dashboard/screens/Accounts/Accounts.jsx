import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accounts = () => {
    const [receipts, setReceipts] = useState([]);

    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'left',
            color: '#333',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        th: {
            border: '1px solid #ddd',
            padding: '12px',
            textAlign: 'left',
            backgroundColor: '#4CAF50',
            color: 'white',
            fontWeight: 'bold',
        },
        td: {
            border: '1px solid #ddd',
            padding: '12px',
            textAlign: 'left',
        },
        receiptLink: {
            color: '#007bff',
            textDecoration: 'none',
            cursor: 'pointer',
        },
        actionButton: {
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'background-color 0.3s',
        },
    };

    useEffect(() => {
        axios.get('https://truckbackend-production.up.railway.app/api/allReceipts')
            .then((response) => {
                setReceipts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching receipts:', error);
            });
    }, []);

    const handleTransferFunds = (receiptId) => {
        alert(`Transfer funds action triggered for Receipt ID: ${receiptId}`);
        // Add your logic to handle fund transfers here.
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>All Receipts</h1>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>ID</th>
                        <th style={styles.th}>Order ID</th>
                        <th style={styles.th}>Pickup Location</th>
                        <th style={styles.th}>Drop Location</th>
                        <th style={styles.th}>User ID</th>
                        <th style={styles.th}>Account Type</th>
                        <th style={styles.th}>Receipt</th>
                        <th style={styles.th}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {receipts.length > 0 ? (
                        receipts.map((receipt) => (
                            <tr key={receipt.id}>
                                <td style={styles.td}>{receipt.id}</td>
                                <td style={styles.td}>{receipt.order_id}</td>
                                <td style={styles.td}>{receipt.pickup_location}</td>
                                <td style={styles.td}>{receipt.drop_location}</td>
                                <td style={styles.td}>{receipt.user_id}</td>
                                <td style={styles.td}>{receipt.account_type}</td>
                                <td style={styles.td}>
    <a
        href={receipt.receipt_path} // Only handle image URLs
        target="_blank"
        rel="noopener noreferrer"
        style={styles.receiptLink}
    >
        View Image
    </a>
</td>


                                <td style={styles.td}>
                                    <button
                                        style={styles.actionButton}
                                        onClick={() => handleTransferFunds(receipt.id)}
                                    >
                                        Transfer Funds
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" style={styles.td}>
                                No receipts found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Accounts;
