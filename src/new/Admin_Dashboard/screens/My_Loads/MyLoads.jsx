import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyLoads = () => {
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [userId, setUserId] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [receiptFile, setReceiptFile] = useState(null);

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
            transition: 'background-color 0.3s',
        },
        button: {
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'background-color 0.3s',
        },
        popupOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        popup: {
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '30px',
            width: '400px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            border: '1px solid #ddd',
        },
        popupButton: {
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        closeButton: {
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginLeft: '10px',
        },
    };

    useEffect(() => {
        const storedUserId = localStorage.getItem('user_id');
        if (storedUserId) {
            setUserId(storedUserId);

            axios.get('https://truckbackend-production.up.railway.app/api/myOrders')
                .then((response) => {
                    const fetchedOrders = response.data;
                    const userOrders = fetchedOrders.filter(order => String(order.user_id) === String(storedUserId));
                    setFilteredOrders(userOrders);
                })
                .catch((error) => {
                    console.error('Error fetching orders:', error);
                    setFilteredOrders([]);
                });
        } else {
            console.warn('No user ID found in localStorage');
            setFilteredOrders([]);
        }
    }, []);

    const handleUploadClick = (order) => {
        setSelectedOrder(order);
        setShowPopup(true);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
    
        // Check if the file exists and is an image
        if (file && !file.type.startsWith('image/')) {
            alert('Please upload a valid image file (e.g., PNG, JPG, JPEG).');
            setReceiptFile(null);
            event.target.value = ''; // Reset the file input
            return;
        }
    
        setReceiptFile(file);
    };
    

    const handleReceiptUpload = () => {
        if (!receiptFile) {
            alert('Please select a file to upload.');
            return;
        }

        const accountType = localStorage.getItem('account_type'); // Retrieve account_type from local storage

        const formData = new FormData();
        formData.append('receipt', receiptFile);
        formData.append('orderId', selectedOrder.id);
        formData.append('pickupLocation', selectedOrder.pickup_contact_address);
        formData.append('dropLocation', selectedOrder.delivery_address);
        formData.append('driverId', selectedOrder.user_id);
        formData.append('accountType', accountType);

        axios
            .post('https://truckbackend-production.up.railway.app/api/uploadUserReceipt', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log('Receipt uploaded successfully:', response.data);
                alert('Receipt uploaded successfully!');
                setShowPopup(false);
                setReceiptFile(null);
            })
            .catch((error) => {
                console.error('Error uploading receipt:', error);
                alert('Error uploading receipt. Please try again.');
            });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>My Orders</h1>

            <div style={{ overflowX: 'auto', maxHeight: '400px' }}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Load ID</th>
                            <th style={styles.th}>Pickup Location</th>
                            <th style={styles.th}>Delivery Location</th>
                            <th style={styles.th}>Payment</th>
                            <th style={styles.th}>Driver ID</th>
                            <th style={styles.th}>Status</th>
                            <th style={styles.th}>Receipt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => (
                                <tr key={order.id}>
                                    <td style={styles.td}>{order.id}</td>
                                    <td style={styles.td}>{order.pickup_contact_address}</td>
                                    <td style={styles.td}>{order.delivery_address}</td>
                                    <td style={styles.td}>{order.payment}</td>
                                    <td style={styles.td}>{order.user_id}</td>
                                    <td style={styles.td}>{order.status}</td>
                                    <td style={styles.td}>
                                        <button
                                            style={styles.button}
                                            onClick={() => handleUploadClick(order)}
                                        >
                                            Upload Receipt
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" style={styles.td}>
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showPopup && (
                <div style={styles.popupOverlay}>
                    <div style={styles.popup}>
                        <h2>Upload Receipt</h2>
                        <input type="file" onChange={handleFileChange} />
                        <br />
                        <br />
                        <button style={styles.popupButton} onClick={handleReceiptUpload}>
                            Upload
                        </button>
                        <button style={styles.closeButton} onClick={() => setShowPopup(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyLoads;
