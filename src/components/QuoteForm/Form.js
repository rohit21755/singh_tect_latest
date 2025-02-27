import React, { useRef, useState } from 'react';

export const Form = () => {
    const [delivery, setDelivery] = useState('self');
    const companyRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const contactRef = useRef();
    const emailRef = useRef();
    const quantityRef = useRef();
    const pdfRef = useRef();
    const sizeRef = useRef();
    const pagesRef = useRef();
    const notesRef = useRef();
    const fileRef = useRef();
    const addressRef = useRef();

    return (
        <div className="form-container">
            <div className="form-content">
                <input ref={companyRef} placeholder='Company name' className="input-field" />
                <input ref={firstNameRef} placeholder='First name' className="input-field" />
                <input ref={lastNameRef} placeholder='Last name' className="input-field" />
                <input ref={contactRef} placeholder='Contact number' className="input-field" />
                <input ref={emailRef} placeholder='Email' className="input-field" />
                
                <p className="section-title">Order Details</p>
                
                <label>Choose your Product:</label>
                <select className="input-field">
                    <option value="Packaging">Packaging</option>
                    <option value="Posters">Posters</option>
                    <option value="Flyers">Flyers</option>
                    <option value="Brochures">Brochures</option>
                </select>
                <textarea placeholder="Print job Description" className="textarea-field"></textarea>
                <input ref={quantityRef} placeholder='Quantity' className="input-field" />

                <label>Art Work</label>
                <p>We accept high resolution PDF with Crop Marks and 3mm Bleed</p>
                <input ref={pdfRef} placeholder='Link to Pdf' className="input-field" />

                <label>Colour</label>
                <select className="input-field">
                    <option value="Full Colour CMYK">Full Colour CMYK</option>
                    <option value="Black and white">Black and white</option>
                </select>

                <label>How many Sides?</label>
                <select className="input-field">
                    <option value="Single Sided">Single Sided</option>
                    <option value="Double Sided">Double Sided</option>
                    <option value="Booklet/ Book">Booklet/ Book</option>
                </select>

                <label>Paper/ Stock</label>
                <input ref={sizeRef} placeholder='Size' className="input-field" />
                <input ref={pagesRef} placeholder='Number of Pages' className="input-field" />
                <select className="input-field">
                    <option value="Gloss">Gloss</option>
                    <option value="Matt">Matt</option>
                    <option value="Uncoated">Uncoated</option>
                </select>
                <select className="input-field">
                    <option value="80gsm">80gsm</option>
                    <option value="100gsm">100gsm</option>
                    <option value="120gsm">120gsm</option>
                    <option value="150gsm">150gsm</option>
                    <option value="200gsm">200gsm</option>
                    <option value="250gsm">250gsm</option>
                    <option value="300gsm">300gsm</option>
                    <option value="350gsm">350gsm</option>
                    <option value="Unsure">Unsure</option>
                </select>

                <label>Finishing</label>
                <select className="input-field">
                    <option value="No extra finishes">No extra finishes</option>
                    <option value="Gloss Celloglaze">Gloss Celloglaze</option>
                    <option value="Matt Celloglaze">Matt Celloglaze</option>
                    <option value="Stapled">Stapled</option>
                    <option value="Folded">Folded</option>
                    <option value="Hole Punch">Hole Punch</option>
                    <option value="Spot UV / Scodix">Spot UV / Scodix</option>
                    <option value="Other">Other</option>
                </select>

                <label>Booklet Finishing</label>
                <select className="input-field">
                    <option value="None">None</option>
                    <option value="Saddle Stitch (Stapled)">Saddle Stitch (Stapled)</option>
                    <option value="Perfect Bound">Perfect Bound</option>
                    <option value="Plastic Comb Bound">Plastic Comb Bound</option>
                    <option value="Spiral Bound">Spiral Bound</option>
                    <option value="Other">Other</option>
                </select>

                <label>Delivery</label>
                <div className="radio-group">
                    <input type="radio" name="delivery" checked={delivery === 'self'} onChange={() => setDelivery('self')} /> Self Pickup
                    <input type="radio" name="delivery" checked={delivery === 'courier'} onChange={() => setDelivery('courier')} /> Delivery
                </div>
                {delivery === 'courier' && <input ref={addressRef} className="input-field" type='text' placeholder='Address'/>}

                <label>Notes</label>
                <textarea ref={notesRef} placeholder="Any Extra Notes" className="textarea-field"></textarea>
                
                <label>ArtWork (Optional)</label>
                <p>Max size: 200Mb</p>
                <div className="file-input-container">
                    <input ref={fileRef} type='file' className="file-input" />
                </div>
                
                <button type="submit" className="submit-btn">
                    <i className="fal fa-paper-plane"></i> Get In Touch
                </button>
            </div>
        </div>
    );
};

const styles = `
.form-container { display: flex; justify-content: center; padding: 20px; }
.form-content { max-width: 600px; width: 100%; text-align: center; }
.input-field, .textarea-field { width: 100%; margin: 10px 0; padding: 10px; border-bottom: 1px solid #000; border-top: 0px; border-inline: 0 }
.textarea-field { height: 100px; }
.radio-group { display: flex; justify-content: center; gap: 20px; }
.file-input-container { display: flex; justify-content: center; margin-top: 10px; }
.submit-btn { margin-top: 20px; padding: 10px 20px; background: black; color: white; border: none; cursor: pointer; }
@media (max-width: 768px) { .form-content { width: 90%; } }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
