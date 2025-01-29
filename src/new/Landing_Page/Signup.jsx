

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// const Signup = () => {
//   const navigate = useNavigate(); // Initialize the navigate function
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     accountType: "CEO",
//     gender: "Male",
//     country: "",
//     language: "",
//     password: "", // Added password to the state
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataObj = new FormData();
//     formDataObj.append("firstName", formData.firstName);
//     formDataObj.append("lastName", formData.lastName);
//     formDataObj.append("email", formData.email);
//     formDataObj.append("phone", formData.phone);
//     formDataObj.append("accountType", formData.accountType);
//     formDataObj.append("gender", formData.gender);
//     formDataObj.append("country", formData.country);
//     formDataObj.append("language", formData.language);
//     formDataObj.append("password", formData.password);

//     if (selectedImage) {
//       const file = selectedImage; // Use the file directly
//       formDataObj.append("profilePic", file, file.name);
//     }

//     try {
//       const response = await fetch(
//         "https://truckbackend-production.up.railway.app/api/add-user",
//         {
//           method: "POST",
//           body: formDataObj,
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         console.log("User added successfully:", data);
//         setIsModalOpen(true);

//         // Clear the form fields
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           accountType: "CEO",
//           gender: "Male",
//           country: "",
//           language: "",
//           password: "",
//         });
//         setSelectedImage(null); // Clear the selected image

//         // Redirect to the login screen
//         navigate("/Signin"); // Navigate to the Signin page
//       } else {
//         console.error("Failed to add user");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(file); // Store the file directly
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "120vh",
//         width: "100%",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       {/* Left Section */}
//       <div style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
//         <img
//           src="https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg?t=st=1736417843~exp=1736421443~hmac=d00ee020f1a460464f96ef217301ac82c94e1d060f83506b4a4348c0725c4a02&w=826"
//           alt="Truck Background"
//           style={{ width: "90%", height: "100%", objectFit: "cover" }}
//         />
//       </div>

//       {/* Right Section */}
//       <div
//         style={{
//           backgroundColor: "#F2D9BB",
//           position: "relative",
//           fontFamily: "Spectral",
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           width: "90%",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "0",
//         }}
//       >
//         {/* Empty Container Div to Shift the Left Side Down */}
       
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             marginTop: "1px",
//             position: "relative",
//             right: "36px",
//             fontFamily: "DM Serif Text",
//             width: "70%",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//             marginBottom: "10px",
//             marginTop: "50px",
//           }}
//         >
//           {/* Profile Image Upload */}
//           <div style={styles.photoContainer}>
//             <label htmlFor="uploadPhoto" style={styles.photoPlaceholder}>
//               {selectedImage ? (
//                 <img
//                   src={URL.createObjectURL(selectedImage)} // Use URL.createObjectURL for preview
//                   alt="Uploaded Preview"
//                   style={styles.uploadedImage}
//                 />
//               ) : (
//                 <>
//                   <i style={styles.cameraIcon}>📷 </i>
//                   <p style={styles.uploadText}>Upload Photo</p>
//                 </>
//               )}
//             </label>
//             <input
//               type="file"
//               id="uploadPhoto"
//               style={{ display: "none", borderRadius: "100px" }}
//               accept="image/*"
//               onChange={handleImageUpload}
//             />
//           </div>

//           {/* First Name and Last Name */}
//           <div style={{ display: "flex", gap: "10px", borderRadius: "25px" }}>
//             <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//               <label
//                 htmlFor="firstName"
//                 style={{ fontSize: "14px", marginBottom: "5px" }}
//               >
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="Enter your first name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 style={{
//                   color: "#260F0D",
//                   padding: "10px",
//                   borderRadius: "50px",
//                   border: "2px solid #2A8C82",
//                 }}
//               />
//             </div>

//             <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//               <label
//                 htmlFor="lastName"
//                 style={{ fontSize: "14px", marginBottom: "5px" }}
//               >
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Enter your last name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "50px",
//                   border: "2px solid #2A8C82",
//                 }}
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <label
//               htmlFor="email"
//               style={{ fontSize: "14px", marginBottom: "5px" }}
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               style={{
//                 padding: "10px",
//                 borderRadius: "50px",
//                 border: "2px solid #2A8C82",
//               }}
//             />
//           </div>

//           {/* Password */}
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <label
//               htmlFor="password"
//               style={{ fontSize: "14px", marginBottom: "5px" }}
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               style={{
//                 padding: "10px",
//                 borderRadius: "50px",
//                 border: "2px solid #2A8C82",
//               }}
//             />
//           </div>

//           {/* Gender and Phone Number */}
//           <div style={{ display: "flex", gap: "10px" }}>
//             <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//               <label
//                 htmlFor="gender"
//                 style={{ fontSize: "14px", marginBottom: "5px" }}
//               >
//                 Gender
//               </label>
//               <select
//                 id="gender"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "50px",
//                   width: "100px",
//                   border: "2px solid #2A8C82",
//                 }}
//               >
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//               <label
//                 htmlFor="phone"
//                 style={{ fontSize: "14px", marginBottom: "5px" }}
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "50px",
//                   border: "2px solid #2A8C82",
//                 }}
//               />
//             </div>
//           </div>

//           {/* Country and Language */}
//           <div style={{ display: "flex", gap: "10px" }}>
//             <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//               <label
//                 htmlFor="country"
//                 style={{ fontSize: "14px", marginBottom: "5px" }}
//               >
//                 Country
//               </label>
//               <input
//                 type="text"
//                 id="country"
//                 name="country"
//                 placeholder="Enter your country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "50px",
//                   border: "2px solid #2A8C82",
//                 }}
//               />
//             </div>

//             <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//               <label
//                 htmlFor="language"
//                 style={{ fontSize: "14px", marginBottom: "5px" }}
//               >
//                 Language
//               </label>
//               <input
//                 type="text"
//                 id="language"
//                 name="language"
//                 placeholder="Enter your language"
//                 value={formData.language}
//                 onChange={handleChange}
//                 style={{
//                   padding: "10px",
//                   borderRadius: "50px",
//                   border: "2px solid #2A8C82",
//                 }}
//               />
//             </div>
//           </div>

//           {/* Role */}
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <label
//               htmlFor="role"
//               style={{ fontSize: "14px", marginBottom: "5px" }}
//             >
//               Select Role
//             </label>
//             <select
//               id="role"
//               name="accountType"
//               value={formData.accountType}
//               onChange={handleChange}
//               style={{
//                 padding: "10px",
//                 borderRadius: "50px",
//                 width: "100%",
//                 border: "2px solid #2A8C82",
//               }}
//             >
//                <option value="">Select Role</option>
//                <option value="User">User </option>
//                <option value="Driver">Driver</option>
//               <option value="Dispatcher">Dispatcher</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               marginTop: "10px",
//               marginBottom:"5px"
//             }}
//           >
//             <button
//               type="submit"
//               style={{
//                 padding: "10px 2px",
//                 backgroundColor: "#2A8C82",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "25px",
//                 cursor: "pointer",
//                 width: "50%",
//                 fontSize: "15px",
//               }}
//             >
//               Create Account
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   photoContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginBottom: "20px",
//   },
//   photoPlaceholder: {
//     width: "120px",
//     marginTop:"2px",
//     height: "120px",
//     borderRadius: "100px",
//     backgroundColor: "#d8d8d8",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     border: "2px solidrgb(8, 95, 86)",
//     cursor: "pointer",
//   },
//   uploadedImage: {
//     width: "100%",
//     height: "100%",
//     borderRadius: "100px",
//     objectFit: "cover",
//   },
//   cameraIcon: {
//     fontSize: "40px",
//   },
//   uploadText: {
//     fontSize: "16px",
//   },
// };

// export default Signup;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const Signup = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    accountType: "",
    gender: "Male",
    country: "",
    language: "",
    password: "", // Added password to the state
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("firstName", formData.firstName);
    formDataObj.append("lastName", formData.lastName);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("accountType", formData.accountType);
    formDataObj.append("gender", formData.gender);
    formDataObj.append("country", formData.country);
    formDataObj.append("language", formData.language);
    formDataObj.append("password", formData.password);

    if (selectedImage) {
      const file = selectedImage; // Use the file directly
      formDataObj.append("profilePic", file, file.name);
    }

    try {
      const response = await fetch(
        "https://truckbackend-production.up.railway.app/api/add-user",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("User added successfully:", data);
        setIsModalOpen(true);

        // Clear the form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          accountType: "CEO",
          gender: "Male",
          country: "",
          language: "",
          password: "",
        });
        setSelectedImage(null); // Clear the selected image

        // Redirect to the login screen
        navigate("/Signin"); // Navigate to the Signin page
      } else {
        console.error("Failed to add user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the file directly
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <img
          src="https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg?t=st=1736417843~exp=1736421443~hmac=d00ee020f1a460464f96ef217301ac82c94e1d060f83506b4a4348c0725c4a02&w=826"
          alt="Truck Background"
          style={styles.backgroundImage}
        />
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Create an Account</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Profile Image Upload */}
            <div style={styles.photoContainer}>
              <label htmlFor="uploadPhoto" style={styles.photoPlaceholder}>
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Uploaded Preview"
                    style={styles.uploadedImage}
                  />
                ) : (
                  <>
                    <i style={styles.cameraIcon}>📷</i>
                    <p style={styles.uploadText}>Upload Photo</p>
                  </>
                )}
              </label>
              <input
                type="file"
                id="uploadPhoto"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>

            {/* Name Fields */}
            <div style={styles.inputRow}>
              <div style={styles.inputGroup}>
                <label htmlFor="firstName" style={styles.label}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="lastName" style={styles.label}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div style={styles.inputRow}>
              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="phone" style={styles.label}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
            </div>

            {/* Account Type and Gender */}
            <div style={styles.inputRow}>
              <div style={styles.inputGroup}>
                <label htmlFor="accountType" style={styles.label}>
                  Account Type
                </label>
                <select
                  id="accountType"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="User">User </option>
               <option value="Driver">Driver</option>
              <option value="Dispatcher">Dispatcher</option>
                </select>
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="gender" style={styles.label}>
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  style={styles.select}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Country and Language */}
            <div style={styles.inputRow}>
              <div style={styles.inputGroup}>
                <label htmlFor="country" style={styles.label}>
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="language" style={styles.label}>
                  Language
                </label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  placeholder="Enter your language"
                  value={formData.language}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>
            </div>

            {/* Password */}
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.submitButton}>
              Sign Up
            </button>
          </form>
          
          <p style={styles.signinText}>
            Already have an account?{" "}
            <span onClick={() => navigate("/Signin")} style={styles.signinLink}>
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#F5F7FA",
    overflow: "hidden",
  },
  leftSection: {
    flex: 1,
    backgroundColor: "#000525",
    position: "relative",
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: "0.8",
  },
  rightSection: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    overflow: "hidden",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "20px 30px",
    width: "100%",
    maxWidth: "600px",
    height: "calc(100vh - 40px)",
    boxShadow: "0 10px 25px rgba(0, 5, 37, 0.1)",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#F5F7FA",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#C8AF61",
      borderRadius: "4px",
      "&:hover": {
        background: "#000525",
      },
    },
  },
  heading: {
    fontSize: "28px",
    color: "#000525",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  photoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "15px",
  },
  photoPlaceholder: {
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    backgroundColor: "#F5F7FA",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: `2px dashed #C8AF61`,
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#000525",
    },
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50px",
    objectFit: "cover",
  },
  cameraIcon: {
    fontSize: "28px",
    marginBottom: "6px",
    color: "#C8AF61",
  },
  uploadText: {
    fontSize: "12px",
    color: "#000525",
    marginTop: "6px",
  },
  inputRow: {
    display: "flex",
    gap: "15px",
    width: "100%",
  },
  inputGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "13px",
    color: "#000525",
    marginBottom: "6px",
    fontWeight: "500",
  },
  input: {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "2px solid #F5F7FA",
    backgroundColor: "#F5F7FA",
    fontSize: "13px",
    color: "#000525",
    transition: "all 0.3s ease",
    outline: "none",
    "&:focus": {
      borderColor: "#C8AF61",
      backgroundColor: "#ffffff",
    },
  },
  select: {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "2px solid #F5F7FA",
    backgroundColor: "#F5F7FA",
    fontSize: "13px",
    color: "#000525",
    transition: "all 0.3s ease",
    outline: "none",
    cursor: "pointer",
    "&:focus": {
      borderColor: "#C8AF61",
      backgroundColor: "#ffffff",
    },
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#C8AF61",
    color: "#000525",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "15px",
    "&:hover": {
      backgroundColor: "#000525",
      color: "#C8AF61",
      transform: "translateY(-2px)",
    },
  },
  signinText: {
    textAlign: "center",
    marginTop: "15px",
    color: "#000525",
    fontSize: "13px",
  },
  signinLink: {
    color: "#C8AF61",
    cursor: "pointer",
    fontWeight: "600",
    textDecoration: "underline",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#000525",
    },
  },
};

export default Signup;
