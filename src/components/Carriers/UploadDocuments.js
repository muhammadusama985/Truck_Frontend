import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';  // Import useNavigate instead of navigate

function UploadDocuments() {
  const [files, setFiles] = useState({
    driverLicense: null,
    insurance: null,
    employmentApplication: null,
    drivingRecord: null,
  });

  const location = useLocation();
  const navigate = useNavigate();  // Initialize useNavigate hook
  const carrierId = new URLSearchParams(location.search).get('carrierId'); // Retrieve carrierId from URL

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!carrierId) {
      alert('User ID is missing.');
      return;
    }

    const formData = new FormData();
    formData.append('driverLicense', files.driverLicense);
    formData.append('insurance', files.insurance);
    formData.append('employmentApplication', files.employmentApplication);
    formData.append('drivingRecord', files.drivingRecord);
    formData.append('carrierId', carrierId); // Pass carrierId to the backend

    try {
      const response = await axios.post('http://localhost:5000/api/leasedCarrier/uploadDocuments', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error uploading documents:', error);
      alert('Failed to upload documents.');
    }
  };

  const handleGoToUserList = () => {
    navigate('/carrier-list'); // Use navigate() to go to the user list
  };

  return (
    <div>
      <h2>Upload Documents</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Driver's License:
          <input type="file" name="driverLicense" onChange={handleFileChange} />
        </label>
        <br />
        <label>
          Insurance:
          <input type="file" name="insurance" onChange={handleFileChange} />
        </label>
        <br />
        <label>
          Employment Application:
          <input type="file" name="employmentApplication" onChange={handleFileChange} />
        </label>
        <br />
        <label>
          Driving Record:
          <input type="file" name="drivingRecord" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <button onClick={handleGoToUserList}>Go to User List</button>
    </div>
  );
}

export default UploadDocuments;
