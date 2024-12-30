import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DriverCompletedLoads = () => {
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [userId, setUserId] = useState(null);

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
    };

    useEffect(() => {
        const storedUserId = localStorage.getItem('user_id');
        if (storedUserId) {
            setUserId(storedUserId);

            axios.get('https://truckbackend-production.up.railway.app/api/driverOrders')
                .then((response) => {
                    const fetchedOrders = response.data;
                    const userOrders = fetchedOrders.filter(
                        order => String(order.user_id) === String(storedUserId) && order.status === 'Delivered'
                    );
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

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Driver Completed Loads</h1>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Load ID</th>
                        <th style={styles.th}>Pickup Location</th>
                        <th style={styles.th}>Delivery Location</th>
                        <th style={styles.th}>Payment</th>
                        <th style={styles.th}>Driver ID</th>
                        <th style={styles.th}>Status</th>
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
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={styles.td}>
                                No orders found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DriverCompletedLoads;
