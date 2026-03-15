import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'product-support',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    alert('Thank you for your inquiry. We will contact you soon.');
    setFormData({ name: '', email: '', inquiryType: 'product-support', message: '' });
  };

  return (
    <div className="page-contact">
      <header className="page-header contact-header">
        <h1 className="page-title">Inquiries</h1>
      </header>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="inquiryType">Inquiry Type</label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="form-control"
            >
              <option value="product-support">Product Support</option>
              <option value="product-inquiry">Product Details Request</option>
              <option value="business-wholesale">Business & Wholesale</option>
              <option value="press">Press & Media</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="form-control"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-submit">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
}
