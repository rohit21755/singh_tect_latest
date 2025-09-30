import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfIcon1 from '../../img/icon/location.png';
import InfIcon2 from '../../img/icon/12.svg';
import InfIcon3 from '../../img/icon/13.svg';
import './career.css';
// const jobListings = [
//     { id: 1, title: "Software Engineer", description: "Develop and maintain software applications.", experience: "2+ years", type: "Full-time", location: "New York, USA" },
//     { id: 2, title: "UI/UX Designer", description: "Design user interfaces and improve user experience.", experience: "3+ years", type: "Remote", location: "London, UK" },
//     { id: 3, title: "Project Manager", description: "Lead project teams and ensure timely delivery.", experience: "5+ years", type: "Hybrid", location: "Berlin, Germany" },
    
// ];

const Careerpage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        education: '',
        experience: '',
        type: '',
        message: '',
        contactNumber: '',
        jobId: ''
    });
    const [jobListings, setJobListings] = useState([]);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        fetchJobs();
    }, []);
    const fetchJobs = async () => {
        try {
            const response = await axios.get("https://singh-tech-backend-1.onrender.com/job-application");
            setJobListings(response.data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await axios.post("https://singh-tech-backend-1.onrender.com/jobs-form/create", formData);

            if (response.status === 201) {
                alert("Application submitted successfully!");
                setFormData({
                    name: '',
                    email: '',
                    address: '',
                    education: '',
                    experience: '',
                    type: '',
                    message: '',
                    contactNumber: '',
                    jobId: ''
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit application.");
        }
    };

    return (
        <div>
            {/* Contact Info Section */}
            <section className="contact-info-section fix section-padding section-bg-2">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-items text-center">
                                <div className="icon"><img src={InfIcon1} alt="icon-img" /></div>
                                <div className="content">
                                    <h3>Address</h3>
                                    <p>Bowery St, New York, 37 USA <br /> NY 10013, USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-items active text-center">
                                <div className="icon"><img src={InfIcon2} alt="icon-img" /></div>
                                <div className="content">
                                    <h3>Phone Number</h3>
                                    <p>+1255 - 568 - 6523 <br /> +1255 - 568 - 6523</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-items text-center">
                                <div className="icon"><img src={InfIcon3} alt="icon-img" /></div>
                                <div className="content">
                                    <h3>Email Address</h3>
                                    <p>email@example.com <br /> info@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Listings Section */}
            <section className="job-listings section-padding">
                <div className="container">
                    <h2 className="section-title text-center">Open Positions</h2>
                    <div className="row">
                        {jobListings.map((job) => (
                            <div key={job.id} className="col-lg-4 col-md-6">
                                <div className="job-card">
                                    <h3>{job.title}</h3>
                                    <p>{job.description}</p>
                                    <p><strong>Experience:</strong> {job.experience}</p>
                                    <p><strong>Type:</strong> {job.type}</p>
                                    <p><strong>Location:</strong> {job.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Application Form */}
            <section className="job-application-form section-padding">
                <div className="container">
                    <h2 className="section-title text-center">Apply for a Job</h2>
                    <form onSubmit={handleSubmit} className="form-container">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
                        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
                        <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Education" required />
                        <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="Years of Experience" required />
                        <select name="type" value={formData.type} onChange={handleChange} required>
                            <option value="">Select Job Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Remote">Remote</option>
                            <option value="Contract">Contract</option>
                        </select>
                        <select name="jobId" value={formData.jobId} onChange={handleChange} required>
                            <option value="">Select Job Title</option>
                            {jobListings.map((job) => (
                                <option key={job.id} value={job.id}>{job.title}</option>
                            ))}
                        </select>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Why are you a good fit?" required></textarea>
                        <button type="submit" className="submit-btn">Submit Application</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Careerpage;
