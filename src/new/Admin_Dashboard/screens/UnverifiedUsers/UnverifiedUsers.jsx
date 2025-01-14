// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UnverfifiedUsers = () => {
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

// export default UnverfifiedUsers;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnverifiedUsers = () => {
    const [unverifiedUsers, setUnverifiedUsers] = useState([]);

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
        button: {
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
    };

    useEffect(() => {
        axios.get('https://truckbackend-production.up.railway.app/api/unverifiedUsers') // Replace with your actual API endpoint
            .then((response) => {
                setUnverifiedUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching unverified users:', error);
                setUnverifiedUsers([]);
            });
    }, []);

    const handleVerify = (userId) => {
        axios.post(`https://truckbackend-production.up.railway.app/api/verifyUser`, { userId }) // Replace with your actual API endpoint
            .then(() => {
                setUnverifiedUsers((prevUsers) => prevUsers.filter(user => user.user_id !== userId));
            })
            .catch((error) => {
                console.error('Error verifying user:', error);
            });
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Unverified Users</h1>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>User ID</th>
                        <th style={styles.th}>First Name</th>
                        <th style={styles.th}>Last Name</th>
                        <th style={styles.th}>Phone </th>
                        <th style={styles.th}>Accoount Type</th>
                        <th style={styles.th}>Email</th>
                        <th style={styles.th}>Status</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {unverifiedUsers.length > 0 ? (
                        unverifiedUsers.map((user) => (
                            <tr key={user.user_id}>
                                <td style={styles.td}>{user.id}</td>
                                <td style={styles.td}>{user.first_name}</td>
                                <td style={styles.td}>{user.last_name}</td>
                                <td style={styles.td}>{user.phone}</td>
                                <td style={styles.td}>{user.account_type}</td>
                                <td style={styles.td}>{user.email}</td>
                                <td style={styles.td}>{user.verified}</td>
                                <td style={styles.td}>
                                    <button style={styles.button} onClick={() => handleVerify(user.user_id)}>
                                        Verify
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={styles.td}>
                                No unverified users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UnverifiedUsers;
