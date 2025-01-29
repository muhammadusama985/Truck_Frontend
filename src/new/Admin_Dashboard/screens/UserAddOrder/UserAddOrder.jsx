// import React, { useState } from "react";

// import {
//   TextField,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   AppBar,
//   Toolbar,
//   Button,
//   MenuItem,
//   FormControl,
//   SvgIcon,
// } from "@mui/material";

// const BasicDetailsForm = () => {
//   const [loadId, setLoadId] = useState("");
//   const [trailerType, setTrailerType] = useState("");
//   const [description, setDescription] = useState("");
//   const [vehicleAmount, setVehicleAmount] = useState("");
//   const [vehicleType, setVehicleType] = useState("");
//   const [vehicleNotes, setVehicleNotes] = useState("");
//   const [pickupContactName, setPickupContactName] = useState("");
//   const [pickupContactEmail, setPickupContactEmail] = useState("");
//   const [pickupContactPhone, setPickupContactPhone] = useState("");
//   const [pickupContactPhoneNotes, setPickupContactPhoneNotes] = useState("");
//   const [pickupContactAddress, setPickupContactAddress] = useState("");
//   const [pickupContactZip, setPickupContactZip] = useState("");
//   const [pickupContactPickupRestrictions, setPickupRestrictions] = useState("");
//   const [deliveryContactName, setDeliveryContactName] = useState("");
//   const [deliveryContactEmail, setDeliveryContactEmail] = useState("");
//   const [deliveryContactPhone, setDeliveryContactPhone] = useState("");
//   const [deliveryContactPhoneNotes, setDeliveryContactPhoneNotes] =
//     useState("");
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [deliveryContactZip, setDeliveryContactZip] = useState("");
//   const [deliveryRestrictions, setDeliveryRestrictions] = useState("");
//   const [payment, setPayment] = useState("");
//   const [paymentType, setPaymentTypes] = useState("");
//   const [paymentNotes, setPaymentNotes] = useState("");

//   const validateFields = () => {
//     if (
//       !loadId ||
//       !trailerType ||
//       !description ||
//       !vehicleAmount ||
//       !vehicleType ||
//       !vehicleNotes ||
//       !pickupContactName ||
//       !pickupContactEmail ||
//       !pickupContactPhone ||
//       !pickupContactPhoneNotes ||
//       !pickupContactAddress ||
//       !pickupContactZip ||
//       !deliveryContactName ||
//       !deliveryContactEmail ||
//       !deliveryContactPhone ||
//       !deliveryContactPhoneNotes ||
//       !deliveryAddress ||
//       !deliveryContactZip ||
//       !deliveryRestrictions ||
//       !payment ||
//       !paymentType ||
//       !paymentNotes
//     ) {
//       alert("Please fill in all required fields before creating the order.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!validateFields()) {
//       return; // Stop if validation fails
//     }

//     // Retrieve user_id from local storage
//     const userId = localStorage.getItem("user_id");

//     // Create formData object and include user_id
//     const formData = {
//       loadId,
//       trailerType,
//       description,
//       vehicleAmount,
//       vehicleType,
//       vehicleNotes,
//       pickupContactName,
//       pickupContactEmail,
//       pickupContactPhone,
//       pickupContactPhoneNotes,
//       pickupContactAddress,
//       pickupContactZip,
//       pickupContactPickupRestrictions,
//       deliveryContactName,
//       deliveryContactEmail,
//       deliveryContactPhone,
//       deliveryContactPhoneNotes,
//       deliveryAddress,
//       deliveryContactZip,
//       deliveryRestrictions,
//       payment,
//       paymentType,
//       paymentNotes,
//       userId, // Add user_id to the formData
//     };

//     try {
//       const response = await fetch(
//         "https://truckbackend-production.up.railway.app/api/create-orders",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         console.log("Order saved:", result);
//         alert("Order created successfully");

//         // Reset form fields
//         setLoadId("");
//         setTrailerType("");
//         setDescription("");
//         setVehicleAmount("");
//         setVehicleType("");
//         setVehicleNotes("");
//         setPickupContactName("");
//         setPickupContactEmail("");
//         setPickupContactPhone("");
//         setPickupContactPhoneNotes("");
//         setPickupContactAddress("");
//         setPickupRestrictions("");
//         setDeliveryRestrictions("");
//         setPickupContactZip("");
//         setDeliveryContactName("");
//         setDeliveryContactEmail("");
//         setDeliveryContactPhone("");
//         setDeliveryContactPhoneNotes("");
//         setDeliveryAddress("");
//         setDeliveryContactZip("");
//         setPayment("");
//         setPaymentTypes("");
//         setPaymentNotes("");
//       } else {
//         console.error("Error:", result);
//         alert("Failed to create order");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to create order");
//     }
//   };

//   return (
//     <div>
//       {/* AppBar Component */}
//       <AppBar
//         position="static"
//         color="default"
//         style={{
//           fontFamily: "Spectral, serif",
//           backgroundColor: "#D9D9D9",
//           borderRadius: "20px",
//           margin: "20px",
//           padding: "20px",
//           boxShadow: "none",
//           borderBottom: "1px solid #fff",
//         }}
//       >
//         <Toolbar
//           style={{
//             fontFamily: "Spectral, serif",
//             fontWeight: 200,
//             justifyContent: "space-between",
//             padding: "0 16px",
//             backgroundColor: "#D9D9D9",
//           }}
//         >
//           {/* Title */}
//           <Typography
//             variant="h6"
//             style={{
//               flex: 1,
//               fontFamily: "Tinos,serif",
//               fontWeight: 400,
//               fontSize: "30px",
//             }}
//           >
//             Create Order
//           </Typography>

//           {/* Button for "Create Order" */}
//           <Button variant="contained" color="primary" onClick={handleSubmit}>
//             Create Order
//           </Button>
//         </Toolbar>
//       </AppBar>
//       {/* Basic Details Card */}
//       <Card style={{ margin: "20px", padding: "20px" }}>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             <SvgIcon
//               style={{
//                 marginRight: "10px",
//                 verticalAlign: "middle",
//                 fontFamily: "Spectral, serif",
//                 fontWeight: 200,
//               }}
//             >
//               <path d="M320 64H280h-9.6C263 27.5 230.7 0 192 0s-71 27.5-78.4 64H104 64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM80 112v24c0 13.3 10.7 24 24 24h88 88c13.3 0 24-10.7 24-24V112h16c8.8 0 16 7.2 16 16V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16H80zm88-32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM136 272a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm40-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176zm-64 40a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
//             </SvgIcon>
//             Basic Details
//           </Typography>

//           <Grid container spacing={2}>
//             {/* Load ID */}
//             <Grid item xs={12} sm={6} md={4} lg={3}>
//               <TextField
//                 label="Load ID"
//                 placeholder="SC711818883"
//                 fullWidth
//                 size="small"
//                 value={loadId}
//                 onChange={(e) => setLoadId(e.target.value)}
//                 variant="outlined"
//                 InputProps={{
//                   startAdornment: (
//                     <SvgIcon>
//                       <path d="M432 144h-85.73l21.32-92.4c1.969-8.609-3.375-17.2-12-19.19c-8.688-2.031-17.19 3.39-19.19 11.1l-22.98 99.59H186.3l21.32-92.4c1.969-8.609-3.375-17.2-12-19.19c-8.719-2.031-17.19 3.39-19.19 11.1L153.4 144H48c-8.844 0-16 7.144-16 15.99C32 168.8 39.16 176 48 176h98.04L109.1 336H16c-8.844 0-16 7.151-16 15.99s7.156 16 16 16h85.73L80.41 460.4c-1.969 8.609 3.375 17.2 12 19.19C93.63 479.9 94.81 480 96 480c7.281 0 13.88-4.1 15.59-12.41l22.98-99.59h127.2l-21.32 92.4c-1.969 8.609 3.375 17.2 12 19.19C253.6 479.9 254.8 480 256 480c7.281 0 13.88-4.1 15.59-12.41l22.98-99.59H400c8.844 0 16-7.161 16-16s-7.156-15.99-16-15.99h-98.04l36.92-159.1H432c8.844 0 16-7.168 16-16.01C448 151.2 440.8 144 432 144zM269.1 336H141.1L178.9 176h127.2L269.1 336z" />
//                     </SvgIcon>
//                   ),
//                 }}
//                 InputLabelProps={{
//                   shrink: true, // Always show the label
//                 }}
//               />
//             </Grid>

//             {/* Trailer Type Dropdown */}
//             <Grid item xs={12} sm={6} md={4} lg={3}>
//               <FormControl fullWidth size="small" variant="outlined">
//                 <TextField
//                   label="Trailer Type"
//                   select
//                   value={trailerType}
//                   onChange={(e) => setTrailerType(e.target.value)}
//                   InputProps={{
//                     style: { height: 40 }, // Adjust height here
//                   }}
//                   InputLabelProps={{
//                     shrink: true, // Always show the label
//                   }}
//                 >
//                   <MenuItem value="">
//                     <em>Select Trailer Type</em>
//                   </MenuItem>
//                   <MenuItem value="Open">Open</MenuItem>
//                   <MenuItem value="Closed">Closed</MenuItem>
//                   <MenuItem value="Refrigerated">Refrigerated</MenuItem>
//                 </TextField>
//               </FormControl>
//             </Grid>

//             {/* Description Box */}
//             <Grid item xs={12}>
//               <TextField
//                 label="Description"
//                 placeholder="Enter description here"
//                 multiline
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows={4}
//                 fullWidth
//                 size="small"
//                 variant="outlined"
//                 InputLabelProps={{
//                   shrink: true, // Always show the label
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>

//       <Card style={{ margin: "20px", padding: "20px" }}>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             Vehicle
//           </Typography>

//           <Grid container spacing={2} style={{ marginTop: "16px" }}>
//             <Grid item xs={12} md={4}>
//               <TextField
//                 fullWidth
//                 label="Amount Of Vehicle"
//                 variant="outlined"
//                 value={vehicleAmount}
//                 onChange={(e) => setVehicleAmount(e.target.value)}
//                 InputProps={{
//                   startAdornment: <span style={{ marginRight: "8px" }}></span>,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <TextField
//                 label="Vehicle Type"
//                 value={vehicleType}
//                 onChange={(e) => setVehicleType(e.target.value)}
//                 select
//                 SelectProps={{
//                   native: true,
//                 }}
//                 InputLabelProps={{
//                   shrink: true, // Always show the label
//                 }}
//               >
//                 <option value="SUV">SUV</option>
//                 <option value="Sedan">Sedan</option>
//                 <option value="Mini-Van">Mini-Van</option>
//                 <option value="Van">Van</option>
//                 <option value="Pickup">Pickup</option>
//               </TextField>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Vehicle notes"
//                 variant="outlined"
//                 value={vehicleNotes}
//                 onChange={(e) => setVehicleNotes(e.target.value)}
//                 multiline
//                 rows={4}
//               />
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>

//       <Card style={{ margin: "20px", padding: "20px" }}>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             Pickup
//           </Typography>

//           <Grid container spacing={2} style={{ marginTop: "16px" }}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Contact Name"
//                 value={pickupContactName}
//                 onChange={(e) => setPickupContactName(e.target.value)}
//                 variant="outlined"
//               />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Contact Email"
//                 variant="outlined"
//                 value={pickupContactEmail}
//                 onChange={(e) => setPickupContactEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Contact Phone"
//                 variant="outlined"
//                 value={pickupContactPhone}
//                 onChange={(e) => setPickupContactPhone(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Phone Notes"
//                 variant="outlined"
//                 value={pickupContactPhoneNotes}
//                 onChange={(e) => setPickupContactPhoneNotes(e.target.value)}
//               />
//             </Grid>

//             <Grid item xs={12} md={8}>
//               <TextField
//                 fullWidth
//                 label="Address"
//                 variant="outlined"
//                 value={pickupContactAddress}
//                 onChange={(e) => setPickupContactAddress(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <TextField
//                 fullWidth
//                 label="Zip"
//                 variant="outlined"
//                 value={pickupContactZip}
//                 onChange={(e) => setPickupContactZip(e.target.value)}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} style={{ marginTop: "16px" }}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Restrictions"
//                 placeholder="No restrictions"
//                 variant="outlined"
//                 value={pickupContactPickupRestrictions}
//                 onChange={(e) => setPickupRestrictions(e.target.value)}
//               />
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>

//       {/* Delivery Section */}
//       <Card style={{ margin: "20px", padding: "20px" }}>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             Delivery
//           </Typography>

//           <Grid container spacing={2} style={{ marginTop: "16px" }}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Contact Name"
//                 variant="outlined"
//                 value={deliveryContactName}
//                 onChange={(e) => setDeliveryContactName(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Contact Email"
//                 variant="outlined"
//                 value={deliveryContactEmail}
//                 onChange={(e) => setDeliveryContactEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Contact Phone"
//                 variant="outlined"
//                 value={deliveryContactPhone}
//                 onChange={(e) => setDeliveryContactPhone(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Phone Notes"
//                 variant="outlined"
//                 value={deliveryContactPhoneNotes}
//                 onChange={(e) => setDeliveryContactPhoneNotes(e.target.value)}
//               />
//             </Grid>

//             <Grid item xs={12} md={8}>
//               <TextField
//                 fullWidth
//                 label="Address"
//                 variant="outlined"
//                 value={deliveryAddress}
//                 onChange={(e) => setDeliveryAddress(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <TextField
//                 fullWidth
//                 label="Zip"
//                 variant="outlined"
//                 value={deliveryContactZip}
//                 onChange={(e) => setDeliveryContactZip(e.target.value)}
//               />
//             </Grid>
//           </Grid>

//           <Grid container spacing={2} style={{ marginTop: "16px" }}>
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 label="Restrictions"
//                 placeholder="No restrictions"
//                 variant="outlined"
//                 value={deliveryRestrictions}
//                 onChange={(e) => setDeliveryRestrictions(e.target.value)}
//               />
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>

//       <Card style={{ margin: "20px", padding: "20px" }}>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>
//             Payment
//           </Typography>

//           <Grid container spacing={2} style={{ marginTop: "16px" }}>
//             <Grid item xs={12} md={4}>
//               <TextField
//                 fullWidth
//                 label="Carrier Pay"
//                 variant="outlined"
//                 value={payment}
//                 onChange={(e) => setPayment(e.target.value)}
//                 InputProps={{
//                   startAdornment: <span style={{ marginRight: "8px" }}>$</span>,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <TextField
//                 fullWidth
//                 label="Type"
//                 value={paymentType}
//                 onChange={(e) => setPaymentTypes(e.target.value)}
//                 select
//                 SelectProps={{
//                   native: true,
//                 }}
//                 InputLabelProps={{
//                   shrink: true, // Always show the label
//                 }}
//               >
//                 {/* Placeholder option */}
//                 <option value="" disabled>
//                   Select a type
//                 </option>
//                 <option value="COD">COD</option>
//                 <option value="uShip">uShip</option>
//                 <option value="Other">Other</option>
//               </TextField>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Payment notes"
//                 variant="outlined"
//                 value={paymentNotes}
//                 onChange={(e) => setPaymentNotes(e.target.value)}
//                 multiline
//                 rows={4}
//               />
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default BasicDetailsForm;


import React, { useState } from "react";
import {
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  Button,
  MenuItem,
  FormControl,
  SvgIcon,
  Box,
  Paper,
} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Box)`
  height: calc(100vh - 40px);
  padding: 20px;
  background-color: #F5F7FA;
  overflow: auto;
`;

const StyledPaper = styled(Paper)`
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 5, 37, 0.08);
  max-height: 90vh; 
  overflow-y: auto; 
`;

const StyledButton = styled(Button)`
  background-color: #C8AF61;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #000525;
}
`;

const BasicDetailsForm = () => {
  const [loadId, setLoadId] = useState("");
  const [trailerType, setTrailerType] = useState("");
  const [description, setDescription] = useState("");
  const [vehicleAmount, setVehicleAmount] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNotes, setVehicleNotes] = useState("");
  const [pickupContactName, setPickupContactName] = useState("");
  const [pickupContactEmail, setPickupContactEmail] = useState("");
  const [pickupContactPhone, setPickupContactPhone] = useState("");
  const [pickupContactPhoneNotes, setPickupContactPhoneNotes] = useState("");
  const [pickupContactAddress, setPickupContactAddress] = useState("");
  const [pickupContactZip, setPickupContactZip] = useState("");
  const [pickupContactPickupRestrictions, setPickupRestrictions] = useState("");
  const [deliveryContactName, setDeliveryContactName] = useState("");
  const [deliveryContactEmail, setDeliveryContactEmail] = useState("");
  const [deliveryContactPhone, setDeliveryContactPhone] = useState("");
  const [deliveryContactPhoneNotes, setDeliveryContactPhoneNotes] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryContactZip, setDeliveryContactZip] = useState("");
  const [deliveryRestrictions, setDeliveryRestrictions] = useState("");
  const [payment, setPayment] = useState("");
  const [paymentType, setPaymentTypes] = useState("");
  const [paymentNotes, setPaymentNotes] = useState("");

  const validateFields = () => {
    if (
      !loadId ||
      !trailerType ||
      !description ||
      !vehicleAmount ||
      !vehicleType ||
      !vehicleNotes ||
      !pickupContactName ||
      !pickupContactEmail ||
      !pickupContactPhone ||
      !pickupContactPhoneNotes ||
      !pickupContactAddress ||
      !pickupContactZip ||
      !deliveryContactName ||
      !deliveryContactEmail ||
      !deliveryContactPhone ||
      !deliveryContactPhoneNotes ||
      !deliveryAddress ||
      !deliveryContactZip ||
      !deliveryRestrictions ||
      !payment ||
      !paymentType ||
      !paymentNotes
    ) {
      alert("Please fill in all required fields before creating the order.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      return; // Stop if validation fails
    }

    // Retrieve user_id from local storage
    const userId = localStorage.getItem("user_id");

    // Create formData object and include user_id
    const formData = {
      loadId,
      trailerType,
      description,
      vehicleAmount,
      vehicleType,
      vehicleNotes,
      pickupContactName,
      pickupContactEmail,
      pickupContactPhone,
      pickupContactPhoneNotes,
      pickupContactAddress,
      pickupContactZip,
      pickupContactPickupRestrictions,
      deliveryContactName,
      deliveryContactEmail,
      deliveryContactPhone,
      deliveryContactPhoneNotes,
      deliveryAddress,
      deliveryContactZip,
      deliveryRestrictions,
      payment,
      paymentType,
      paymentNotes,
      userId,
    };

    try {
      const response = await fetch(
        "https://truckbackend-production.up.railway.app/api/create-orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Order saved:", result);
        alert("Order created successfully");

        // Reset form fields
        setLoadId("");
        setTrailerType("");
        setDescription("");
        setVehicleAmount("");
        setVehicleType("");
        setVehicleNotes("");
        setPickupContactName("");
        setPickupContactEmail("");
        setPickupContactPhone("");
        setPickupContactPhoneNotes("");
        setPickupContactAddress("");
        setPickupRestrictions("");
        setDeliveryRestrictions("");
        setPickupContactZip("");
        setDeliveryContactName("");
        setDeliveryContactEmail("");
        setDeliveryContactPhone("");
        setDeliveryContactPhoneNotes("");
        setDeliveryAddress("");
        setDeliveryContactZip("");
        setPayment("");
        setPaymentTypes("");
        setPaymentNotes("");
      } else {
        console.error("Error:", result);
        alert("Failed to create order");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create order");
    }
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h4" sx={{ color: '#000525', fontWeight: 'bold', mb: 2 }}>
          Add Order
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Load ID"
              value={loadId}
              onChange={(e) => setLoadId(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Trailer Type"
              value={trailerType}
              onChange={(e) => setTrailerType(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Vehicle Amount"
              value={vehicleAmount}
              onChange={(e) => setVehicleAmount(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Vehicle Type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Vehicle Notes"
              value={vehicleNotes}
              onChange={(e) => setVehicleNotes(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "16px" }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Contact Name"
              value={pickupContactName}
              onChange={(e) => setPickupContactName(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Contact Email"
              value={pickupContactEmail}
              onChange={(e) => setPickupContactEmail(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Contact Phone"
              value={pickupContactPhone}
              onChange={(e) => setPickupContactPhone(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone Notes"
              value={pickupContactPhoneNotes}
              onChange={(e) => setPickupContactPhoneNotes(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              label="Address"
              value={pickupContactAddress}
              onChange={(e) => setPickupContactAddress(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Zip"
              value={pickupContactZip}
              onChange={(e) => setPickupContactZip(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "16px" }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Restrictions"
              value={pickupContactPickupRestrictions}
              onChange={(e) => setPickupRestrictions(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "16px" }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Contact Name"
              value={deliveryContactName}
              onChange={(e) => setDeliveryContactName(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Contact Email"
              value={deliveryContactEmail}
              onChange={(e) => setDeliveryContactEmail(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Contact Phone"
              value={deliveryContactPhone}
              onChange={(e) => setDeliveryContactPhone(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone Notes"
              value={deliveryContactPhoneNotes}
              onChange={(e) => setDeliveryContactPhoneNotes(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              label="Address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Zip"
              value={deliveryContactZip}
              onChange={(e) => setDeliveryContactZip(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "16px" }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Restrictions"
              value={deliveryRestrictions}
              onChange={(e) => setDeliveryRestrictions(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "16px" }}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Carrier Pay"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: <span style={{ marginRight: "8px" }}>$</span>,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Type"
              value={paymentType}
              onChange={(e) => setPaymentTypes(e.target.value)}
              select
              SelectProps={{
                native: true,
              }}
              InputLabelProps={{
                shrink: true, // Always show the label
              }}
              margin="normal"
            >
              {/* Placeholder option */}
              <option value="" disabled>
                Select a type
              </option>
              <option value="COD">COD</option>
              <option value="uShip">uShip</option>
              <option value="Other">Other</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Payment notes"
              value={paymentNotes}
              onChange={(e) => setPaymentNotes(e.target.value)}
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      </StyledPaper>
    </StyledContainer>
  );
};

export default BasicDetailsForm;
