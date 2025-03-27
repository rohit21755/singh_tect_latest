import axios from 'axios';
import React, {  useState } from 'react';

export const Form = () => {
    const [delivery, setDelivery] = useState('self');
    const [selectedFile, setSelectedFile] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    
    // State for form fields
    const [formData, setFormData] = useState({
        company: "",
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        product: "Packaging",
        description: "",
        quantity: "",
        pdfLink: "",
        color: "Full Colour CMYK",
        sides: "Single Sided",
        size: "",
        pages: "",
        paperType: "Gloss",
        paperWeight: "80gsm",
        finishing: "No extra finishes",
        bookletFinishing: "None",
        notes: "",
        address: "",
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle File Selection
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => form.append(key, value));
        if (selectedFile) form.append("artwork", selectedFile);

        try {
            const response = await axios.post("http://localhost:4000/orders/submit", form, {
                headers : {
                    "Content-Type": "multipart/form-data"
                }

            });

            
            if (response.status === 201) {
                alert("Order submitted successfully!");
                setModalOpen(true);
            } else {
                alert(
                    "Some Error Occurred. Please try again later."
                );
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to submit order.");
        }
    };

    return (
        <>
        <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-content">
            <input name="company" value={formData.company} onChange={handleChange} placeholder='Company name' className="input-field"  required/>
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First name' className="input-field" required/>
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last name' className="input-field" required/>
            <input name="contact" value={formData.contact} onChange={handleChange} placeholder='Contact number' className="input-field" required/>
            <input name="email" value={formData.email} onChange={handleChange} type='email' placeholder='Email' className="input-field" required/>
            
            <p className="section-title">Order Details</p>

            <label>Choose your Product:</label>
            <select name="product" value={formData.product} onChange={handleChange} className="input-field" required>
                <option value="Packaging">Packaging</option>
                <option value="Posters">Posters</option>
                <option value="Flyers">Flyers</option>
                <option value="Brochures">Brochures</option>
            </select>

            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Print job Description" className="textarea-field"></textarea>
            <input name="quantity" type='number' value={formData.quantity} onChange={handleChange} placeholder='Quantity' className="input-field" required/>

            <label>Art Work</label>
            <input name="pdfLink" value={formData.pdfLink} onChange={handleChange} placeholder='Link to Pdf' className="input-field" required/>

            <label>Colour</label>
            <select name="color" value={formData.color} onChange={handleChange} className="input-field" required>
                <option value="Full Colour CMYK">Full Colour CMYK</option>
                <option value="Black and white">Black and white</option>
            </select>

            <label>How many Sides?</label>
            <select name="sides" value={formData.sides} onChange={handleChange} className="input-field" required>
                <option value="Single Sided">Single Sided</option>
                <option value="Double Sided">Double Sided</option>
                <option value="Booklet/ Book">Booklet/ Book</option>
            </select>

            <label>Paper/ Stock</label>
            <input name="size" value={formData.size} onChange={handleChange} placeholder='Size' className="input-field" required/>
            <input name="pages" value={formData.pages} type='number' onChange={handleChange} placeholder='Number of Pages' className="input-field" required/>

            <label>Finishing</label>
            <select name="finishing" value={formData.finishing} onChange={handleChange} className="input-field">
                <option value="No extra finishes">No extra finishes</option>
                <option value="Gloss Celloglaze">Gloss Celloglaze</option>
                <option value="Matt Celloglaze">Matt Celloglaze</option>
                <option value="Stapled">Stapled</option>
                <option value="Folded">Folded</option>
            </select>

            <label>Delivery</label>
            <div className="radio-group">
                <input type="radio" name="delivery" value="self" checked={delivery === 'self'} onChange={() => setDelivery('self')} /> Self Pickup
                <input type="radio" name="delivery" value="courier" checked={delivery === 'courier'} onChange={() => setDelivery('courier')} /> Delivery
            </div>
            {delivery === 'courier' && 
                <input name="address" value={formData.address} onChange={handleChange} className="input-field" type='text' placeholder='Address'/>}

            <label>Notes</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Any Extra Notes" className="textarea-field"></textarea>

            <label>ArtWork (Optional)</label>
            <input type='file' onChange={handleFileChange} className="file-input" />
            
            <button type="submit" className="submit-btn">Submit Order</button>
        </div>
    </form>
    {modalOpen && (
    <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
    }}>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
            marginBottom: "10px",
        }}>
            <h4>Notification</h4>
            <button onClick={() => setModalOpen(false)} style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px"
            }}>Close</button>
        </div>
        <div style={{ textAlign: "center" }}>
            <p>Order Submitted Successfully!</p>
            <p>We Will Contact You Soon</p>
        </div>
    </div>
)}
    
    </>
    );
};

const styles = `
input, textarea {
    color: black !important;
}
.form-container { display: flex; justify-content: center; padding: 20px; }
.form-content { max-width: 600px; width: 100%; text-align: center; }
.input-field, .textarea-field { width: 100%; margin: 10px 0; padding: 10px; border-bottom: 1px solid #000; border-top: 0px; border-inline: 0; }
.textarea-field { height: 100px; text-color: black; }
.radio-group { display: flex; justify-content: center; gap: 20px; }
.file-input-container { display: flex; justify-content: center; margin-top: 10px; }
.submit-btn { margin-top: 20px; padding: 10px 20px; background: black; color: white; border: none; cursor: pointer; }
@media (max-width: 768px) { .form-content { width: 90%; } }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
