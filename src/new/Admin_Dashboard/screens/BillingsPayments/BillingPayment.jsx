// import React from "react";

// const BillingPayments = () => {
//   return (
//     <div style={styles.container}>
//       {/* Basic Plan */}
//       <div style={styles.card}>
//         <img
//           src="./1.jpeg" // Local image for Basic Plan
//           alt="Basic Plan"
//           style={styles.image}
//         />
//         <h3 style={styles.title}>Basic</h3>
//         <h2 style={styles.price}>Free</h2>
//         <p style={styles.perMonth}>/mo</p>
//         <div style={styles.features}>
//           <p>• Assign and accept up to 5 loads per month</p>
//           <p>• Real-time shipment tracking</p>
//           <p>• Basic invoicing and payment features</p>
//         </div>
//         <button style={styles.button1}>Activate</button>
//       </div>

//       {/* Business Plan */}
//       <div style={{ ...styles.card, backgroundColor: "#000", color: "#fff" }}>
//         <img
//           src="./2.jpeg" // Local image for Business Plan
//           alt="Business Plan"
//           style={styles.image}
//         />
//         <h3 style={styles.title}>Business</h3>
//         <h2 style={styles.price}>$49</h2>
//         <p style={styles.perMonth}>/mo</p>
//         <div style={styles.features}>
//           <p>• Unlimited load assignments and tracking</p>
//           <p>• Optimized scheduling and route planning</p>
//           <p>• Full payment and invoicing system</p>
//           <p>• Priority support for faster load management</p>
//         </div>
//         <button style={styles.button2}>Activate</button>
//       </div>

//       {/* Enterprise Plan */}
//       <div style={styles.card}>
//         <img
//           src="./3.jpeg" // Local image for Enterprise Plan
//           alt="Enterprise Plan"
//           style={styles.image}
//         />
//         <h3 style={styles.title}>Enterprise</h3>
//         <h2 style={styles.price}>$69</h2>
//         <p style={styles.perMonth}>/mo</p>
//         <div style={styles.features}>
//           <p>• Everything in the Business Plan</p>
//           <p>• API integration for seamless connection with existing systems</p>
//           <p>• Bulk data migration for large-scale operations</p>
//           <p>• Custom reporting and analytics</p>
//         </div>
//         <button style={styles.button}>Activate</button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     gap: "20px",
//     padding: "10px",
//   },
//   card: {
//     backgroundColor: "#fff",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     width: "250px",
//     height:"500px",
//     padding: "20px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//   },
//   image: {
//     width: "100%",         // Make the image take the full width of the container
//     height: "150px",       // Set a fixed height for uniformity
//     objectFit: "full",  // Ensures the image fits completely within the container
//     borderRadius: "8px",   // Adds rounded corners
//     marginBottom: "15px",  // Adds space below the image
//     backgroundColor: "#f0f0f0", // Optional: Background color for empty space
//   },
  
  
//   title: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     margin: "10px 0",
//   },
//   price: {
//     fontSize: "28px",
//     fontWeight: "bold",
//     margin: "0",
//   },
//   perMonth: {
//     fontSize: "14px",
//     color: "#888",
//     margin: "5px 0 15px",
//   },
//   features: {
//     fontSize: "14px",
//     textAlign: "left",
//     marginBottom: "15px",
//   },
//   button1: { 
//     padding: "10px 60px",
//     fontSize: "16px",
//     backgroundColor: "#000",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginTop: "90px", // Adds space above the button

//   },
//   button: { 
//     padding: "10px 60px",
//     fontSize: "16px",
//     backgroundColor: "#000",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginTop: "20px", // Adds space above the button

//   },
//   button2:{
//     padding: "10px 60px",
//     fontSize: "14px",
//     backgroundColor: "white",
//     color: "black",
//     fontWeight:"bold",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginTop: "40px", // Adds space above the button


//   }
// };

// export default BillingPayments;


import React from "react";

const BillingPayments = () => {
  return (
    <div style={styles.container}>
      {/* Basic Plan */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.title}>Basic</h3>
          <div style={styles.priceContainer}>
            <h2 style={styles.price}>Free</h2>
            <p style={styles.perMonth}>/mo</p>
          </div>
        </div>
        <div style={styles.features}>
          <p>• Assign and accept up to 5 loads per month</p>
          <p>• Real-time shipment tracking</p>
          <p>• Basic invoicing and payment features</p>
        </div>
        <button style={styles.button}>Activate</button>
      </div>

      {/* Business Plan */}
      <div style={{ ...styles.card, ...styles.featuredCard }}>
        <div style={styles.cardHeader}>
          <h3 style={{ ...styles.title, color: '#F5F7FA' }}>Business</h3>
          <div style={styles.priceContainer}>
            <h2 style={{ ...styles.price, color: '#F5F7FA' }}>$49</h2>
            <p style={{ ...styles.perMonth, color: '#C8AF61' }}>/mo</p>
          </div>
        </div>
        <div style={{ ...styles.features, color: '#F5F7FA' }}>
          <p>• Unlimited load assignments and tracking</p>
          <p>• Optimized scheduling and route planning</p>
          <p>• Full payment and invoicing system</p>
          <p>• Priority support for faster load management</p>
        </div>
        <button style={styles.featuredButton}>Activate</button>
      </div>

      {/* Enterprise Plan */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.title}>Enterprise</h3>
          <div style={styles.priceContainer}>
            <h2 style={styles.price}>$69</h2>
            <p style={styles.perMonth}>/mo</p>
          </div>
        </div>
        <div style={styles.features}>
          <p>• Everything in the Business Plan</p>
          <p>• API integration for seamless connection</p>
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
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    padding: "1.5rem",
    minHeight: "calc(100vh - 100px)",
    backgroundColor: '#F5F7FA',
    maxWidth: "calc(100vw - 340px)",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "1rem",
    width: "calc((100% - 3rem) / 3)",
    minWidth: "260px",
    height: "450px",
    padding: "1.5rem",
    boxShadow: "0 8px 24px rgba(0, 5, 37, 0.12)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
    '&:hover': {
      transform: "translateY(-5px)",
    },
  },
  featuredCard: {
    backgroundColor: "#000525",
    transform: "scale(1.05)",
    height: "450px",
  },
  cardHeader: {
    marginBottom: "2rem",
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.75rem",
    fontWeight: "600",
    color: "#000525",
    margin: "0",
    marginBottom: "1rem",
  },
  priceContainer: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
    gap: "0.5rem",
  },
  price: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#000525",
    margin: "0",
  },
  perMonth: {
    fontSize: "1rem",
    color: "#666",
    margin: "0",
  },
  features: {
    fontSize: "0.95rem",
    lineHeight: "1.75",
    color: "#000525",
    flex: 1,
    '& p': {
      margin: "0.75rem 0",
    },
  },
  button: {
    padding: "1rem",
    fontSize: "1rem",
    backgroundColor: "#000525",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    
  },
  featuredButton: {
    padding: "1rem",
    fontSize: "1rem",
    backgroundColor: "#C8AF61",
    color: "#000525",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease",
    '&:hover': {
      backgroundColor: "#F5F7FA",
    },
  },
};

export default BillingPayments;
