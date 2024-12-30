import React, { useState, useEffect } from 'react';

// Eye icon URL (you can replace with a local or other icon)
const eyeIcon = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Eye_icon_2.svg';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Helper functions for identifying file types
  const isImage = (path) => /\.(jpeg|jpg|png|gif)$/i.test(path);
  const isDocument = (path) => /\.(pdf|doc|docx|ppt|pptx)$/i.test(path);

  // Fetch users list from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/leasedCarrier/getCarriers');
        const data = await response.json();
        console.log('Fetched users:', data); // Debugging line
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Fetch user details and documents by carrierId
  const fetchUserDetails = async (carrierId) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/leasedCarrier/getUserDetails/${carrierId}`);
      const data = await response.json();
      
      if (data && data.userDetails) {
        console.log('Fetched user details:', data.userDetails); // Debugging line
        setSelectedUser(data.userDetails);
      } else {
        console.error('User details not found');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Users List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.carrier_id} style={styles.row}>
                <td style={styles.cell}>{user.email}</td>
                <td style={styles.cell}>
                  <button 
                    onClick={() => fetchUserDetails(user.carrier_id)} 
                    style={styles.iconButton}
                  >
                    <img 
                      src={eyeIcon} 
                      alt="View Details" 
                      style={styles.eyeIcon} 
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Display selected user details and uploaded documents */}
      {selectedUser && (
        <div style={styles.detailsContainer}>
          <h3 style={styles.detailsHeader}>User Details:</h3>
          <p>Email: {selectedUser.email}</p>
          <p>Status: {selectedUser.verified}</p>

          <h3 style={styles.detailsHeader}>Uploaded Documents:</h3>
          {selectedUser.documents ? (
  <div>
    {Object.entries(selectedUser.documents).map(([key, value]) => (
      value ? (
        <p key={key}>
          <strong>{key.replace(/_/g, ' ')}:</strong>{' '}
          {isImage(value) ? (
            <>    
              <a 
                href={`http://localhost:5000/${value}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.link}
              >
                View Full Image
              </a>
            </>
          ) : isDocument(value) ? (
            <a 
              href={`http://localhost:5000/${value}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.link}
            >
              View Document
            </a>
          ) : (
            <span>Unsupported file format</span>
          )}
        </p>
      ) : null
    ))}
  </div>
) : (
  <p>No documents uploaded.</p>
)}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '24px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  row: {
    borderBottom: '1px solid #ddd',
  },
  cell: {
    padding: '10px',
    textAlign: 'left',
    fontSize: '16px',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  eyeIcon: {
    width: '24px',
    height: '24px',
  },
  detailsContainer: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
  },
  detailsHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  documentPreview: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    marginTop: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default UserList;

