import React, { useState } from "react";
import UsersGrid from "./UsersGrid";

const UserProfile = ({ user, onBack }) => {

    const [BackScreen, setBackScreen] = useState(false); // State to toggle screens


    // Function to handle the button click and move back to User screen
    const handleBackScreenClick = () => {
        setBackScreen(true);
    };


    if (BackScreen) {
        return <UsersGrid />; // If the button is clicked, show AddNewUser screen
    }

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <button onClick={handleBackScreenClick} style={styles.backButton}>
                    ← Back
                </button>
                <h1 style={styles.welcomeText}>Welcome, George Bryant</h1>
                <p style={styles.dateText}>Tue, 07 June 2024</p>
            </header>
            <div style={styles.profileSection}>
                {/* Profile Info Card */}
                <div style={styles.profileCard}>
                    <img
                        src={user.profile_pic} // Fetch the Cloudinary image directly
                        alt="Profile"
                        style={styles.profileImage}
                    />
                    <div style={styles.profileDetails}>
                        <h2 style={styles.profileName}>{user.first_name}</h2>
                        <p style={styles.emailText}>{user.email}</p>
                    </div>
                    <button style={styles.editButton}>Edit</button>
                </div>

                <div style={styles.detailsCard}>
                    <div style={styles.detailRow}>
                        <p style={styles.detailLabel}>Role</p>
                        <input
                            type="text"
                            value={user.account_type}
                            defaultValue=""
                            style={styles.textField}
                        />
                    </div>
                    <div style={styles.detailRow}>
                        <p style={styles.detailLabel}>Country</p>
                        <input
                            type="text"
                            value={user.country}
                            defaultValue=""
                            style={styles.textField}
                        />
                    </div>
                    <div style={styles.detailRow}>
                        <p style={styles.detailLabel}>Gender</p>
                        <input
                            type="text"
                            defaultValue=""
                            value={user.gender}
                            style={styles.textField}
                        />
                    </div>
                    <div style={styles.detailRow}>
                        <p style={styles.detailLabel}>Language</p>
                        <input
                            type="text"
                            defaultValue=""
                            value={user.language}
                            style={styles.textField}
                        />
                    </div>
                </div>
            </div>

            {/* Activity Section */}
            <div style={styles.activitySection}>
                <h3 style={styles.activityTitle}>Activity</h3>
                <p style={styles.activityText}>No activity has been recorded yet.</p>
            </div>

            {/* Legal Section */}
            <div style={styles.legalSection}>
                <h3 style={styles.legalTitle}>
                    <span role="img" aria-label="legal">
                        📖
                    </span>{" "}
                    Legal
                </h3>
                <a href="#" style={styles.link}>
                    Dashboard Terms and Conditions
                </a>
                <a href="#" style={styles.link}>
                    Loadboard Terms and Conditions
                </a>
                <a href="#" style={styles.link}>
                    Freight Management Privacy Notice
                </a>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        backgroundColor: "#f9f9f9",
        height: "100vh",
    },
    header: {
        marginBottom: "20px",
    },

    welcomeText: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    dateText: {
        fontSize: "14px",
        color: "#888",
    },
    profileSection: {
        display: "flex",
        gap: "20px",
    },
    profileCard: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: "15px",
        position: "relative",
    },
    profileImage: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    profileDetails: {
        flex: 1,
    },
    profileName: {
        fontSize: "18px",
        fontWeight: "bold",
    },
    emailText: {
        fontSize: "14px",
        color: "#666",
    },
    editButton: {
        position: "absolute",
        top: "20px",
        right: "20px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "14px",
    },
    detailsCard: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        flex: 1,
    },
    detailRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
    },
    detailLabel: {
        fontSize: "14px",
        color: "#888",
    },
    detailValue: {
        fontSize: "14px",
        fontWeight: "bold",
    },
    activitySection: {
        marginTop: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    activityTitle: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    activityText: {
        fontSize: "14px",
        color: "#888",
    },
    legalSection: {
        marginTop: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    legalTitle: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    link: {
        display: "block",
        fontSize: "14px",
        color: "#007bff",
        textDecoration: "none",
        marginBottom: "5px",
    },
    textField: {
        fontSize: "14px",
        fontWeight: "bold",
        padding: "5px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "60%", // Adjust as needed
        color: "#333",
        outline: "none",
    },
};

export default UserProfile;
