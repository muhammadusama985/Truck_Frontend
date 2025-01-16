import React from "react";

const BillingPayments = () => {
  return (
    <div style={styles.container}>
      {/* Basic Plan */}
      <div style={styles.card}>
        <img
          src="./1.jpeg" // Local image for Basic Plan
          alt="Basic Plan"
          style={styles.image}
        />
        <h3 style={styles.title}>Basic</h3>
        <h2 style={styles.price}>Free</h2>
        <p style={styles.perMonth}>/mo</p>
        <div style={styles.features}>
          <p>• Assign and accept up to 5 loads per month</p>
          <p>• Real-time shipment tracking</p>
          <p>• Basic invoicing and payment features</p>
        </div>
        <button style={styles.button1}>Activate</button>
      </div>

      {/* Business Plan */}
      <div style={{ ...styles.card, backgroundColor: "#000", color: "#fff" }}>
        <img
          src="./2.jpeg" // Local image for Business Plan
          alt="Business Plan"
          style={styles.image}
        />
        <h3 style={styles.title}>Business</h3>
        <h2 style={styles.price}>$49</h2>
        <p style={styles.perMonth}>/mo</p>
        <div style={styles.features}>
          <p>• Unlimited load assignments and tracking</p>
          <p>• Optimized scheduling and route planning</p>
          <p>• Full payment and invoicing system</p>
          <p>• Priority support for faster load management</p>
        </div>
        <button style={styles.button2}>Activate</button>
      </div>

      {/* Enterprise Plan */}
      <div style={styles.card}>
        <img
          src="./3.jpeg" // Local image for Enterprise Plan
          alt="Enterprise Plan"
          style={styles.image}
        />
        <h3 style={styles.title}>Enterprise</h3>
        <h2 style={styles.price}>$69</h2>
        <p style={styles.perMonth}>/mo</p>
        <div style={styles.features}>
          <p>• Everything in the Business Plan</p>
          <p>• API integration for seamless connection with existing systems</p>
          <p>• Bulk data migration for large-scale operations</p>
          <p>• Custom reporting and analytics</p>
        </div>
        <button style={styles.button}>Activate</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
    padding: "10px",
  },
  card: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "250px",
    height:"500px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",         // Make the image take the full width of the container
    height: "150px",       // Set a fixed height for uniformity
    objectFit: "full",  // Ensures the image fits completely within the container
    borderRadius: "8px",   // Adds rounded corners
    marginBottom: "15px",  // Adds space below the image
    backgroundColor: "#f0f0f0", // Optional: Background color for empty space
  },
  
  
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  price: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0",
  },
  perMonth: {
    fontSize: "14px",
    color: "#888",
    margin: "5px 0 15px",
  },
  features: {
    fontSize: "14px",
    textAlign: "left",
    marginBottom: "15px",
  },
  button1: { 
    padding: "10px 60px",
    fontSize: "16px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "90px", // Adds space above the button

  },
  button: { 
    padding: "10px 60px",
    fontSize: "16px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px", // Adds space above the button

  },
  button2:{
    padding: "10px 60px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "black",
    fontWeight:"bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "40px", // Adds space above the button


  }
};

export default BillingPayments;
