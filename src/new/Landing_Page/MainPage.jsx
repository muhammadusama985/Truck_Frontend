import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


import myBgImage from '../../images/th.jpg'
import mylogo from '../../images/logo.png'
import mytruck from '../../images/truck.png'
import mywire from '../../images/wire.png'
import mybox from '../../images/box.png'

function MainPage() {

    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle sign-up button click
    const handleSignUp = () => {
        navigate('/Signup'); // Navigate to the Signup page
    };

    // Function to handle sign-in button click
    const handleSignIn = () => {
        navigate('/Signin'); // Navigate to the Signup page
    };


    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* Header */}
            <header style={{ display: "flex", justifyContent: "space-between", padding: "20px", backgroundColor: "#f4f4f4" }}>
                <img
                    img src={mylogo}
                    alt="Logo"
                    style={{ height: "70px" }}
                />
                <nav style={{ display: "flex", gap: "20px" }}>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>Dispatcher</a>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>Carrier</a>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>Customer</a>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>MC Owner</a>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>Contact</a>
                    <a href="#" style={{ textDecoration: "none", color: "#333" }}>About Us</a>
                </nav>
            </header>

            {/* Hero Section */}
            <div style={{
                backgroundImage: `url(${myBgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "center",
                padding: "100px 20px",
                color: "#fff"
            }}>
                <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Fast & Safe Transportation</h1>
                <div style={{ margin: "20px 0" }}>
                    <button style={{ marginRight: "10px", padding: "10px 20px", fontSize: "16px", backgroundColor: "#007BFF", color: "white ", border: "none", borderRadius: "5px" }}
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                    <button style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#6C757D", color: "white", border: "none", borderRadius: "5px" }}
                        onClick={handleSignIn}

                    >
                        Sign In
                    </button>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "40px" }}>
                    <div>
                        <h2 style={{ fontSize: "36px", margin: "0" }}>10+</h2>
                        <p>Year's Experience</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: "36px", margin: "0" }}>100+</h2>
                        <p>Experienced Staffs</p>
                    </div>
                    <div>
                        <h2 style={{ fontSize: "36px", margin: "0" }}>1000+</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "#f8f9fa" }}>
                <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Services We Provide</h2>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                    <div style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        padding: "20px",
                        width: "281px",
                        paddingleft: "7px",
                        paddingright: "8px",
                        textAlign: "center",
                        backgroundColor: "#fff"
                    }}>
                        <img src={mytruck} alt="Load Assignment & Management" style={{ height: "150px" }} />
                        <p>Load Assignment & Management</p>
                    </div>
                    <div style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        padding: "20px",
                        width: "200px",
                        textAlign: "center",
                        backgroundColor: "#fff"
                    }}>
                        <img src={mywire} alt="Real-Time Tracking" style={{ height: "150px" }} />
                        <p>Real-Time Tracking</p>
                    </div>
                    <div style={{
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        padding: "20px",
                        width: "200px",
                        textAlign: "center",
                        backgroundColor: "#fff"
                    }}>
                        <img src={mybox} alt="Payment & Invoicing" style={{ height: "150px" }} />
                        <p>Payment & Invoicing</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage;