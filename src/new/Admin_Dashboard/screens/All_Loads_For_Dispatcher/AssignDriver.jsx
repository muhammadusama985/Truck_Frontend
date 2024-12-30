import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScriptNext, Marker, Polyline } from "@react-google-maps/api";

const AssignDriver = ({ load }) => {
  const [pickupCoordinates, setPickupCoordinates] = useState(null);
  const [deliveryCoordinates, setDeliveryCoordinates] = useState(null);
  const [drivers, setDrivers] = useState([]); // State to hold driver data
  const [selectedDriver, setSelectedDriver] = useState(""); // State for selected driver
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
  const [tripName, setTripName] = useState(""); // State for trip name


  const center = {
    lat: 39.8283, // Center the map to the US initially
    lng: -98.5795,
  };

  const containerStyle = {
    width: "100%",
    height: "320px",  // Ensure the height is defined explicitly
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

  // Fetch drivers from the API
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch('https://truckbackend-production.up.railway.app/api/get-drivers');
        const data = await response.json();
        setDrivers(data);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    };

    fetchDrivers();
  }, []);

  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver.last_name); // Set the selected driver's name
    setShowDropdown(false); // Close dropdown after selection
  };

  // Function to assign the driver and save the order
  const assignDriver = async () => {
    if (!selectedDriver || !pickupCoordinates || !deliveryCoordinates || !tripName) {
        alert("Please select a driver and ensure all locations are set.");
        return;
    }

    const driverId = drivers.find(driver => driver.last_name === selectedDriver)?.user_id; // Get the selected driver's ID

    const orderData = {
        tripName, // Include trip name in the order data
        pickupLocation: load.pickup_contact_address,
        deliveryLocation: load.delivery_address,
        payment: load.payment,
        userId: driverId,
    };

    try {
        // Send a POST request to save the assigned order
        const response = await fetch('https://truckbackend-production.up.railway.app/api/assign-driver', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            const assignedOrder = await response.json();

            // Update the order status to 'assigned'
            await fetch(`https://truckbackend-production.up.railway.app/api/update-order-status/${load.load_id}`, {
                method: 'PATCH',
            });

            alert("Driver assigned successfully!");
        } else {
            alert("Failed to assign driver.");
        }
    } catch (error) {
        console.error("Error assigning driver:", error);
    }
};

  // Debugging: Log the coordinates
 console.log("Pickup Coordinates:", pickupCoordinates);
  console.log("Delivery Coordinates:", deliveryCoordinates);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div>
            <h2 style={{ margin: 0 }}>Trip Planner</h2>
          </div>
          <div>
            <input
              type="text"
              placeholder="Trip Name"
              value={tripName} // Bind the input value to the tripName state
              onChange={(e) => setTripName(e.target.value)} // Update tripName state on input change
              style={{
                padding: "5px 10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Driver Name"
                value={selectedDriver} // Display the selected driver's name
                onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown on click
                style={{
                  padding: "5px 10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              {showDropdown && (
                <div style={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  zIndex: 1000,
                  maxHeight: "150px",
                  overflowY: "auto",
                  width: "100%",
                }}>
                  {drivers.map((driver) => (
                    <div
                      key={driver.id}
                      onClick={() => handleDriverSelect(driver)} // Set driver name on click
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        backgroundColor: "#fff",
                        borderBottom: "1px solid #ccc",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f0f0"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}
                    >
                      {driver.last_name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={assignDriver} // Call the assignDriver function on button click
            style={{
              padding: "10px 15px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Assign a Driver
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {/* Left Panel */}
        <div style={{ width: "30%" }}>
          {/* Pickup Location */}
          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              marginTop: "20px",
              padding: "15px",
            }}
          >
            <h4 style={{ margin: "0 0 10px", fontSize: "16px" }}>Pickup Location</h4>
            <div style={{ marginBottom: "10px" }}>
              <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                {load.pickup_contact_address}
              </div>
              <div style={{ color: "#888", fontSize: "12px" }}>Dec 16 - Dec 22, 2024</div>
            </div>
          </div>

          {/* Delivery Location */}
          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              marginTop: "20px",
              padding: "15px",
            }}
          >
            <h4 style={{ margin: "0 0 10px", fontSize: "16px" }}>Delivery Location</h4>
            <div style={{ marginBottom: "10px" }}>
              <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                {load.delivery_address}
              </div>
              <div style={{ color: "#888", fontSize: "12px" }}>Dec 17 - Dec 27, 2024</div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ width: "70%" }}>
          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Left: Pickup Location */}
            <div style={{ textAlign: "left" }}>
              <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
                Pickup Location
              </h4>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>
                {load.pickup_contact_address}
              </p>
              <p style={{ margin: 0, color: "#888", fontSize: "12px" }}>
                Dec 16 - Dec 22, 2024
              </p>
            </div>

            {/* Middle: Trip Plan */}
            <div style={{ textAlign: "center" }}>
              <h3 style={{ margin: 0 }}>Trip Plan</h3>
              <p style={{ color: "#888", margin: 0 }}>
                | Trip Revenue: $ {load.payment}|{" "}
              </p>
            </div>

            {/* Right: Destination Location */}
            <div style={{ textAlign: "right" }}>
              <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
                Destination Location
              </h4>
              <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>
                {load.delivery_address}
              </p>
              <p style={{ margin: 0, color: "#888", fontSize: "12px" }}>
              </p>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              height: "300px",
              backgroundColor: "#eef2f7",
              borderRadius: "5px",
            }}
          >
            <div style={{ flex: 1, position: "relative" }}>
              <LoadScriptNext googleMapsApiKey="AIzaSyBOzPBVVJ-KOjMnPD1cQ_ydsfMipy4DBsw">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={pickupCoordinates || center}
                  zoom={3}
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
              </LoadScriptNext>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignDriver;