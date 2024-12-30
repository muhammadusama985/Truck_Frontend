import React from 'react';

const BackupScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={styles.iconContainer}>
          <span style={styles.clockIcon}>🕒</span>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.title}>BACKUP</h2>
          <p style={styles.subtitle}>No any backup yet</p>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '770px',
    backgroundColor: '#f8f8f8',
  },
  box: {
    border: '2px solid #d9d9d9',
    borderRadius: '8px',
    width: '800px',
    height:'650px',
    paddingTop: '40px',   // Added padding to top
    paddingBottom: '40px',  // Added padding to bottom
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: '10px',
  },
  clockIcon: {
    fontSize: '36px',
    color: '#777',
  },
  textContainer: {
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: '16px',
    color: '#777',
  },
};

export default BackupScreen;
