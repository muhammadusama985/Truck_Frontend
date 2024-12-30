import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFilter } from 'react-icons/fa';

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
        filterContainer: {
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            justifyContent: 'space-between',
        },
        dropdownContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            flex: '1',
        },
        dropdown: {
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
            fontSize: '16px',
        },
        resetButton: {
            backgroundColor: '#ff4d4d',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
        },
        resetButtonHover: {
            backgroundColor: '#e63939',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
            overflowX: 'auto',
            borderRadius: '8px',
            overflow: 'hidden',
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
        trHover: {
            backgroundColor: '#f1f1f1',
        },
        noOrders: {
            textAlign: 'center',
            padding: '20px',
            color: '#777',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Manage Loads</h1>
            <div style={styles.filterContainer}>
                <div style={styles.dropdownContainer}>
                    <FaFilter />
                    <input
                        type="text"
                        placeholder="Filter by Trip Name"
                        style={styles.dropdown}
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
                <div style={styles.dropdownContainer}>
                    <input
                        type="text"
                        placeholder="Pickup Location"
                        style={styles.dropdown}
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                    />
                </div>
                <div style={styles.dropdownContainer}>
                    <input
                        type="text"
                        placeholder="Delivery Location"
                        style={styles.dropdown}
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value)}
                    />
                </div>
                <div style={styles.dropdownContainer}>
                    <input
                        type="text"
                        placeholder="Driver ID"
                        style={styles.dropdown}
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <button
                    style={styles.resetButton}
                    onClick={resetFilters}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.resetButtonHover.backgroundColor}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.resetButton.backgroundColor}
                >
                    Reset Filter
                </button>
            </div>

            <div style={{ overflowX: 'auto', maxHeight: '400px' }}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>ID</th>
                            <th style={styles.th}>Trip Name</th>
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
                                <tr key={order.id} style={{ transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>
                                    <td style={styles.td}>{order.id}</td>
                                    <td style={styles.td}>{order.trip_name}</td>
                                    <td style={styles.td}>{order.pickup_location}</td>
                                    <td style={styles.td}>{order.delivery_location}</td>
                                    <td style={styles.td}>{order.payment}</td>
                                    <td style={styles.td}>{order.user_id}</td>
                                    <td style={styles.td}>{order.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={styles.noOrders}>
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageLoads;