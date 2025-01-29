


// import React, { useState, useEffect } from "react";
// import { GoogleMap, LoadScriptNext, Marker, Polyline } from "@react-google-maps/api";

// const DetailsPage = ({ load }) => {
//   const [pickupDate, setPickupDate] = useState("");
//    const [deliveryDate, setDeliveryDate] = useState("");
//   const [price, setPrice] = useState("");
//   const [pickupCoordinates, setPickupCoordinates] = useState(null);
//   const [deliveryCoordinates, setDeliveryCoordinates] = useState(null);

//   const containerStyle = {
//     width: "100%",
//     height: "100%",
//   };

//   const center = {
//     lat: 39.8283, // Center the map to the US initially
//     lng: -98.5795,
//   };

//   // Function to fetch coordinates for an address using Geocoding API
//   const fetchCoordinates = async (address) => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
//           address
//         )}&key=AIzaSyBOzPBVVJ-KOjMnPD1cQ_ydsfMipy4DBsw`
//       );
//       const data = await response.json();
//       if (data.status === "OK") {
//         const { lat, lng } = data.results[0].geometry.location;
//         return { lat, lng };
//       } else {
//         console.error("Geocoding API Error:", data.status);
//         return null;
//       }
//     } catch (error) {
//       console.error("Error fetching coordinates:", error);
//       return null;
//     }
//   };

//   // Fetch coordinates for pickup and delivery addresses
//   useEffect(() => {
//     const fetchAllCoordinates = async () => {
//       const pickupCoords = await fetchCoordinates(load.pickup_contact_address);
//       const deliveryCoords = await fetchCoordinates(load.delivery_address);
//       setPickupCoordinates(pickupCoords);
//       setDeliveryCoordinates(deliveryCoords);
//     };

//     fetchAllCoordinates();
//   }, [load.pickup_contact_address, load.delivery_address]);

//   return (
//         <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
//           {/* Navbar */}
//           <nav
//             style={{
//               backgroundColor: "#f5f5f5",
//               padding: "10px 20px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               borderBottom: "1px solid #ccc",
//             }}
//           >
//             <h3 style={{ margin: 0 }}>Shipper Load ID {load.load_id}</h3>
           
//           </nav>
    
//           {/* Main Content */}
//           <div style={{ display: "flex", flex: 1 }}>
//             {/* Left Section - Data */}
//             <div
//               style={{
//                 width: "25%",
//                 padding: "20px",
//                 borderRight: "1px solid #ccc",
//                 overflowY: "auto",
//                 maxHeight: "calc(100vh - 150px)",
//               }}
//             >
//               <h4>Load Details</h4>
//               <div style={{ marginBottom: "20px" }}>
//                 <label>Price</label>
//                 <input
//                   type="text"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   style={{ width: "96%", padding: "8px", marginBottom: "10px" }}
//                   placeholder={load.payment}
    
//                 />
                
//               </div>
//               <div style={{ marginBottom: "20px" }}>
//                 <label>Payment Terms</label>
//                 <input
//                   type="text"
//                   value={load.payment_type}
//                   readOnly
//                   style={{ width: "96%", padding: "8px", marginBottom: "10px" }}
//                 />
//               </div>
//               <div style={{ marginBottom: "20px" }}>
//                 <label>Days to Pay</label>
//                 <select style={{ width: "105%", padding: "8px" }}>
//                   <option>Immediately</option>
//                   <option>15 Bus. Days</option>
//                 </select>
//               </div>
//               <div style={{ marginBottom: "20px" }}>
//                 <label>Payment Term Begins</label>
//                 <select style={{ width: "105%", padding: "8px" }}>
//                   <option>Pickup</option>
//                   <option>Delivery</option>
//                 </select>
//               </div>
//               <div style={{ marginBottom: "20px" }}>
//                 <label>Pickup Date</label>
//                 <input
//                   type="date"
//                   value={pickupDate}
//                   onChange={(e) => setPickupDate(e.target.value)}
//                   style={{ width: "96%", padding: "8px", marginBottom: "10px" }}
//                 />
//               </div>
//               <div style={{ marginBottom: "20px" }}>
//                 <label>Delivery Date</label>
//                 <input
//                   type="date"
//                   value={deliveryDate}
//                   onChange={(e) => setDeliveryDate(e.target.value)}
//                   style={{ width: "96%", padding: "8px", marginBottom: "10px" }}
//                 />
//               </div>
//         <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5', width: '300px' }}>
//       <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{load.payment}</div>
     
//       <div>
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//           <span style={{ color: '#5e5eff', marginRight: '8px', fontSize: '16px' }}>⬆</span>
//           <div>
//             <div style={{ fontWeight: 'bold' }}>{load.pickup_contact_address}</div>
//             <div style={{ color: '#6e6e6e', fontSize: '12px' }}>EST. DEC 19, 2024</div>
//           </div>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <span style={{ color: '#44c767', marginRight: '8px', fontSize: '16px' }}>⬇</span>
//           <div>
//             <div style={{ fontWeight: 'bold' }}>{load.delivery_address}</div>
//             <div style={{ color: '#6e6e6e', fontSize: '12px' }}>
//               EST. DEC 26, 2024 - EST. DEC 28, 2024
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
        
//             </div>
//     {/* Right Section - Map */}
//     <div style={{ flex: 1, position: "relative" }}>
//     <LoadScriptNext googleMapsApiKey="AIzaSyBOzPBVVJ-KOjMnPD1cQ_ydsfMipy4DBsw">
//   <GoogleMap
//     mapContainerStyle={containerStyle}
//     center={pickupCoordinates || center}
//     zoom={5}
//   >
//     {/* Add markers only if coordinates are available */}
//     {pickupCoordinates && (
//       <Marker
//         position={pickupCoordinates}
//         label="Pickup"
//         icon={{
//           url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
//         }}
//       />
//     )}
//     {deliveryCoordinates && (
//       <Marker
//         position={deliveryCoordinates}
//         label="Delivery"
//         icon={{
//           url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
//         }}
//       />
//     )}

//     {/* Add a line between pickup and delivery if both coordinates are available */}
//     {pickupCoordinates && deliveryCoordinates && (
//       <Polyline
//         path={[pickupCoordinates, deliveryCoordinates]}
//         options={{
//           strokeColor: "#FF0000",
//           strokeOpacity: 0.8,
//           strokeWeight: 2,
//         }}
//       />
//     )}
//   </GoogleMap>
// </LoadScriptNext>;
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailsPage;




import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScriptNext, Marker, Polyline } from "@react-google-maps/api";

const DetailsPage = ({ load }) => {
  const [pickupDate, setPickupDate] = useState("");
   const [deliveryDate, setDeliveryDate] = useState("");
  const [price, setPrice] = useState("");
  const [pickupCoordinates, setPickupCoordinates] = useState(null);
  const [deliveryCoordinates, setDeliveryCoordinates] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 39.8283, // Center the map to the US initially
    lng: -98.5795,
  };

  // Function to fetch coordinates for an address using Geocoding API
  const fetchCoordinates = async (address) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=AIzaSyBOzPBVVJ-KOjMnPD1cQ_ydsfMipy4DBsw`
      );
      const data = await response.json();
      if (data.status === "OK") {
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
      } else {
        console.error("Geocoding API Error:", data.status);
        return null;
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };

  // Fetch coordinates for pickup and delivery addresses
  useEffect(() => {
    const fetchAllCoordinates = async () => {
      const pickupCoords = await fetchCoordinates(load.pickup_contact_address);
      const deliveryCoords = await fetchCoordinates(load.delivery_address);
      setPickupCoordinates(pickupCoords);
      setDeliveryCoordinates(deliveryCoords);
    };

    fetchAllCoordinates();
  }, [load.pickup_contact_address, load.delivery_address]);

  return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          {/* Navbar */}
          <nav
            style={{
              backgroundColor: "#f5f5f5",
              padding: "10px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ccc",
            }}
          >
            <h3 style={{ margin: 0 }}>Shipper Load ID {load.load_id}</h3>
           
          </nav>
    
          {/* Main Content */}
          <div style={{ display: "flex", flex: 1 }}>
            {/* Left Section - Data */}
            <div
              style={{
                width: "25%",
                padding: "20px",
                borderRight: "1px solid #ccc",
                overflowY: "auto",
                maxHeight: "calc(100vh - 150px)",
              }}
            >
              <h4>Load Details</h4>
              <div style={{ marginBottom: "20px" }}>
                <label>Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  style={{ width: "96%", padding: "8px", marginBottom: "10px" }}
                  placeholder={load.payment}
    
                />
                
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label>Payment Terms</label>
                <input
                  type="text"
                  value={load.payment_type}
                  readOnly
                  style={{ width: "96%", padding: "8px", marginBottom: "10px" }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label>Days to Pay</label>
                <select style={{ width: "105%", padding: "8px" }}>
                  <option>Immediately</option>
                  <option>15 Bus. Days</option>
                </select>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label>Payment Term Begins</label>
                <select style={{ width: "105%", padding: "8px" }}>
                  <option>Pickup</option>
                  <option>Delivery</option>
                </select>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label>Pickup Date</label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  style={{ width: "96%", padding: "8px", marginBottom: "10px" }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label>Delivery Date</label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  style={{ width: "96%", padding: "8px", marginBottom: "10px" }}
                />
              </div>
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5', width: '300px' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{load.payment}</div>
     
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ color: '#5e5eff', marginRight: '8px', fontSize: '16px' }}>⬆</span>
          <div>
            <div style={{ fontWeight: 'bold' }}>{load.pickup_contact_address}</div>
            <div style={{ color: '#6e6e6e', fontSize: '12px' }}>EST. DEC 19, 2024</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#44c767', marginRight: '8px', fontSize: '16px' }}>⬇</span>
          <div>
            <div style={{ fontWeight: 'bold' }}>{load.delivery_address}</div>
            <div style={{ color: '#6e6e6e', fontSize: '12px' }}>
              EST. DEC 26, 2024 - EST. DEC 28, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
    
        
            </div>
    {/* Right Section - Map */}
    <div style={{ flex: 1, position: "relative" }}>
    <LoadScriptNext googleMapsApiKey="AIzaSyBOzPBVVJ-KOjMnPD1cQ_ydsfMipy4DBsw">
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={pickupCoordinates || center}
    zoom={5}
  >
    {/* Add markers only if coordinates are available */}
    {pickupCoordinates && (
      <Marker
        position={pickupCoordinates}
        label="Pickup"
        icon={{
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        }}
      />
    )}
    {deliveryCoordinates && (
      <Marker
        position={deliveryCoordinates}
        label="Delivery"
        icon={{
          url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
        }}
      />
    )}

    {/* Add a line between pickup and delivery if both coordinates are available */}
    {pickupCoordinates && deliveryCoordinates && (
      <Polyline
        path={[pickupCoordinates, deliveryCoordinates]}
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }}
      />
    )}
  </GoogleMap>
</LoadScriptNext>;
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;