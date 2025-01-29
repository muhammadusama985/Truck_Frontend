// import React, { useState, useEffect } from "react";
// import { FaMapMarkerAlt } from 'react-icons/fa';  // Import Font Awesome icon
// import DetailsPage from './DetailsPage'
// import AssignDriver from './AssignDriver';

// const DispatcherShowLoads = () => {
//     const [isSortHighlightOpen, setIsSortHighlightOpen] = useState(false);
//     const [isDateShipperOpen, setIsDateShipperOpen] = useState(false);
//     const [isVehicleOpen, setIsVehicleOpen] = useState(false);
//     const [isPaymentOpen, setIsPaymentOpen] = useState(false);
//     const [showDetails, setShowDetails] = useState(false);
//     const [showPopup, setShowPopup] = useState(false);
//     const [loads, setLoads] = useState([]);
//     const [selectedLoad, setSelectedLoad] = useState(null); // State to store selected load



//     useEffect(() => {
//         // Fetch data from the backend
//         fetch("https://truckbackend-production.up.railway.app/api/get-loads")
//             .then((response) => response.json())
//             .then((data) => setLoads(data))
//             .catch((error) => console.error("Error fetching loads:", error));
//     }, []);

//     // Toggle the popup visibility
//     const togglePopup = () => {
//         setShowPopup(!showPopup);
//     };

//     // Show details with selected load
//     const handleViewDetails = (load) => {
//         setSelectedLoad(load); // Store selected load
//         setShowDetails(true); // Show the details modal
//     };

//     //Close the detail model
//     const closeDetails = () => {
//         setShowDetails(false);
//         setSelectedLoad(null);
//     }


//     const toggleSortHighlight = () => setIsSortHighlightOpen(!isSortHighlightOpen);
//     const toggleDateShipper = () => setIsDateShipperOpen(!isDateShipperOpen);
//     const toggleVehicle = () => setIsVehicleOpen(!isVehicleOpen);
//     const togglePayment = () => setIsPaymentOpen(!isPaymentOpen);

//     return (
//         <div className="container" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
//             <div className="left-section">
//                 <section
//                     style={{
//                         width: "250px",
//                         maxWidth: "400px",
//                         margin: "20px 0", // Top and bottom margin
//                         fontFamily: "Arial, sans-serif",
//                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                         padding: "20px",
//                         borderRadius: "8px",
//                         background: "#fff",
//                     }}
//                 >
//                     {/* Input for Load ID */}
//                     <div style={{ marginBottom: "15px" }}>
//                         <input
//                             type="text"
//                             placeholder="Load ID, Make or Model"
//                             style={{
//                                 width: "90%",
//                                 padding: "12px",
//                                 borderRadius: "6px",
//                                 border: "1px solid #ddd",
//                                 fontSize: "14px",
//                             }}
//                         />
//                         <hr style={{ border: "0.5px solid #ddd", marginTop: "15px" }} />
//                     </div>

//                     {/* Input for Origin */}
//                     <div style={{ marginBottom: "15px" }}>
//                         <input
//                             type="text"
//                             placeholder="Origin (Region, State, ZIP)"
//                             style={{
//                                 width: "90%",
//                                 padding: "12px",
//                                 borderRadius: "6px",
//                                 border: "1px solid #ddd",
//                                 fontSize: "14px",
//                             }}
//                         />
//                     </div>

//                     {/* Input for Destination */}
//                     <div style={{ marginBottom: "15px" }}>
//                         <input
//                             type="text"
//                             placeholder="Destination (Region, State, ...)"
//                             style={{
//                                 width: "90%",
//                                 padding: "12px",
//                                 borderRadius: "6px",
//                                 border: "1px solid #ddd",
//                                 fontSize: "14px",
//                             }}
//                         />
//                         <hr style={{ border: "0.5px solid #ddd", marginTop: "15px" }} />
//                     </div>

//                     {/* Filters Section */}
//                     <div style={{ marginBottom: "20px", position: "relative" }}>
//                         <details>
//                             <summary
//                                 style={{
//                                     cursor: "pointer",
//                                     color: "#6e52f5",
//                                     fontWeight: "bold",
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     alignItems: "center",
//                                 }}
//                             >
//                                 Filters
//                                 <span
//                                     style={{
//                                         marginLeft: "10px",
//                                         fontSize: "16px",
//                                         color: "#6e52f5",
//                                     }}
//                                 >
//                                     &#9881;
//                                 </span>
//                             </summary>

//                             {/* Sort & Highlight */}
//                             <div
//                                 style={{
//                                     padding: "10px 0",
//                                     color: "#666",
//                                     background: "#f9f9f9",
//                                     border: "1px solid #ddd",
//                                     borderRadius: "8px",
//                                     marginTop: "10px",
//                                 }}
//                             >
//                                 <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                                     <label style={{ display: "block", fontWeight: "bold", marginLeft: "8px" }}>
//                                         Sort & Highlight
//                                     </label>
//                                     <span
//                                         onClick={toggleSortHighlight}
//                                         style={{
//                                             cursor: "pointer",
//                                             marginRight: " 8px",
//                                             fontSize: "18px",
//                                             transition: "transform 0.3s",
//                                             transform: isSortHighlightOpen ? "rotate(180deg)" : "rotate(0deg)",
//                                         }}
//                                     >
//                                         &#9660;
//                                     </span>
//                                 </div>

//                                 {isSortHighlightOpen && (
//                                     <div>
//                                         <div style={{ display: "flex", marginBottom: "10px" }}>
//                                             <select
//                                                 style={{
//                                                     flex: 1,
//                                                     marginRight: "10px",
//                                                     marginLeft: "10px",
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                             <select
//                                                 style={{
//                                                     flex: 1,
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     width: "40%",
//                                                     marginRight: "10px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                         </div>
//                                         <div>
//                                             <select
//                                                 style={{
//                                                     width: "95%",
//                                                     marginLeft: "10px",
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Date & Shipper */}
//                             <div
//                                 style={{
//                                     padding: "10px 0",
//                                     color: "#666",
//                                     background: "#f9f9f9",
//                                     border: "1px solid #ddd",
//                                     borderRadius: "8px",
//                                     marginTop: "10px",
//                                 }}
//                             >
//                                 <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                                     <label style={{ display: "block", fontWeight: "bold", marginLeft: "8px" }}>
//                                         Date & Shipper
//                                     </label>
//                                     <span
//                                         onClick={toggleDateShipper}
//                                         style={{
//                                             cursor: "pointer",
//                                             marginRight: "8px",
//                                             fontSize: "18px",
//                                             transition: "transform 0.3s",
//                                             transform: isDateShipperOpen ? "rotate(180deg)" : "rotate(0deg)",
//                                         }}
//                                     >
//                                         &#9660;
//                                     </span>
//                                 </div>

//                                 {isDateShipperOpen && (
//                                     <div>
//                                         <div style={{ display: "flex", marginBottom: "10px" }}>
//                                             <select
//                                                 style={{
//                                                     flex: 1,
//                                                     marginRight: "10px",
//                                                     marginLeft: "10px",
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                             <select
//                                                 style={{
//                                                     flex: 1,
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     width: "40%",
//                                                     marginRight: "10px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                         </div>
//                                         <div>
//                                             <select
//                                                 style={{
//                                                     width: "95%",
//                                                     marginLeft: "10px",
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 < option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Vehicle/s */}
//                             <div
//                                 style={{
//                                     padding: "10px 0",
//                                     color: "#666",
//                                     background: "#f9f9f9",
//                                     border: "1px solid #ddd",
//                                     borderRadius: "8px",
//                                     marginTop: "10px",
//                                 }}
//                             >
//                                 <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                                     <label style={{ display: "block", fontWeight: "bold", marginLeft: "8px" }}>
//                                         Vehicle/s
//                                     </label>
//                                     <span
//                                         onClick={toggleVehicle}
//                                         style={{
//                                             cursor: "pointer",
//                                             marginRight: "8px",
//                                             fontSize: "18px",
//                                             transition: "transform 0.3s",
//                                             transform: isVehicleOpen ? "rotate(180deg)" : "rotate(0deg)",
//                                         }}
//                                     >
//                                         &#9660;
//                                     </span>
//                                 </div>

//                                 {isVehicleOpen && (
//                                     <div>
//                                         <div style={{ display: "flex", marginBottom: "10px" }}>
//                                             <select
//                                                 style={{
//                                                     flex: 1,
//                                                     marginRight: "10px",
//                                                     marginLeft: "10px",
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                             <select
//                                                 style={{
//                                                     flex: 1,
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     width: "40%",
//                                                     marginRight: "10px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                         </div>
//                                         <div>
//                                             <select
//                                                 style={{
//                                                     width: "95%",
//                                                     marginLeft: "10px",
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Payment */}
//                             <div
//                                 style={{
//                                     padding: "10px 0",
//                                     color: "#666",
//                                     background: "#f9f9f9",
//                                     border: "1px solid #ddd",
//                                     borderRadius: "8px",
//                                     marginTop: "10px",
//                                 }}
//                             >
//                                 <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                                     <label style={{ display: "block", fontWeight: "bold", marginLeft: "8px" }}>
//                                         Payment
//                                     </label>
//                                     <span
//                                         onClick={togglePayment}
//                                         style={{
//                                             cursor: "pointer",
//                                             marginRight: "8px",
//                                             fontSize: "18px",
//                                             transition: "transform 0.3s",
//                                             transform: isPaymentOpen ? "rotate(180deg)" : "rotate(0deg)",
//                                         }}
//                                     >
//                                         &#9660;
//                                     </span>
//                                 </div>

//                                 {isPaymentOpen && (
//                                     <div>
//                                         <div style={{ display: "flex", marginBottom: "10px" }}>
//                                             <select
//                                                 style={{
//                                                     flex: 1,
//                                                     marginRight: "10px",
//                                                     marginLeft: "10px",
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 < option value="option3">Option 3</option>
//                                             </select>
//                                             <select
//                                                 style={{
//                                                     flex: 1,
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     width: "40%",
//                                                     marginRight: "10px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                         </div>
//                                         <div>
//                                             <select
//                                                 style={{
//                                                     width: "95%",
//                                                     marginLeft: "10px",
//                                                     padding: "8px",
//                                                     borderRadius: "4px",
//                                                     border: "1px solid #ccc",
//                                                 }}
//                                             >
//                                                 <option value="">Option 1</option>
//                                                 <option value="option1">Option 1</option>
//                                                 <option value="option2">Option 2</option>
//                                                 <option value="option3">Option 3</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </details>
//                     </div>

//                     {/* Show Results Button */}
//                     <div>
//                         <button
//                             style={{
//                                 width: "100%",
//                                 padding: "12px",
//                                 background: "#6e52f5",
//                                 color: "#fff",
//                                 border: "none",
//                                 borderRadius: "6px",
//                                 fontSize: "16px",
//                                 fontWeight: "bold",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             SHOW RESULTS
//                         </button>
//                     </div>
//                 </section>
//             </div>

//             <div className="right-section">
//                 {loads.map((load, index) => (
//                     <section
//                         key={index}
//                         style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             padding: "10px",
//                             borderRadius: "8px",
//                             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                             background: "#fff",
//                             marginBottom: "4px",
//                             marginTop: "20px",
//                             marginLeft: "4px",
//                             marginRight: "360px",
//                             fontFamily: "Arial, sans-serif",
//                             width: "580px",
//                             maxWidth: "930px",
//                         }}
//                     >
//                         {/* Left Section */}
//                         <article style={{ textAlign: "flex", width: "290px", height: "200px" }}>
//                             {/* Pickup Point */}
//                             <header style={{ marginBottom: "15px" }}>
//                                 <h4 style={{ fontSize: "16px", color: "#0073e6", marginBottom: "10px" }}>
//                                     Pickup Point
//                                 </h4>
//                                 <h3 style={{ display: "flex", alignItems: "center" }}>
//                                     <FaMapMarkerAlt
//                                         style={{
//                                             color: "#0073e6",
//                                             marginRight: "10px",
//                                             marginBottom: "4px",
//                                         }}
//                                     />
//                                     <strong>{load.pickup_contact_address}</strong>
//                                 </h3>
//                             </header>

//                             {/* Destination Point */}
//                             <header style={{ marginTop: "50px" }}>
//                                 <h4 style={{ fontSize: "16px", color: "#28a745", marginBottom: "10px" }}>
//                                     Destination Point
//                                 </h4>
//                                 <h3 style={{ display: "flex", alignItems: "center" }}>
//                                     <FaMapMarkerAlt
//                                         style={{
//                                             color: "#28a745",
//                                             marginRight: "10px",
//                                             marginBottom: "4px",
//                                         }}
//                                     />
//                                     <strong>{load.delivery_address}</strong>
//                                 </h3>
//                             </header>
//                         </article>

//                         <div
//                             style={{
//                                 width: "1px",
//                                 backgroundColor: "black",
//                                 height: "250px",
//                                 marginRight: "5px",
//                             }}
//                         ></div>

//                         {/* Right Section */}
//                         <aside style={{ textAlign: "flex", width: "300px", height: "260px" }}>
//                             {/* Top Section */}
//                             <section style={{ marginBottom: "3px", position: "relative" }}>
//                                 <p
//                                     style={{
//                                         fontSize: "14px",
//                                         color: "#333",
//                                         marginBottom: "2px",
//                                         display: "flex",
//                                         alignItems: "center",
//                                     }}
//                                 >
//                                     <i
//                                         className="fas fa-car"
//                                         style={{
//                                             marginRight: "6px",
//                                             color: "#ccc",
//                                         }}
//                                     ></i>
//                                     <strong>{load.vehicle_amount} Vehicle(s)</strong>
//                                 </p>
//                                 <p
//                                     style={{
//                                         fontSize: "14px",
//                                         color: "#888",
//                                         marginBottom: "2px",
//                                         display: "flex",
//                                         alignItems: "center",
//                                     }}
//                                 >
//                                     <i
//                                         className="fas fa-money-bill"
//                                         style={{
//                                             marginRight: "6px",
//                                             color: "#ccc",
//                                             marginLeft: "10px",
//                                         }}
//                                     ></i>
//                                     {load.vehicle_type}
//                                 </p>
//                                 <p
//                                     style={{
//                                         fontSize: "12px",
//                                         color: "#888",
//                                         display: "flex",
//                                         alignItems: "center",
//                                         marginLeft: "10px",
//                                     }}
//                                 >
//                                     <i
//                                         className="fas fa-hand-holding-usd"
//                                         style={{
//                                             marginRight: "6px",
//                                             color: "#ccc",
//                                         }}
//                                     ></i>
//                                     {load.payment_type}
//                                 </p>
//                             </section>

//                             <br />
//                             <hr />
//                             {/* Bottom Section */}
//                             <section>
//                                 <h2
//                                     style={{
//                                         fontSize: "24px",
//                                         fontWeight: "bold",
//                                         color: "#333",
//                                         marginBottom: "1px",
//                                         marginLeft: "10px",
//                                     }}
//                                 >
//                                     ${load.payment}
//                                 </h2>

//                                 <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
//                                     <button
//                                         style={{
//                                             padding: "10px 10px",
//                                             border: "none",
//                                             borderRadius: "6px",
//                                             background: "#6e52f5",
//                                             color: "#fff",
//                                             fontSize: "14px",
//                                             marginTop: "10px",
//                                             marginLeft: "20px",
//                                             fontWeight: "bold",
//                                             marginRight: "5px",
//                                             cursor: "pointer",
//                                         }}
//                                         onClick={() => handleViewDetails(load)}
//                                     >
//                                         VIEW DETAILS
//                                     </button>

//                                     {showDetails && selectedLoad && (
//                                         <div
//                                             style={{
//                                                 position: "fixed",
//                                                 top: 0,
//                                                 left: 0,
//                                                 width: "100%",
//                                                 height: "100%",
//                                                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//                                                 display: "flex",
//                                                 justifyContent: "center",
//                                                 alignItems: "center",
//                                                 zIndex: 1000,
//                                             }}
//                                         >
//                                             <div
//                                                 style={{
//                                                     backgroundColor: "#fff",
//                                                     width: "80%",
//                                                     height: "90%",
//                                                     borderRadius: "10px",
//                                                     overflow: "hidden",
//                                                     position: "relative",
//                                                 }}
//                                             >
//                                                 <button
//                                                     onClick={closeDetails}
//                                                     style={{
//                                                         position: "absolute",
//                                                         top: "10px",
//                                                         right: "10px",
//                                                         background: "red",
//                                                         color: "#fff",
//                                                         border: "none",
//                                                         borderRadius: "4px",
//                                                         padding: "8px 12px",
//                                                         cursor: "pointer",
//                                                         zIndex: 1001,
//                                                     }}
//                                                 >
//                                                     Close
//                                                 </button>
//                                                 <DetailsPage load={selectedLoad} />
//                                             </div>
//                                         </div>
//                                     )}
//                                     <button
//                                         style={{
//                                             padding: "10px 10px",
//                                             fontSize: "14px",
//                                             border: "none",
//                                             borderRadius: "6px",
//                                             background: "#28a745",
//                                             color: "#fff",
//                                             marginTop: "4px",
//                                             fontWeight: "bold",
//                                             cursor: "pointer",
//                                             marginRight: "20px",
//                                         }}
//                                         onClick={() => {
//                                             setSelectedLoad(load); // Save the current load to state
//                                             togglePopup();        // Open the popup
//                                         }}
//                                     >
//                                         Assign Driver
//                                     </button>

//                                     {showPopup && (
//     <div
//         style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//         }}
//     >
//         <div
//             style={{
//                 backgroundColor: "#fff",
//                 borderRadius: "10px",
//                 padding: "20px",
//                 width: "90%",
//                 maxHeight: "90%",
//                 overflowY: "auto",
//             }}
//         >
//             {/* Pass the selectedLoad as a prop to the AssignDriver component */}
//             <AssignDriver load={selectedLoad} />
//             <div style={{ display: "flex", justifyContent: "flex-end" }}>
//                 <button
//                     style={{
//                         marginTop: "20px",
//                         padding: "10px 20px",
//                         backgroundColor: "#dc3545",
//                         color: "#fff",
//                         border: "none",
//                         borderRadius: "5px",
//                         cursor: "pointer",
//                     }}
//                     onClick={togglePopup}
//                 >
//                     Close
//                 </button>
//             </div>
//         </div>
//     </div>
// )}
//                                 </div>
//                             </section>
//                         </aside>
//                     </section>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default DispatcherShowLoads;




import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import Font Awesome icon
import DetailsPage from "./DetailsPage";
import AssignDriver from "./AssignDriver";

const DispatcherShowLoads = () => {
  const [isSortHighlightOpen, setIsSortHighlightOpen] = useState(false);
  const [isDateShipperOpen, setIsDateShipperOpen] = useState(false);
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loads, setLoads] = useState([]);
  const [selectedLoad, setSelectedLoad] = useState(null); // State to store selected load

  useEffect(() => {
    // Fetch data from the backend
    fetch("https://truckbackend-production.up.railway.app/api/get-loads")
      .then((response) => response.json())
      .then((data) => setLoads(data))
      .catch((error) => console.error("Error fetching loads:", error));
  }, []);

  // Toggle the popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Show details with selected load
  const handleViewDetails = (load) => {
    setSelectedLoad(load); // Store selected load
    setShowDetails(true); // Show the details modal
  };

  //Close the detail model
  const closeDetails = () => {
    setShowDetails(false);
    setSelectedLoad(null);
  };

  const toggleSortHighlight = () =>
    setIsSortHighlightOpen(!isSortHighlightOpen);
  const toggleDateShipper = () => setIsDateShipperOpen(!isDateShipperOpen);
  const toggleVehicle = () => setIsVehicleOpen(!isVehicleOpen);
  const togglePayment = () => setIsPaymentOpen(!isPaymentOpen);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div className="left-section">
        <section
          style={{
            width: "250px",
            maxWidth: "400px",
            margin: "20px 0", // Top and bottom margin
            fontFamily: "Arial, sans-serif",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            borderRadius: "8px",
            background: "#fff",
          }}
        >
          {/* Input for Load ID */}
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Load ID, Make or Model"
              style={{
                width: "90%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#F5F7FA",
                "&:focus": {
                  borderColor: "#C8AF61",
                  boxShadow: "0 0 0 2px rgba(200, 175, 97, 0.2)",
                },
              }}
            />
            <hr style={{ border: "0.5px solid #E5E7EB", margin: "15px 0" }} />
          </div>

          {/* Input for Origin */}
          <div style={{ marginBottom: "15px" }}>
            <div style={{ position: "relative", marginBottom: "12px" }}>
              <FaMapMarkerAlt 
                style={{ 
                  position: "absolute", 
                  left: "12px", 
                  top: "50%", 
                  transform: "translateY(-50%)", 
                  color: "#C8AF61",
                  fontSize: "16px"
                }} 
              />
              <input
                type="text"
                placeholder="Origin (Region, State, ZIP)"
                style={{
                  width: "80%",
                  padding: "12px 16px 12px 40px",
                  borderRadius: "8px",
                  border: "1px solid #E5E7EB",
                  fontSize: "14px",
                  outline: "none",
                  transition: "all 0.3s ease",
                  backgroundColor: "#F5F7FA",
                  "&:focus": {
                    borderColor: "#C8AF61",
                    boxShadow: "0 0 0 2px rgba(200, 175, 97, 0.2)",
                  },
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <FaMapMarkerAlt 
                style={{ 
                  position: "absolute", 
                  left: "12px", 
                  top: "50%", 
                  transform: "translateY(-50%)", 
                  color: "#C8AF61",
                  fontSize: "16px"
                }} 
              />
              <input
                type="text"
                placeholder="Destination (Region, State, ...)"
                style={{
                  width: "80%",
                  padding: "12px 16px 12px 40px",
                  borderRadius: "8px",
                  border: "1px solid #E5E7EB",
                  fontSize: "14px",
                  outline: "none",
                  transition: "all 0.3s ease",
                  backgroundColor: "#F5F7FA",
                  "&:focus": {
                    borderColor: "#C8AF61",
                    boxShadow: "0 0 0 2px rgba(200, 175, 97, 0.2)",
                  },
                }}
              />
            </div>
            <hr style={{ border: "0.5px solid #E5E7EB", margin: "15px 0" }} />
          </div>

          {/* Filters Section */}
          <div style={{ marginBottom: "20px", position: "relative" }}>
            <details>
              <summary
                style={{
                  cursor: "pointer",
                  color: "#000525",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Filters
                <span
                  style={{
                    marginLeft: "10px",
                    fontSize: "16px",
                    color: "#000525",
                  }}
                >
                  &#9881;
                </span>
              </summary>

              {/* Sort & Highlight */}
              <div
                style={{
                  padding: "10px 0",
                  color: "#666",
                  background: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      marginLeft: "8px",
                      color: "#000525",
                    }}
                  >
                    Sort & Highlight
                  </label>
                  <span
                    onClick={toggleSortHighlight}
                    style={{
                      cursor: "pointer",
                      marginRight: " 8px",
                      fontSize: "18px",
                      color: "#000525",
                      transition: "transform 0.3s",
                      transform: isSortHighlightOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      

                    }}
                  >
                    &#9660;
                  </span>
                </div>

                {isSortHighlightOpen && (
                  <div>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <select
                        style={{
                          flex: 1,
                          marginRight: "10px",
                          marginLeft: "10px",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <select
                        style={{
                          flex: 1,
                          padding: "8px",
                          borderRadius: "4px",
                          width: "40%",
                          marginRight: "10px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div>
                      <select
                        style={{
                          width: "95%",
                          marginLeft: "10px",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Date & Shipper */}
              <div
                style={{
                  padding: "10px 0",
                  color: "#666",
                  background: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      marginLeft: "8px",
                      color: "#000525",

                    }}
                  >
                    Date & Shipper
                  </label>
                  <span
                    onClick={toggleDateShipper}
                    style={{
                      cursor: "pointer",
                      marginRight: "8px",
                      fontSize: "18px",
                      transition: "transform 0.3s",
                      color: "#000525",

                      transform: isDateShipperOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    &#9660;
                  </span>
                </div>

                {isDateShipperOpen && (
                  <div>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <select
                        style={{
                          flex: 1,
                          marginRight: "10px",
                          marginLeft: "10px",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <select
                        style={{
                          flex: 1,
                          padding: "8px",
                          borderRadius: "4px",
                          width: "40%",
                          marginRight: "10px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div>
                      <select
                        style={{
                          width: "95%",
                          marginLeft: "10px",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Vehicle/s */}
              <div
                style={{
                  padding: "10px 0",
                  color: "#666",
                  background: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      marginLeft: "8px",
                      color: "#000525",

                    }}
                  >
                    Vehicle/s
                  </label>
                  <span
                    onClick={toggleVehicle}
                    style={{
                      cursor: "pointer",
                      marginRight: "8px",
                      fontSize: "18px",
                      transition: "transform 0.3s",
                      color: "#000525",

                      transform: isVehicleOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    &#9660;
                  </span>
                </div>

                {isVehicleOpen && (
                  <div>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <select
                        style={{
                          flex: 1,
                          marginRight: "10px",
                          marginLeft: "10px",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <select
                        style={{
                          flex: 1,
                          padding: "8px",
                          borderRadius: "4px",
                          width: "40%",
                          marginRight: "10px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div>
                      <select
                        style={{
                          width: "95%",
                          marginLeft: "10px",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment */}
              <div
                style={{
                  padding: "10px 0",
                  color: "#666",
                  background: "#f9f9f9",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      color: "#000525",

                      marginLeft: "8px",
                    }}
                  >
                    Payment
                  </label>
                  <span
                    onClick={togglePayment}
                    style={{
                      cursor: "pointer",
                      marginRight: "8px",
                      fontSize: "18px",
                      transition: "transform 0.3s",
                      color: "#000525",

                      transform: isPaymentOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    &#9660;
                  </span>
                </div>

                {isPaymentOpen && (
                  <div>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <select
                        style={{
                          flex: 1,
                          marginRight: "10px",
                          marginLeft: "10px",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                      <select
                        style={{
                          flex: 1,
                          padding: "8px",
                          borderRadius: "4px",
                          width: "40%",
                          marginRight: "10px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div>
                      <select
                        style={{
                          width: "95%",
                          marginLeft: "10px",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                        }}
                      >
                        <option value="">Option 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </details>
          </div>

          {/* Show Results Button */}
          <div>
            <button
              style={{
                width: "100%",
                padding: "14px",
                background: "#000525",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 5, 37, 0.1)",
                "&:hover": {
                  backgroundColor: "#C8AF61",
                  transform: "translateY(-1px)",
                  boxShadow: "0 6px 8px rgba(0, 5, 37, 0.15)",
                },
              }}
            >
              SHOW RESULTS
            </button>
          </div>
        </section>
      </div>

      <div className="right-section">
        {loads.map((load, index) => (
          <section
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              background: "#fff",
              marginBottom: "4px",
              marginTop: "20px",
              marginLeft: "4px",
              marginRight: "360px",
              fontFamily: "Arial, sans-serif",
              width: "580px",
              maxWidth: "930px",
            }}
          >
            {/* Left Section */}
            <article style={{ flex: 1 }}>
              <header style={{ marginBottom: "24px" }}>
                <h4 style={{ 
                  fontSize: "14px", 
                  color: "#000525", 
                  marginBottom: "8px", 
                  opacity: 0.8,
                  fontWeight: "500" 
                }}>
                  Pickup Point
                </h4>
                <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FaMapMarkerAlt style={{ color: "#C8AF61", fontSize: "18px" }} />
                  <strong style={{ 
                    color: "#000525",
                    fontSize: "16px",
                    letterSpacing: "0.2px"
                  }}>{load.pickup_contact_address}</strong>
                </h3>
              </header>

              <header>
                <h4 style={{ 
                  fontSize: "14px", 
                  color: "#000525", 
                  marginBottom: "8px", 
                  opacity: 0.8,
                  fontWeight: "500"
                }}>
                  Destination Point
                </h4>
                <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <FaMapMarkerAlt style={{ color: "#C8AF61", fontSize: "18px" }} />
                  <strong style={{ 
                    color: "#000525",
                    fontSize: "16px",
                    letterSpacing: "0.2px"
                  }}>{load.delivery_address}</strong>
                </h3>
              </header>
            </article>

            <div
              style={{
                width: "1px",
                backgroundColor: "black",
                height: "250px",
                marginRight: "5px",
              }}
            ></div>

            {/* Right Section */}
            <aside
              style={{ textAlign: "flex", width: "300px", height: "260px" }}
            >
              {/* Top Section */}
              <section style={{ marginBottom: "3px", position: "relative" }}>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#333",
                    marginBottom: "2px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fas fa-car"
                    style={{
                      marginRight: "6px",
                      color: "#ccc",
                    }}
                  ></i>
                  <strong>{load.vehicle_amount} Vehicle(s)</strong>
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    marginBottom: "2px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fas fa-money-bill"
                    style={{
                      marginRight: "6px",
                      color: "#ccc",
                      marginLeft: "10px",
                    }}
                  ></i>
                  {load.vehicle_type}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <i
                    className="fas fa-hand-holding-usd"
                    style={{
                      marginRight: "6px",
                      color: "#ccc",
                    }}
                  ></i>
                  {load.payment_type}
                </p>
              </section>

              <br />
              <hr />
              {/* Bottom Section */}
              <section>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "1px",
                    marginLeft: "10px",
                  }}
                >
                  ${load.payment}
                </h2>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6px",
                  }}
                >
                  <button
                    style={{
                      padding: "10px 10px",
                      border: "none",
                      borderRadius: "6px",
                      background: "#6e52f5",
                      color: "#fff",
                      fontSize: "14px",
                      marginTop: "10px",
                      marginLeft: "20px",
                      fontWeight: "bold",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleViewDetails(load)}
                  >
                    VIEW DETAILS
                  </button>

                  {showDetails && selectedLoad && (
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#fff",
                          width: "80%",
                          height: "90%",
                          borderRadius: "10px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <button
                          onClick={closeDetails}
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            background: "red",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            padding: "8px 12px",
                            cursor: "pointer",
                            zIndex: 1001,
                          }}
                        >
                          Close
                        </button>
                        <DetailsPage load={selectedLoad} />
                      </div>
                    </div>
                  )}
                  <button
                    style={{
                      padding: "10px 10px",
                      fontSize: "14px",
                      border: "none",
                      borderRadius: "6px",
                      background: "#28a745",
                      color: "#fff",
                      marginTop: "4px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      marginRight: "20px",
                    }}
                    onClick={() => {
                      setSelectedLoad(load); // Save the current load to state
                      togglePopup(); // Open the popup
                    }}
                  >
                    Assign Driver
                  </button>

                  {showPopup && (
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          padding: "20px",
                          width: "90%",
                          maxHeight: "90%",
                          overflowY: "auto",
                        }}
                      >
                        {/* Pass the selectedLoad as a prop to the AssignDriver component */}
                        <AssignDriver load={selectedLoad} />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <button
                            style={{
                              marginTop: "20px",
                              padding: "10px 20px",
                              backgroundColor: "#dc3545",
                              color: "#fff",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                            onClick={togglePopup}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </aside>
          </section>
        ))}
      </div>
    </div>
  );
};

export default DispatcherShowLoads;
