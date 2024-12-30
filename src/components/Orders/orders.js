import React, { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_contact: '',
    pickup_address: '',
    delivery_address: '',
    pickup_date: '',
    delivery_date: '',
    cargo_type: '',
    weight: '',
    volume: '',
    number_of_packages: '',
    special_instructions: '',
    recipient_name: '', // New field
    recipient_number: '', // New field
    recipient_email: '', // New field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the form data to the backend (Node.js server)
    const response = await fetch('http://localhost:5000/api/orders/makeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful form submission (e.g., redirect to orders list)
      console.log('Order submitted successfully');
      // Optionally, clear the form
      setFormData({
        customer_name: '',
        customer_contact: '',
        email:'',
        pickup_address: '',
        delivery_address: '',
        pickup_date: '',
        delivery_date: '',
        cargo_type: '',
        weight: '',
        volume: '',
        number_of_packages: '',
        special_instructions: '',
        recipient_name: '',
        recipient_number: '',
        recipient_email: '',
      });
    } else {
      // Handle error
      console.error('Error submitting order');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="customer_name">Customer Name:</label>
        <input
          type="text"
          id="customer_name"
          name="customer_name"
          value={formData.customer_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="customer_contact">Customer Contact:</label>
        <input
          type="text"
          id="customer_contact"
          name="customer_contact"
          value={formData.customer_contact}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="customer_contact">Customer Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="pickup_address">Pickup Address:</label>
        <input
          type="text"
          id="pickup_address"
          name="pickup_address"
          value={formData.pickup_address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="delivery_address">Delivery Address:</label>
        <input
          type="text"
          id="delivery_address"
          name="delivery_address"
          value={formData.delivery_address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="pickup_date">Pickup Date:</label>
        <input
          type="date"
          id="pickup_date"
          name="pickup_date"
          value={formData.pickup_date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="delivery_date">Delivery Date:</label>
        <input
          type="date"
          id="delivery_date"
          name="delivery_date"
          value={formData.delivery_date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="cargo_type">Cargo Type:</label>
        <input
          type="text"
          id="cargo_type"
          name="cargo_type"
          value={formData.cargo_type}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="volume">Volume:</label>
        <input
          type="number"
          id="volume"
          name="volume"
          value={formData.volume}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="number_of_packages">Number of Packages:</label>
        <input
          type="number"
          id="number_of_packages"
          name="number_of_packages"
          value={formData.number_of_packages}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="special_instructions">Special Instructions:</label>
        <textarea
          id="special_instructions"
          name="special_instructions"
          value={formData.special_instructions}
          onChange={handleChange}
        />
      </div>

      {/* New Fields */}
      <div>
        <label htmlFor="recipient_name">Recipient Name:</label>
        <input
          type="text"
          id="recipient_name"
          name="recipient_name"
          value={formData.recipient_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="recipient_number">Recipient Number:</label>
        <input
          type="text"
          id="recipient_number"
          name="recipient_number"
          value={formData.recipient_number}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="recipient_email">Recipient Email:</label>
        <input
          type="email"
          id="recipient_email"
          name="recipient_email"
          value={formData.recipient_email}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
