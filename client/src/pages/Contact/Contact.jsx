 import React, { useState } from 'react';
import './Contact.css'; // CSS for styling
import Footer from '../../components/Footer/Footer';

function Contact() {
    const [formData, setFormData] = useState({
        subject: '',
        name: '',
        email: '',
        phone: '',
        budget: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('http://localhost:5000/submit-form', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });
          if (response.ok) {
              // Form submission was successful
              // Optionally, reset the form
              setFormData({ subject: '', name: '', email: '', phone: '', budget: '', description: '' });
              console.log('Form submitted successfully');
          } else {
              // Form submission failed
              console.error('Form submission failed:', response.statusText);
          }
      } catch (error) {
          // An error occurred while submitting the form
          console.error('Form submission failed:', error);
      }
  };
  

    return (
      <>
        <div className="contact-us-container" style={{marginTop:"60vh"}}>
            <div className="contact-text">
                <h2>The Future Awaits</h2>
                <p>
                Got a burning AI idea, question, or just want to chat about what we do? We're all ears! Reach out, and our friendly team at Alinspace AI will be right there to guide, assist, or simply share in your excitement. Let's make your AI journey memorable together!
                </p>
            </div>
            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <input type="tel" name="phone" placeholder="Phone(Include country code, eg +1 for USA)" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="budget">What is your budget for this project?</label>
                        <select name="budget" value={formData.budget} onChange={handleChange} required >
                            <option value="$2500">less than $3000</option>
                            <option value="$3000 - $5000">$3000 - $5000</option>
                            <option value="$5000 - $10000">$5000 - $10000</option>
                            <option value="$10000 - $20000">$10000 - $20000</option>
                            <option value="$20000+">$20000+</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea name="description" placeholder="How can we help you?" value={formData.description} onChange={handleChange} required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
  

    </div>
    <Footer/>
    </>
  )
}

export default Contact
