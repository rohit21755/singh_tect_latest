import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const simpleValidator = useRef(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (simpleValidator.current.allValid()) {
            try {
                const response = await axios.post("http://localhost:4000/contact-form/add", formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
    
                if (response.status === 201) {
                    alert("Message sent successfully!");
                    setFormData({ name: '', email: '', message: '' }); // Clear form after success
                } else {
                    alert("Something went wrong. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("Failed to send message.");
            }
        } else {
            simpleValidator.current.showMessages();
            setFormData({ ...formData });
        }
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="row g-4">
                <div className="col-lg-12">
                    <div className="form-clt">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name*"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div className="icon">
                            <i className="fal fa-user"></i>
                        </div>
                        {simpleValidator.current.message('name', formData.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-clt">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address*"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="icon">
                            <i className="fal fa-envelope"></i>
                        </div>
                        {simpleValidator.current.message('email', formData.email, 'required|email')}
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-clt-big form-clt">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Enter Your Message here"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <div className="icon">
                            <i className="fal fa-edit"></i>
                        </div>
                        {simpleValidator.current.message('message', formData.message, 'required|min:10|max:200')}
                    </div>
                </div>
                <div className="col-lg-6">
                    <button type="submit" className="theme-btn">
                        <i className="fal fa-paper-plane"></i> Get In Touch
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
