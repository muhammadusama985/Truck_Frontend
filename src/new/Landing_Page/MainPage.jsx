



// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// import myBgImage from "../../images/pngtree-variety-of-flags-on-3d-rendered-truck-fleet-picture-image_4843782.jpg";
// import mylogo from "../../images/logo.png";
// import mytruck from "../../images/delivery-truck_3269427.png";
// import mywire from "../../images/shipping-delivery_14785127.png";
// import mybox from "../../images/Payment & invoicepng.png";

// function MainPage() {
//   const navigate = useNavigate(); // Initialize the navigate function

//   // Function to handle sign-up button click
//   const handleSignUp = () => {
//     navigate("/Signup"); // Navigate to the Signup page
//   };

//   // Function to handle sign-in button click
//   const handleSignIn = () => {
//     navigate("/Signin"); // Navigate to the Signup page
//   };

//   return (
//     <div style={{ fontFamily: "DM Serif Text" }}>
//       {/* Header */}
//       <header
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "20px",
//           backgroundColor: "#FFF6B3",
//         }}
//       >
//         <img src={mylogo} alt="Logo" style={{ height: "70px" }} />
//         <nav style={{ display: "flex", gap: "20px", border: "50px" }}>
//           <a href="#" style={{ textDecoration: "none", color: "#333" }}>
//             Dispatcher
//           </a>
//           <a href="#" style={{ textDecoration: "none", color: "#333" }}>
//             Carrier
//           </a>
//           <a href="#" style={{ textDecoration: "none", color: "#333" }}>
//             Customer
//           </a>
//           <a href="#" style={{ textDecoration: "none", color: "#333" }}>
//             MC Owner
//           </a>
//           <a href="#" style={{ textDecoration: "none", color: "#333" }}>
//             Contact
//           </a>
//           <a href="#" style={{ textDecoration: "none", color: "#333" }}>
//             About Us
//           </a>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <div
//         style={{
//           backgroundImage: `url(${myBgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           textAlign: "center",
//           padding: "100px 20px",
//           color: "#FFFDF0",
//         }}
//       >
//         <h1
//           style={{ fontSize: "50px", fontWeight: "bold", marginBottom: "10px" }}
//         >
//           Fast & Safe Transportation
//         </h1>
//         <div style={{ margin: "20px 0" }}>
//           <button
//             style={{
//               marginRight: "10px",
//               padding: "10px 20px",
//               fontSize: "16px",
//               backgroundColor: "#118B50",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//             }}
//             onClick={handleSignUp}
//           >
//             Sign Up
//           </button>
//           <button
//             style={{
//               padding: "10px 20px",
//               fontSize: "16px",
//               backgroundColor: "#EFF3EA",
//               color: "#333",
//               border: "none",
//               borderRadius: "5px",
//             }}
//             onClick={handleSignIn}
//           >
//             Sign In
//           </button>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "50px",
//             marginTop: "70px",
//           }}
//         >
//           <div>
//             <h2 style={{ fontSize: "36px", margin: "0" }}>10+</h2>
//             <p>Year's Experience</p>
//           </div>
//           <div>
//             <h2 style={{ fontSize: "36px", margin: "0" }}>100+</h2>
//             <p>Experienced Staffs</p>
//           </div>
//           <div>
//             <h2 style={{ fontSize: "36px", margin: "0" }}>1000+</h2>
//             <p>Happy Clients</p>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <section
//         style={{
//           textAlign: "center",
//           padding: "50px 20px",
//           backgroundColor: "#FFF6B3",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
//           Services We Provide
//         </h2>
//         <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
//           <div
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "20px",
//               width: "281px",
//               paddingleft: "7px",
//               paddingright: "8px",
//               textAlign: "center",
//               backgroundColor: "#F6C794",
//             }}
//           >
//             <img
//               src={mytruck}
//               alt="Load Assignment & Management"
//               style={{ height: "150px" }}
//             />
//             <p>Load Assignment & Management</p>
//           </div>
//           <div
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "20px",
//               width: "200px",
//               textAlign: "center",
//               backgroundColor: "#F6C794",
//             }}
//           >
//             <img
//               src={mywire}
//               alt="Real-Time Tracking"
//               style={{ height: "150px" }}
//             />
//             <p>Real-Time Tracking</p>
//           </div>
//           <div
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               padding: "20px",
//               width: "200px",
//               textAlign: "center",
//               backgroundColor: "#F6C794",
//             }}
//           >
//             <img
//               src={mybox}
//               alt="Payment & Invoicing"
//               style={{ height: "150px" }}
//             />
//             <p>Payment & Invoicing</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default MainPage;


import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

import myBgImage from "../../images/pngtree-variety-of-flags-on-3d-rendered-truck-fleet-picture-image_4843782.jpg";
import mylogo from "../../images/logo.png";
import mytruck from "../../images/delivery-truck_3269427.png";
import mywire from "../../images/shipping-delivery_14785127.png";
import mybox from "../../images/Payment & invoicepng.png";

function MainPage() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle sign-up button click
  const handleSignUp = () => {
    navigate("/Signup"); // Navigate to the Signup page
  };

  // Function to handle sign-in button click
  const handleSignIn = () => {
    navigate("/Signin"); // Navigate to the Signup page
  };

  return (
    <div style={{ fontFamily: "DM Serif Text" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#4A4A4A", // Subtle dark gray background
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          padding: "10px 30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <img src={mylogo} alt="Logo" style={{ height: "60px" }} />
          
          <nav
            style={{
              display: "flex",
              gap: "5px",
              padding: "8px",
              backgroundColor: "#E5E7EA",
              borderRadius: "12px",
              border: "1px solid rgba(0, 5, 37, 0.1)",
              boxShadow: "0 2px 8px rgba(0, 5, 37, 0.05)",
            }}
          >
            {[
              "Dispatcher",
              "Carrier",
              "Customer",
              "MC Owner",
              "Contact",
              "About Us",
            ].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#000525", // Dark text for better contrast on light background
                  fontWeight: "500",
                  fontSize: "15px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  position: "relative",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#C8AF61";
                  e.currentTarget.style.color = "#4A4A4A";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(200, 175, 97, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#000525";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", gap: "15px" }}>
            <button
              onClick={handleSignIn}
              style={{
                padding: "10px 20px",
                backgroundColor: "transparent",
                color: "#000525", // Dark text for better contrast on light background
                border: "2px solid #C8AF61",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#C8AF61";
                e.target.style.color = "#4A4A4A";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#000525";
              }}
            >
              Sign In
            </button>
            <button
              onClick={handleSignUp}
              style={{
                padding: "10px 20px",
                backgroundColor: "#C8AF61",
                color: "#4A4A4A",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#4A4A4A";
                e.target.style.color = "#C8AF61";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#C8AF61";
                e.target.style.color = "#4A4A4A";
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${myBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          padding: "100px 20px",
          color: "#000525", // Dark text for better contrast on light background
        }}
        
      >
       <h1
  style={{
    fontSize: "50px",
    fontWeight: "bold",
    // marginBottom: "50px",
    color: "#000525", // Dark text for better contrast on light background
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Add shadow for contrast
    padding: "10px 20px",
    borderRadius: "10px",
  }}
>
  Fast & Safe Transportation
</h1>
        <div style={{ margin: "20px 0" }}>
        <button
  style={{
    marginRight: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4A4A4A", // Subtle dark gray background
    color: "#C8AF61", // Golden text
    border: "2px solid #C8AF61", // Golden border for emphasis
    borderRadius: "8px", // Softer corners
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Light shadow for depth
    cursor: "pointer", // Pointer cursor for better UX
    transition: "all 0.3s ease", // Smooth hover effect
    fontWeight: "bold",
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "#C8AF61"; // Golden on hover
    e.target.style.color = "#4A4A4A"; // Dark gray text on hover
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "#4A4A4A"; // Reset to dark gray
    e.target.style.color = "#C8AF61"; // Reset to golden text
  }}
  onClick={handleSignUp}
>
  Sign Up
</button>

<button
  style={{
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#F5F7FA", // Light gray background
    color: "#000525", // Dark gray text color
    border: "2px solid #C8AF61", // Golden border for contrast
    borderRadius: "8px", // Slightly rounded corners
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
    cursor: "pointer", // Pointer cursor on hover
    transition: "all 0.3s ease", // Smooth transition effect
    fontWeight: "bold",

  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "#C8AF61"; // Golden background on hover
    e.target.style.color = "#4A4A4A"; // Dark gray text on hover
    e.target.style.border = "2px solid #4A4A4A"; // Dark gray border on hover
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "#F5F7FA"; // Reset to light gray
    e.target.style.color = "#4A4A4A"; // Reset to dark gray text
    e.target.style.border = "2px solid #C8AF61"; // Reset to golden border
  }}
  onClick={handleSignIn}
>
  Sign In
</button>

        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            marginTop: "70px",
    backgroundColor: "rgba(0, 5, 37, 0.5)", // Semi-transparent dark blue background

          }}
        >
          <div>
            <h2 style={{ fontSize: "40px", margin: "0", color:"#C8AF61" }}>10+</h2>
            <p style={{color:"#FFFFFF",fontSize: "20px"}}>Year's Experience</p>
          </div>
          <div>
            <h2 style={{ fontSize: "40px", margin: "0", color:"#C8AF61" }}>100+</h2>
            <p style={{color:"#FFFFFF", fontSize: "20px"}}>Experienced Staffs</p>
          </div>
          <div>
            <h2 style={{ fontSize: "40px", margin: "0", color:"#C8AF61" }}>1000+</h2>
            <p style={{color:"#FFFFFF",fontSize: "20px"}}>Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section
        style={{
          textAlign: "center",
          padding: "50px 20px",
          backgroundColor: "#D3D3D3", // Minor light gray background
        }}
      >
        <h2
  style={{
    fontSize: "36px",
    marginBottom: "20px",
    color: "#000525", // Dark text for better contrast on light background
    fontWeight: "bold", // Bold for emphasis
    textAlign: "center", // Center the text
    textTransform: "uppercase", // Capitalize each word for a professional touch
    letterSpacing: "2px", // Slightly increase letter spacing for readability
    transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out", // Smooth transition
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)"; // Slight scaling effect
    e.currentTarget.style.color = "#C8AF61"; // Change color to golden on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)"; // Reset scale on mouse leave
    e.currentTarget.style.color = "#000525"; // Reset color to dark
  }}
>
  Services We Provide
</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <div
  style={{
    border: "1px solid #C8AF61", // Golden border
    borderRadius: "15px", // Slightly rounder corners
    padding: "20px",
    width: "281px",
    paddingLeft: "7px",
    paddingRight: "8px",
    textAlign: "center",
    backgroundColor: "#D3D3D3", // Minor light gray background
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth hover effects
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  <img
    src={mytruck}
    alt="Load Assignment & Management"
    style={{
      height: "150px",
      objectFit: "contain", // Ensures image is well-proportioned
      transition: "transform 0.3s ease-in-out", // Smooth animation for image
    }}
  />
  <p
    style={{
      color: "#000525", // Dark text for better contrast on light background
      fontWeight: "bold",
      fontSize: "18px", // Slightly larger text
      marginTop: "15px", // Spacing between image and text
      transition: "color 0.3s ease-in-out", // Smooth color transition
    }}
  >
    Load Assignment & Management
  </p>
</div>


<div
  style={{
    border: "1px solid #C8AF61", // Golden border
    borderRadius: "15px", // Slightly rounder corners
    padding: "20px",
    width: "200px",
    textAlign: "center",
    backgroundColor: "#D3D3D3", // Minor light gray background
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth hover animation
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)"; // Slightly scale up on hover
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"; // Add shadow on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)"; // Reset scale when mouse leaves
    e.currentTarget.style.boxShadow = "none"; // Remove shadow
  }}
>
  <img
    src={mywire}
    alt="Real-Time Tracking"
    style={{
      height: "150px",
      objectFit: "contain", // Ensures the image maintains aspect ratio
      transition: "transform 0.3s ease-in-out", // Smooth image transition
    }}
  />
  <p
    style={{
      color: "#000525", // Dark text for better contrast on light background
      fontWeight: "bold", // Bold text for emphasis
      fontSize: "18px", // Slightly larger text for readability
      marginTop: "15px", // Adds space between the image and text
      transition: "color 0.3s ease-in-out", // Smooth text color transition
    }}
  >
    Real-Time Tracking
  </p>
</div>

<div
  style={{
    border: "1px solid #C8AF61", // Golden border
    borderRadius: "15px", // Slightly rounder corners
    padding: "20px",
    width: "200px",
    textAlign: "center",
    backgroundColor: "#D3D3D3", // Minor light gray background
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add smooth animation on hover
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  <img
    src={mybox}
    alt="Payment & Invoicing"
    style={{
      height: "150px",
      objectFit: "contain", // Ensures image stays proportionate and doesn't stretch
      transition: "transform 0.3s ease-in-out", // Smooth animation for image
    }}
  />
  <p
    style={{
      color: "#000525", // Dark text for better contrast on light background
      fontWeight: "bold",
      fontSize: "18px", // Slightly larger text
      marginTop: "15px", // Spacing between image and text
      transition: "color 0.3s ease-in-out", // Smooth color transition on hover
    }}
  >
    Payment & Invoicing
  </p>
</div>

        </div>
      </section>
    </div>
  );
}

export default MainPage;
